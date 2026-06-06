# AGENTS.md

When working from the "Add a package" issue form, treat the submitted fields as the source of truth for updating `data/codes.yaml`.

## Add package workflow

- Add the package entry to `data/codes.yaml` under the existing `sections` structure.
- Keep the entry sorted alphabetically by `name` within its section.
- When adding a new package, insert it in the correct alphabetical position rather than appending it to the end.
- Use the issue form fields as follows:
  - `Package name` -> `name`
  - `Homepage` -> `url`
  - `DOI` -> `doi` as a bare DOI string, not a resolver URL
  - `Language(s)` -> `languages` as a YAML list, splitting on commas and trimming spaces
  - `Category or tag` -> `tags` as a YAML list, splitting on commas and trimming spaces
  - `Description` -> a concise, single-sentence description of the package itself
  - `Why it belongs here` -> keep as review context only; do not copy it into `data/codes.yaml`
- Keep the entry style consistent with nearby code entries.
- Do not invent missing metadata unless it is clearly implied by the issue.
- If the package already exists, update the existing record instead of adding a duplicate.

## Rendering notes

- The web UI renders DOI values as links to `https://dx.doi.org/<doi>`.
- Keep DOI values bare in the data file so the template can build the resolver URL.

## Validation

- Run the site build after editing `data/codes.yaml` or templates that affect the codes list.
- Prefer the existing table and pill styles in `layouts/partials/resource_codes_table.html` and `static/main.css` when adjusting presentation.
