document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector("[data-resource-search]");
  if (!root) return;

  var input = root.querySelector("[data-resource-search-input]");
  var clearButton = root.querySelector("[data-resource-search-clear]");
  var emptyState = document.querySelector("[data-resource-empty]");
  var entries = Array.prototype.slice.call(document.querySelectorAll("[data-resource-entry]"));
  var searchState = createResourceSearchState({
    input: input,
    clearButton: clearButton,
    emptyState: emptyState,
    entries: entries,
  });
  var datasetCount = document.querySelector("[data-dataset-count]");
  var learningCount = document.querySelector("[data-learning-count]");
  var learningTagFilter = document.querySelector("[data-learning-tag-filter]");
  var learningTagFilterList = document.querySelector("[data-learning-tag-filter-list]");
  var learningTagFilterClear = document.querySelector("[data-learning-tag-filter-clear]");
  var learningSortHeaders = Array.prototype.slice.call(document.querySelectorAll("[data-learning-sort-field]"));
  var datasetTable = document.querySelector(".resource-table");
  var datasetSortHeaders = Array.prototype.slice.call(document.querySelectorAll("[data-dataset-sort-field]"));
  var datasetTagFilter = document.querySelector("[data-dataset-tag-filter]");
  var datasetTagFilterList = document.querySelector("[data-dataset-tag-filter-list]");
  var datasetTagFilterClear = document.querySelector("[data-dataset-tag-filter-clear]");
  var datasetRowTagButtons = Array.prototype.slice.call(document.querySelectorAll("[data-dataset-filter-tag]"));
  var learningTagButtons = Array.prototype.slice.call(document.querySelectorAll("[data-learning-filter-tag]"));
  var params = new URLSearchParams(window.location.search);
  var datasetTags = {};
  var datasetTagLabels = {};
  var learningTags = {};
  var learningTagLabels = {};
  var activeLearningSort = (params.get("sort") || "name").toLowerCase();
  var learningSortDir = (params.get("dir") || "asc").toLowerCase();
  var activeDatasetSort = (params.get("sort") || "tags").toLowerCase();
  var datasetSortDir = (params.get("dir") || "asc").toLowerCase();
  var activeDatasetTag = (params.get("tag") || "").toLowerCase();
  var activeLearningTag = (params.get("tag") || "").toLowerCase();

  if (!input) return;
  if (!datasetCount && !learningCount && !learningTagFilter && !datasetTagFilter) return;
  if (params.has("q")) {
    input.value = params.get("q");
  }

  function syncDatasetQueryParam(query) {
    var next = new URL(window.location.href);
    if (query === "") next.searchParams.delete("q");
    else next.searchParams.set("q", query);
    if (activeDatasetSort === "tags") next.searchParams.delete("sort");
    else next.searchParams.set("sort", activeDatasetSort);
    if (datasetSortDir === "asc") next.searchParams.delete("dir");
    else next.searchParams.set("dir", datasetSortDir);
    if (activeDatasetTag === "") next.searchParams.delete("tag");
    else next.searchParams.set("tag", activeDatasetTag);
    window.history.replaceState({}, "", next);
  }

  function syncLearningQueryParam(query) {
    var next = new URL(window.location.href);
    if (query === "") next.searchParams.delete("q");
    else next.searchParams.set("q", query);
    if (activeLearningSort === "name") next.searchParams.delete("sort");
    else next.searchParams.set("sort", activeLearningSort);
    if (learningSortDir === "asc") next.searchParams.delete("dir");
    else next.searchParams.set("dir", learningSortDir);
    if (activeLearningTag === "") next.searchParams.delete("tag");
    else next.searchParams.set("tag", activeLearningTag);
    window.history.replaceState({}, "", next);
  }

  function updateDatasetSortUI() {
    datasetSortHeaders.forEach(function (header) {
      var field = header.dataset.datasetSortField;
      header.classList.toggle("is-active", field === activeDatasetSort);
      header.setAttribute("aria-sort", field === activeDatasetSort ? (datasetSortDir === "asc" ? "ascending" : "descending") : "none");
      var icon = header.querySelector("i");
      if (!icon) return;
      icon.className = field === activeDatasetSort ? (datasetSortDir === "asc" ? "fas fa-sort-up" : "fas fa-sort-down") : "fas fa-sort";
    });
  }

  function updateDatasetFilterUI() {
    if (datasetTagFilterClear) datasetTagFilterClear.hidden = activeDatasetTag === "";
    if (datasetTagFilterList) {
      Array.prototype.slice.call(datasetTagFilterList.querySelectorAll(".codes-tag-filter-chip")).forEach(function (button) {
        button.classList.toggle("is-active", button.dataset.tag === activeDatasetTag);
      });
    }
    datasetRowTagButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.datasetFilterTag === activeDatasetTag);
    });
  }

  function updateDatasetResults() {
    var rawQuery = input.value.trim();
    var query = rawQuery.toLowerCase();
    var visibleCount = 0;

    entries.forEach(function (entry) {
      var haystack = entry.dataset.searchText || "";
      var entryTags = (entry.dataset.tags || "").split(",").map(function (tag) { return tag.trim(); }).filter(Boolean);
      var tagMatched = activeDatasetTag === "" || entryTags.indexOf(activeDatasetTag) !== -1;
      var matched = (query === "" || haystack.indexOf(query) !== -1) && tagMatched;
      entry.hidden = !matched;
      entry.dataset.matches = matched ? "1" : "0";
      if (matched) visibleCount += 1;
    });

    if (datasetTable) {
      var tbody = datasetTable.querySelector("tbody");
      if (tbody) {
        entries.slice().sort(function (a, b) {
          var aVisible = a.dataset.matches === "1";
          var bVisible = b.dataset.matches === "1";
          if (aVisible !== bVisible) return aVisible ? -1 : 1;
          var aKey = activeDatasetSort === "tags" ? (a.dataset.tags || "") : (a.dataset.name || "");
          var bKey = activeDatasetSort === "tags" ? (b.dataset.tags || "") : (b.dataset.name || "");
          aKey = aKey.toLowerCase();
          bKey = bKey.toLowerCase();
          if (aKey < bKey) return datasetSortDir === "asc" ? -1 : 1;
          if (aKey > bKey) return datasetSortDir === "asc" ? 1 : -1;
          return 0;
        }).forEach(function (entry) {
          tbody.appendChild(entry);
        });
      }
    }

    if (datasetCount) datasetCount.textContent = visibleCount + " of " + entries.length + " datasets shown";
    updateDatasetSortUI();
    updateDatasetFilterUI();
    searchState.syncQuery(window.location.href, { query: rawQuery });
  }

  function updateLearningFilterUI() {
    if (learningTagFilterClear) learningTagFilterClear.hidden = activeLearningTag === "";
    if (learningTagFilterList) {
      Array.prototype.slice.call(learningTagFilterList.querySelectorAll(".codes-tag-filter-chip")).forEach(function (button) {
        button.classList.toggle("is-active", button.dataset.tag === activeLearningTag);
      });
    }
    learningTagButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.learningFilterTag === activeLearningTag);
    });
  }

  function updateLearningResults() {
    var rawQuery = input.value.trim();
    var query = rawQuery.toLowerCase();
    var visibleCount = 0;

    entries.forEach(function (entry) {
      var haystack = entry.dataset.searchText || "";
      var entryTags = (entry.dataset.tags || "").split(",").map(function (tag) { return tag.trim(); }).filter(Boolean);
      var tagMatched = activeLearningTag === "" || entryTags.indexOf(activeLearningTag) !== -1;
      var matched = (query === "" || haystack.indexOf(query) !== -1) && tagMatched;
      entry.hidden = !matched;
      entry.dataset.matches = matched ? "1" : "0";
      if (matched) visibleCount += 1;
    });

    if (learningSortHeaders.length) {
      var tbody = document.querySelector(".resource-table tbody");
      if (tbody) {
        entries.slice().sort(function (a, b) {
          var aVisible = a.dataset.matches === "1";
          var bVisible = b.dataset.matches === "1";
          if (aVisible !== bVisible) return aVisible ? -1 : 1;
          var aKey = activeLearningSort === "tags" ? (a.dataset.tags || "") : (a.dataset.name || "");
          var bKey = activeLearningSort === "tags" ? (b.dataset.tags || "") : (b.dataset.name || "");
          aKey = aKey.toLowerCase();
          bKey = bKey.toLowerCase();
          if (aKey < bKey) return learningSortDir === "asc" ? -1 : 1;
          if (aKey > bKey) return learningSortDir === "asc" ? 1 : -1;
          return 0;
        }).forEach(function (entry) {
          tbody.appendChild(entry);
        });
      }
      learningSortHeaders.forEach(function (header) {
        var field = header.dataset.learningSortField;
        header.classList.toggle("is-active", field === activeLearningSort);
        header.setAttribute("aria-sort", field === activeLearningSort ? (learningSortDir === "asc" ? "ascending" : "descending") : "none");
        var icon = header.querySelector("i");
        if (!icon) return;
        icon.className = field === activeLearningSort ? (learningSortDir === "asc" ? "fas fa-sort-up" : "fas fa-sort-down") : "fas fa-sort";
      });
    }

    if (learningCount) learningCount.textContent = visibleCount + " of " + entries.length + " resources shown";
    updateLearningFilterUI();
    searchState.syncQuery(window.location.href, { query: rawQuery });
  }

  if (learningTagFilter && learningTagFilterList) {
    entries.forEach(function (entry) {
      var tags = (entry.dataset.tags || "").split(",").map(function (tag) { return tag.trim(); }).filter(Boolean);
      tags.forEach(function (tag) { learningTags[tag] = true; });
      var originalTags = (entry.getAttribute("data-tags-original") || "").split(",").map(function (tag) { return tag.trim(); }).filter(Boolean);
      tags.forEach(function (tag, index) {
        if (!learningTagLabels[tag]) {
          learningTagLabels[tag] = originalTags[index] || tag;
        }
      });
    });
    Object.keys(learningTags).sort().forEach(function (tag) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "codes-tag-filter-chip";
      button.textContent = learningTagLabels[tag] || tag;
      button.dataset.tag = tag;
      button.addEventListener("click", function () {
        activeLearningTag = activeLearningTag === tag ? "" : tag;
        updateLearningResults();
      });
      learningTagFilterList.appendChild(button);
    });
    learningTagFilter.hidden = Object.keys(learningTags).length === 0;
    learningSortHeaders.forEach(function (header) {
      header.addEventListener("click", function () {
        var field = header.dataset.learningSortField || "name";
        if (activeLearningSort === field) learningSortDir = learningSortDir === "asc" ? "desc" : "asc";
        else { activeLearningSort = field; learningSortDir = "asc"; }
        updateLearningResults();
      });
    });
    if (learningTagFilterClear) {
      learningTagFilterClear.addEventListener("click", function () {
        activeLearningTag = "";
        updateLearningResults();
      });
    }
    input.addEventListener("input", updateLearningResults);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && input.value !== "") {
        input.value = "";
        updateLearningResults();
        input.focus();
      }
    });
    clearButton.addEventListener("click", function () {
      input.value = "";
      updateLearningResults();
      input.focus();
    });
    updateLearningResults();
    return;
  }

  if (datasetTable) {
    entries.forEach(function (entry) {
      var tags = (entry.dataset.tags || "").split(",").map(function (tag) { return tag.trim(); }).filter(Boolean);
      tags.forEach(function (tag) {
        datasetTags[tag] = true;
        if (!datasetTagLabels[tag]) {
          datasetTagLabels[tag] = (entry.getAttribute("data-tags-original") || "").split(",").map(function (value) { return value.trim(); }).filter(Boolean)[tags.indexOf(tag)] || tag;
        }
      });
    });
    if (datasetTagFilterList) {
      Object.keys(datasetTags).sort().forEach(function (tag) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "codes-tag-filter-chip";
        button.textContent = datasetTagLabels[tag] || tag;
        button.dataset.tag = tag;
        button.addEventListener("click", function () {
          activeDatasetTag = activeDatasetTag === tag ? "" : tag;
          updateDatasetResults();
        });
        datasetTagFilterList.appendChild(button);
      });
      if (datasetTagFilter) datasetTagFilter.hidden = Object.keys(datasetTags).length === 0;
    }
    datasetRowTagButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var tag = button.dataset.datasetFilterTag || "";
        activeDatasetTag = activeDatasetTag === tag ? "" : tag;
        updateDatasetResults();
      });
    });
    datasetSortHeaders.forEach(function (header) {
      header.addEventListener("click", function () {
        var field = header.dataset.datasetSortField || "name";
        if (activeDatasetSort === field) datasetSortDir = datasetSortDir === "asc" ? "desc" : "asc";
        else { activeDatasetSort = field; datasetSortDir = "asc"; }
        updateDatasetResults();
      });
    });
    if (datasetTagFilterClear) {
      datasetTagFilterClear.addEventListener("click", function () {
        activeDatasetTag = "";
        updateDatasetResults();
      });
    }
    input.addEventListener("input", updateDatasetResults);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && input.value !== "") {
        input.value = "";
        updateDatasetResults();
        input.focus();
      }
    });
    clearButton.addEventListener("click", function () {
      input.value = "";
      updateDatasetResults();
      input.focus();
    });
    updateDatasetResults();
  }
});
