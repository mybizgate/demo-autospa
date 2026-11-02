(() => {
  const templates = {
    monarch: {
      label: "Monarch",
      path: "01-monarch/index.html"
    },
    aurelia: {
      label: "Aurelia",
      path: "02-aurelia/index.html"
    },
    obsidian: {
      label: "Obsidian",
      path: "03-obsidian/index.html"
    },
    precision: {
      label: "Precision",
      path: "04-Precision/index.html"
    }
  };

  const storageKey = "demo-autospa-template-v2";
  const preview = document.querySelector("#templatePreview");
  const previewStatus = document.querySelector("#previewStatus");
  const openTemplate = document.querySelector("#openTemplate");
  const tabs = [...document.querySelectorAll("[data-template]")];
  let loadingTimer;

  if (!preview || !previewStatus || !openTemplate || !tabs.length) {
    return;
  }

  const readStoredTemplate = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  };

  const storeTemplate = (templateKey) => {
    try {
      window.localStorage.setItem(storageKey, templateKey);
    } catch (error) {
      // The switcher still works when storage is blocked or the page is opened locally.
    }
  };

  const updateAddress = (templateKey) => {
    try {
      const url = new URL(window.location.href);
      if (templateKey === "precision") {
        url.searchParams.delete("template");
      } else {
        url.searchParams.set("template", templateKey);
      }
      window.history.replaceState({}, "", url);
    } catch (error) {
      // Some local-file browser modes restrict history changes.
    }
  };

  const finishLoading = () => {
    window.clearTimeout(loadingTimer);
    preview.removeAttribute("aria-busy");
  };

  const selectTemplate = (templateKey, options = {}) => {
    const selected = templates[templateKey] || templates.precision;
    const resolvedKey = templates[templateKey] ? templateKey : "precision";

    tabs.forEach((tab) => {
      tab.setAttribute("aria-pressed", String(tab.dataset.template === resolvedKey));
    });

    preview.setAttribute("aria-busy", "true");
    window.clearTimeout(loadingTimer);
    loadingTimer = window.setTimeout(finishLoading, 1400);
    preview.title = `${selected.label} automotive website template preview`;
    previewStatus.textContent = `Previewing ${selected.label}`;
    openTemplate.href = selected.path;

    if (preview.getAttribute("src") !== selected.path) {
      preview.src = selected.path;
    } else {
      finishLoading();
    }

    if (options.persist !== false) {
      storeTemplate(resolvedKey);
    }
    if (options.updateAddress !== false) {
      updateAddress(resolvedKey);
    }
  };

  preview.addEventListener("load", finishLoading);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => selectTemplate(tab.dataset.template));
  });

  const requestedTemplate = new URLSearchParams(window.location.search).get("template");
  const initialTemplate = templates[requestedTemplate]
    ? requestedTemplate
    : templates[readStoredTemplate()]
      ? readStoredTemplate()
      : "precision";

  selectTemplate(initialTemplate, {
    persist: false,
    updateAddress: Boolean(requestedTemplate)
  });
})();
