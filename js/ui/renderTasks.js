import { store } from "../core/store.js";
import { updateTaskStatus, deleteTask } from "../services/taskService.js";

export function renderTasks() {
  const table = document.querySelector(".table tbody");

  if (!table) return;

  table.innerHTML = store.state.tasks
    .map(
      (t) => `
        <tr>
            <td>${t.title}</td>
            <td>${t.status}</td>
            <td>${t.priority}</td>
            <td>${t.owner}</td>

            <td>
                <button data-id="${t.id}" class="done-btn">Done</button>
                <button data-id="${t.id}" class="delete-btn">Delete</button>
            </td>
        </tr>
    `,
    )
    .join("");

  document.querySelectorAll(".done-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      updateTaskStatus(Number(e.target.dataset.id), "Done");
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteTask(Number(e.target.dataset.id));
    });
  });
}
