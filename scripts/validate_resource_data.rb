#!/usr/bin/env ruby
# frozen_string_literal: true

require "yaml"
require "uri"

errors = []
urls = Hash.new { |hash, key| hash[key] = [] }

def present?(value)
  value.is_a?(String) && !value.strip.empty?
end

Dir.glob("data/*.{yaml,yml}").sort.each do |path|
  data = YAML.load_file(path)
  sections = data.fetch("sections", nil)

  unless sections.is_a?(Array) && !sections.empty?
    errors << "#{path}: expected non-empty top-level 'sections' array"
    next
  end

  sections.each_with_index do |section, section_index|
    section_name = section["title"]
    section_label = "#{path}: section #{section_index + 1}"

    errors << "#{section_label}: missing title" unless present?(section_name)

    resources = section["resources"] || []
    groups = section["groups"] || []

    unless resources.is_a?(Array)
      errors << "#{section_label}: 'resources' must be an array"
      resources = []
    end

    unless groups.is_a?(Array)
      errors << "#{section_label}: 'groups' must be an array"
      groups = []
    end

    if resources.empty? && groups.empty?
      errors << "#{section_label}: expected resources, groups, or both"
    end

    resource_sets = [[resources, section_label]]

    groups.each_with_index do |group, group_index|
      group_label = "#{section_label}, group #{group_index + 1}"
      errors << "#{group_label}: missing title" unless present?(group["title"])

      group_resources = group["resources"] || []
      unless group_resources.is_a?(Array)
        errors << "#{group_label}: 'resources' must be an array"
        group_resources = []
      end

      errors << "#{group_label}: expected at least one resource" if group_resources.empty?
      resource_sets << [group_resources, group_label]
    end

    resource_sets.each do |resource_list, owner_label|
      resource_list.each_with_index do |resource, resource_index|
        resource_label = "#{owner_label}, resource #{resource_index + 1}"
        name = resource["name"]
        url = resource["url"]

        errors << "#{resource_label}: missing name" unless present?(name)
        unless present?(url)
          errors << "#{resource_label}: missing url"
          next
        end

        begin
          uri = URI.parse(url)
          unless uri.is_a?(URI::HTTP) && uri.host
            errors << "#{resource_label}: url must be http(s): #{url}"
          end
        rescue URI::InvalidURIError
          errors << "#{resource_label}: invalid url: #{url}"
        end

        urls[url] << resource_label
      end
    end
  end
end

urls.each do |url, locations|
  next if locations.length == 1

  errors << "duplicate url #{url}: #{locations.join('; ')}"
end

if errors.empty?
  puts "Resource data OK"
else
  warn errors.join("\n")
  exit 1
end
