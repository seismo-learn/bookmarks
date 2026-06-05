# Structured Resource Data

This document describes structured resource lists rendered by the reusable
`resources` page layout.

## Page front matter

Use the `resources` layout and point `resource_data` at a data file name:

```yaml
---
title: Tools
layout: resources
resource_data: tools
edit_path: data/tools.yaml
toc: true
---
```

Set `edit_path` so the navbar edit link points to the data file instead of the
thin content page.

Pages using the shared `resources` layout now also include:

- A live search box that matches resource names, descriptions, and related link
  names/URLs.
- A table of contents that is collapsed by default.

## Data shape

Data files live in `data/`. Each data file has top-level `sections`. A section
may contain `resources`, `groups`, or both.

```yaml
sections:
  - title: Science
    resources:
      - name: Example Resource
        url: https://example.com
        description: Optional short description
        links:
          - name: Documentation
            url: https://example.com/docs
    groups:
      - title: Subcategory
        resources:
          - name: Another Resource
            url: https://example.org
          - name: Resource Without Primary URL
            description: Optional note shown in the list
            links:
              - name: Homepage
                url: https://example.net
              - name: Documentation
                url: https://example.net/docs
```

Resource fields:

- `name`: Display name.
- `url`: Primary link. Optional if you want the entry title to be plain text and
  put all links under `links`.
- `description`: Optional short description.
- `links`: Optional related links, each with `name` and `url`.

## Editing tips

- Keep descriptions short. They are rendered inline after the resource name.
- Use `links` for alternate pages such as documentation, tutorials, releases,
  mirrors, or regional notes.
- Use `groups` when a section has distinct subcategories. Skip `groups` when a
  flat section is easier to scan.
- Preserve existing section and group titles unless you are intentionally
  reorganizing the page.
- Search works across `name`, `description`, and related link text, so helpful
  wording improves findability.

## Validation

- Hugo will fail the build if a page points to a missing `resource_data` file.
- `make build` is the quickest way to validate both the data file and the page
  layout together.
