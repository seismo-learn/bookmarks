#!/bin/sh
set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
output="$repo_dir/data/homepage_recent.yaml"

commits=$(git -C "$repo_dir" log -20 --format='%H%x1f%cs%x1f%s' -- data/*.yaml || true)

if [ -n "$commits" ]; then
  {
    printf '%s\n' 'recent_updates:'
    count=0
    printf '%s\n' "$commits" | while IFS="$(printf '\037')" read -r hash commit_date subject; do
      [ -n "$hash" ] || continue
      case $subject in
        Add*|Remove*) ;;
        *) continue ;;
      esac
      count=$((count + 1))
      if [ "$count" -gt 3 ]; then
        break
      fi
      printf '  - date: %s\n' "$commit_date"
      printf '    message: %s\n' "$subject"
      printf '    hash: %s\n' "$hash"
    done
  } > "$output"
else
  rm -f "$output"
fi
