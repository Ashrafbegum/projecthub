import { addTask, editTask } from "../services/taskService.js";
import { closeModal } from "./modal.js";

export function initTaskForm() {
  const form = document.querySelector("#taskForm");
  const editForm = document.querySelector("#editTaskForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);

      addTask({
        title: data.get("title"),
        status: data.get("status"),
        priority: data.get("priority"),
        owner: data.get("owner"),
      });

      form.reset();
      closeModal("#taskModal");
    });
  }

  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(editForm);

      editTask(Number(data.get("id")), {
        title: data.get("title"),
        status: data.get("status"),
        priority: data.get("priority"),
      });

      closeModal("#editTaskModal");
    });
  }
}
