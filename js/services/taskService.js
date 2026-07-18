import { store } from "../core/store.js";
import { db } from "../storage/localStorageDB.js";

function updateStorage(tasks) {
  db.saveTasks(tasks);
  store.setState({ tasks });
}

export function addTask(task) {
  const newTask = {
    id: Date.now(),
    ...task,
  };

  updateStorage([...store.state.tasks, newTask]);
}

export function deleteTask(id) {
  const updated = store.state.tasks.filter((t) => t.id !== id);
  updateStorage(updated);
}

export function editTask(id, status) {
  const updated = store.state.tasks.map((t) =>
    t.id === id ? { ...t, status } : t,
  );

  updateStorage(updated);
}
