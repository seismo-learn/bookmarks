document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector("[data-resource-search]");
  if (!root) return;

  var input = root.querySelector("[data-resource-search-input]");
  var clearButton = root.querySelector("[data-resource-search-clear]");
  var emptyState = document.querySelector("[data-resource-empty]");
  var table = document.querySelector(".resource-table");
  var countNode = document.querySelector("[data-resource-count]");
  var tagFilter = document.querySelector("[data-resource-tag-filter]");
  var tagFilterList = document.querySelector("[data-resource-tag-filter-list]");
  var tagFilterClear = document.querySelector("[data-resource-tag-filter-clear]");
  var sortHeaders = Array.prototype.slice.call(document.querySelectorAll("[data-resource-sort-field]"));
  var rowTagButtons = Array.prototype.slice.call(document.querySelectorAll("[data-resource-filter-tag]"));
  var entries = Array.prototype.slice.call(document.querySelectorAll("[data-resource-entry]"));
  var params = new URLSearchParams(window.location.search);
  var activeTag = (params.get("tag") || "").toLowerCase();
  var activeSort = (params.get("sort") || defaultSort()).toLowerCase();
  var sortDirection = (params.get("dir") || "asc").toLowerCase();
  var tagSet = {};
  var tagLabels = {};

  if (!input || entries.length === 0) return;
  if (params.has("q")) input.value = params.get("q");

  function defaultSort() {
    var kind = (document.querySelector("[data-resource-kind]") || {}).dataset || {};
    return kind.resourceKind === "dataset" ? "tags" : "name";
  }

  function countLabel() {
    var kind = countNode.dataset.resourceKind || "resource";
    if (kind === "dataset") return "datasets";
    return "resources";
  }

  function syncQueryParam(query) {
    var next = new URL(window.location.href);
    if (query === "") next.searchParams.delete("q");
    else next.searchParams.set("q", query);
    if (activeTag === "") next.searchParams.delete("tag");
    else next.searchParams.set("tag", activeTag);
    if (activeSort === defaultSort()) next.searchParams.delete("sort");
    else next.searchParams.set("sort", activeSort);
    if (sortDirection === "asc") next.searchParams.delete("dir");
    else next.searchParams.set("dir", sortDirection);
    window.history.replaceState({}, "", next);
  }

  function sortKeyFor(entry, field) {
    if (field === "tags") return (entry.dataset.tags || "").replace(/,/g, " ").toLowerCase();
    return (entry.dataset.name || "").toLowerCase();
  }

  function updateSortUI() {
    sortHeaders.forEach(function (header) {
      var field = header.dataset.resourceSortField;
      header.classList.toggle("is-active", field === activeSort);
      header.setAttribute("aria-sort", field === activeSort ? (sortDirection === "asc" ? "ascending" : "descending") : "none");
      var icon = header.querySelector("i");
      if (!icon) return;
      icon.className = field === activeSort ? (sortDirection === "asc" ? "fas fa-sort-up" : "fas fa-sort-down") : "fas fa-sort";
    });
  }

  function updateFilterUI() {
    if (tagFilterClear) tagFilterClear.hidden = activeTag === "";
    if (tagFilterList) {
      Array.prototype.slice.call(tagFilterList.querySelectorAll(".codes-tag-filter-chip")).forEach(function (button) {
        button.classList.toggle("is-active", button.dataset.tag === activeTag);
      });
    }
    rowTagButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.resourceFilterTag === activeTag);
    });
  }

  function updateResults() {
    var rawQuery = input.value.trim();
    var query = rawQuery.toLowerCase();
    var visibleCount = 0;

    entries.forEach(function (entry) {
      var haystack = entry.dataset.searchText || "";
      var entryTags = (entry.dataset.tags || "").split(",").map(function (tag) {
        return tag.trim();
      }).filter(Boolean);
      var tagMatched = activeTag === "" || entryTags.indexOf(activeTag) !== -1;
      var matched = (query === "" || haystack.indexOf(query) !== -1) && tagMatched;
      entry.hidden = !matched;
      entry.dataset.matches = matched ? "1" : "0";
      if (matched) visibleCount += 1;
    });

    var tbody = table.querySelector("tbody");
    if (tbody) {
      entries.slice().sort(function (a, b) {
        var aVisible = a.dataset.matches === "1";
        var bVisible = b.dataset.matches === "1";
        if (aVisible !== bVisible) return aVisible ? -1 : 1;
        var aKey = sortKeyFor(a, activeSort);
        var bKey = sortKeyFor(b, activeSort);
        if (aKey < bKey) return sortDirection === "asc" ? -1 : 1;
        if (aKey > bKey) return sortDirection === "asc" ? 1 : -1;
        return 0;
      }).forEach(function (entry) {
        tbody.appendChild(entry);
      });
    }

    if (emptyState) emptyState.hidden = visibleCount !== 0;
    clearButton.hidden = rawQuery === "";
    if (countNode) countNode.textContent = visibleCount + " of " + entries.length + " " + countLabel() + " shown";
    updateSortUI();
    updateFilterUI();
    syncQueryParam(rawQuery);
  }

  entries.forEach(function (entry) {
    var tags = (entry.dataset.tags || "").split(",").map(function (tag) {
      return tag.trim();
    }).filter(Boolean);
    var originalTags = (entry.getAttribute("data-tags-original") || "").split(",").map(function (tag) {
      return tag.trim();
    }).filter(Boolean);
    tags.forEach(function (tag, index) {
      tagSet[tag] = true;
      if (!tagLabels[tag]) tagLabels[tag] = originalTags[index] || tag;
    });
  });

  if (tagFilterList) {
    Object.keys(tagSet).sort().forEach(function (tag) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "codes-tag-filter-chip";
      button.textContent = tagLabels[tag] || tag;
      button.dataset.tag = tag;
      button.addEventListener("click", function () {
        activeTag = activeTag === tag ? "" : tag;
        updateResults();
      });
      tagFilterList.appendChild(button);
    });
  }
  if (tagFilter) tagFilter.hidden = Object.keys(tagSet).length === 0;

  rowTagButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var tag = button.dataset.resourceFilterTag || "";
      activeTag = activeTag === tag ? "" : tag;
      updateResults();
    });
  });

  sortHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      var field = header.dataset.resourceSortField || defaultSort();
      if (activeSort === field) sortDirection = sortDirection === "asc" ? "desc" : "asc";
      else {
        activeSort = field;
        sortDirection = "asc";
      }
      updateResults();
    });
  });

  if (tagFilterClear) {
    tagFilterClear.addEventListener("click", function () {
      activeTag = "";
      updateResults();
    });
  }
  input.addEventListener("input", updateResults);
  input.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && input.value !== "") {
      input.value = "";
      updateResults();
      input.focus();
    }
  });
  clearButton.addEventListener("click", function () {
    input.value = "";
    updateResults();
    input.focus();
  });
  updateResults();
});
