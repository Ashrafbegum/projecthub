const PROJECTS_KEY = "projecthub_projects";
const TASKS_KEY = "projecthub_tasks";

export const db = {
  getProjects() {
    return JSON.parse(localStorage.getItem(PROJECTS_KEY)) || [];
  },

  saveProjects(projects) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  },

  getTasks() {
    return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
  },

  saveTasks(tasks) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  },
};
