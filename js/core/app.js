import { store } from "./store.js";
import { db } from "../storage/localStorageDB.js";
import { renderProjects } from "../ui/renderProjects.js";
import { renderTasks } from "../ui/renderTasks.js";

document.addEventListener("DOMContentLoaded", () => {
  // LOAD FROM LOCALSTORAGE
  store.setState({
    projects: db.getProjects(),
    tasks: db.getTasks(),
  });

  // SUBSCRIBE UI RENDERS
  store.subscribe(renderProjects);
  store.subscribe(renderTasks);
});
