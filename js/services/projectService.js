import { store } from "../core/store.js";
import { db } from "../storage/localStorageDB.js";
import { showToast } from "../components/toast.js";

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
  showToast("Project deleted");
}

export function updateProject(id, updatedData) {
  const updated = store.state.projects.map((p) =>
    p.id === id ? { ...p, ...updatedData } : p,
  );

  updateStorage(updated);
}


export function editProject(id, data) {
    const updated = store.state.projects.map(p =>
        p.id === id ? { ...p, ...data } : p
    );

    db.saveProjects(updated);
    store.setState({ projects: updated });
}