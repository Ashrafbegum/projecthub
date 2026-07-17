import { store } from "../core/store.js";
import { deleteProject, addProject } from "../services/projectService.js";

export function renderProjects() {
  const container = document.querySelector(".projects-grid");

  if (!container) return;

  container.innerHTML = store.state.projects
    .map(
      (p) => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.status}</p>

            <button data-id="${p.id}" class="delete-project">
                Delete
            </button>
        </div>
    `,
    )
    .join("");

  // EVENTS
  document.querySelectorAll(".delete-project").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteProject(Number(e.target.dataset.id));
    });
  });

  document.querySelector(".btn-primary").addEventListener("click", () => {
    const title = prompt("Project name:");

    if (!title) return;

    addProject({
      title,
      status: "Active",
    });
  });
}


