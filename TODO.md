# TODO

- [ ] Refactor `layouts/_default/resources.html` to move the page-specific filtering and sorting logic into smaller, page-focused scripts or helpers.
- [ ] Decide whether `journals` should keep the card layout or move toward the same table-driven model used by `codes`, `dataset`, and `learning`.
- [ ] Unify the resource data model where it makes sense, so the shared templates do less branching across page types.
- [ ] Add a short schema note for resource data files so contributors know which fields each page expects.
- [ ] Review `data/dataset.yaml` for remaining typos and awkward descriptions.
- [ ] Review `data/learning.yaml` for copy cleanup and missing descriptions where they would help.
- [ ] Simplify or remove the PR-triggered build step in GitHub Actions if it is no longer needed.
- [ ] Keep the homepage recent-updates generation documented, since it depends on git history and build-time scripts.
- [ ] Reduce duplication between the codes page script and the shared resource-page behavior where the same interaction pattern is repeated.
- [ ] Check narrow-screen behavior on the table-based pages after future data or column changes.
