import { projects, tasks } from "../data/dummy-data.js";

document.addEventListener("DOMContentLoaded", () => {
  loadStats();
  loadProjects();
  loadTasks();
});

function loadStats() {
  const projectCount = document.querySelector(".stat-projects");
  const taskCount = document.querySelector(".stat-tasks");

  if (projectCount) projectCount.textContent = projects.length;
  if (taskCount) taskCount.textContent = tasks.length;
}

function loadProjects() {
  const container = document.querySelector(".projects");

  if (!container) return;

  container.innerHTML = projects
    .map(
      (p) => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.status}</p>
        </div>
    `,
    )
    .join("");
}

function loadTasks() {
  const table = document.querySelector(".table tbody");

  if (!table) return;

  table.innerHTML = tasks
    .map(
      (t) => `
        <tr>
            <td>${t.title}</td>
            <td>${t.status}</td>
            <td>${t.owner}</td>
        </tr>
    `,
    )
    .join("");
}
