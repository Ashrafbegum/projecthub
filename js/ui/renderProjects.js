import { openModal } from "../components/modal.js";
import { deleteProject } from "../services/projectService.js";
import { store } from "../core/state.js";

export function renderProjects() {
  const container = document.querySelector(".projects-grid");
  if (!container) return;

  container.innerHTML =
    `
        <button class="btn btn-primary" id="openProjectModal">
            + New Project
        </button>
    ` +
    store.state.projects
      .map(
        (p) => `
        <div class="project-card">

            <h3>${p.title}</h3>
            <p>${p.status}</p>

            <button class="edit-btn" data-id="${p.id}">
                Edit
            </button>

            <button class="delete-btn" data-id="${p.id}">
                Delete
            </button>

        </div>
    `,
      )
      .join("");

  // CREATE
  document.querySelector("#openProjectModal").addEventListener("click", () => {
    openModal("#projectModal");
  });

  // DELETE
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteProject(Number(e.target.dataset.id));
    });
  });

  // EDIT
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const project = store.state.projects.find(
        (p) => p.id === Number(e.target.dataset.id),
      );

      const form = document.querySelector("#editProjectForm");

      form.elements.id.value = project.id;
      form.elements.title.value = project.title;
      form.elements.status.value = project.status;

      openModal("#editProjectModal");
    });
  });
}
