import { addProject } from "../services/projectService.js";
import { closeModal } from "./modal.js";

export function initProjectForm() {
  const form = document.querySelector("#projectForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);

    addProject({
      title: data.get("title"),
      status: data.get("status"),
    });

    form.reset();
    closeModal("#projectModal");
  });
}
