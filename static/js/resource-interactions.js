function createResourceSearchState(options) {
  var input = options.input;
  var clearButton = options.clearButton;
  var emptyState = options.emptyState;
  var entries = options.entries;
  var params = new URLSearchParams(window.location.search);
  var activeTag = (params.get("tag") || "").toLowerCase();
  var activeSort = (params.get("sort") || "name").toLowerCase();
  var sortDirection = (params.get("dir") || "asc").toLowerCase();

  function syncQuery(baseUrl, extra) {
    var next = new URL(baseUrl || window.location.href);
    var query = (extra && extra.query !== undefined) ? extra.query : input.value.trim();
    if (query === "") next.searchParams.delete("q");
    else next.searchParams.set("q", query);
    if (activeTag === "") next.searchParams.delete("tag");
    else next.searchParams.set("tag", activeTag);
    if (activeSort === "name") next.searchParams.delete("sort");
    else next.searchParams.set("sort", activeSort);
    if (sortDirection === "asc") next.searchParams.delete("dir");
    else next.searchParams.set("dir", sortDirection);
    window.history.replaceState({}, "", next);
  }

  function updateSearchUI(visibleCount, countText) {
    var rawQuery = input.value.trim();
    emptyState.hidden = visibleCount !== 0;
    clearButton.hidden = rawQuery === "";
    if (countText) countText.textContent = visibleCount + " of " + entries.length + " items shown";
    syncQuery(window.location.href, { query: rawQuery });
  }

  return {
    get activeTag() { return activeTag; },
    set activeTag(value) { activeTag = value; },
    get activeSort() { return activeSort; },
    set activeSort(value) { activeSort = value; },
    get sortDirection() { return sortDirection; },
    set sortDirection(value) { sortDirection = value; },
    input: input,
    clearButton: clearButton,
    emptyState: emptyState,
    entries: entries,
    syncQuery: syncQuery,
    updateSearchUI: updateSearchUI,
  };
}
