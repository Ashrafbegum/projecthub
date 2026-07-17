import { store } from "../core/store.js";
import { db } from "../storage/localStorageDB.js";

function updateStorage(projects) {
  db.saveProjects(projects);
  store.setState({ projects });
}

export function addProject(project) {
  const projects = store.state.projects;

  const newProject = {
    id: Date.now(),
    ...project,
  };

  updateStorage([...projects, newProject]);
}

export function deleteProject(id) {
  const updated = store.state.projects.filter((p) => p.id !== id);
  updateStorage(updated);
}

export function updateProject(id, updatedData) {
  const updated = store.state.projects.map((p) =>
    p.id === id ? { ...p, ...updatedData } : p,
  );

  updateStorage(updated);
}
