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
    groups:
      - title: Subcategory
        resources:
          - name: Another Resource
            url: https://example.org
```

Resource fields:

- `name`: Display name.
- `url`: Primary link.
- `description`: Optional short description.

Run `make validate` before submitting changes to structured data files.
