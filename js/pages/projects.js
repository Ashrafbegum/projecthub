import { store } from "../core/state.js";
import { renderProjects } from "../ui/renderProjects.js";
import { createSearch } from "../utils/search.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");

  createSearch(input, (value) => {
    const filtered = store.state.projects.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase()),
    );

    store.setState({ projects: filtered });

    renderProjects();
  });
});
