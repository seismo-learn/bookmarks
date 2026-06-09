#!/bin/sh
set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
output="$repo_dir/data/homepage_recent.yaml"

commits=$(git -C "$repo_dir" log -50 --format='%H%x1f%cs%x1f%s' -- data/*.yaml || true)

if [ -n "$commits" ]; then
  {
    printf '%s\n' 'recent_updates:'
    printf '%s\n' "$commits" |
      awk -F "$(printf '\037')" '
        $1 != "" && $3 ~ /^(Add|Remove)/ {
          print "  - date: " $2
          print "    message: " $3
          print "    hash: " $1
          if (++count == 3) exit
        }
      '
  } > "$output"
else
  rm -f "$output"
fi
