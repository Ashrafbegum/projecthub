import { store } from "../core/store.js";
import { deleteTask } from "../services/taskService.js";
import { openModal } from "../components/modal.js";

export function renderTasks() {
  const table = document.querySelector(".table tbody");
  if (!table) return;

  table.innerHTML =
    `
        <button class="btn btn-primary" id="openTaskModal">
            + New Task
        </button>
    ` +
    store.state.tasks
      .map(
        (t) => `
        <tr>

            <td>${t.title}</td>
            <td>${t.status}</td>
            <td>${t.priority}</td>
            <td>${t.owner}</td>

            <td>
                <button class="edit-task" data-id="${t.id}">Edit</button>
                <button class="delete-task" data-id="${t.id}">Delete</button>
            </td>

        </tr>
    `,
      )
      .join("");

  // CREATE
  document.querySelector("#openTaskModal").addEventListener("click", () => {
    openModal("#taskModal");
  });

  // DELETE
  document.querySelectorAll(".delete-task").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteTask(Number(e.target.dataset.id));
    });
  });

  // EDIT
  document.querySelectorAll(".edit-task").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const task = store.state.tasks.find(
        (t) => t.id === Number(e.target.dataset.id),
      );

      const form = document.querySelector("#editTaskForm");

      form.elements.id.value = task.id;
      form.elements.title.value = task.title;
      form.elements.status.value = task.status;
      form.elements.priority.value = task.priority;

      openModal("#editTaskModal");
    });
  });
}
