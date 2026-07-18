import { store } from "../core/store.js";
import { addUser, deleteUser } from "../services/userService.js";

export function renderTeam() {
  const container = document.querySelector(".team-list");
  if (!container) return;

  container.innerHTML =
    `
        <button id="addUserBtn" class="btn btn-primary">+ Add User</button>
    ` +
    store.state.users
      .map(
        (u) => `
        <div class="user-card">

            <h3>${u.name}</h3>
            <p>${u.role}</p>

            <button class="delete-user" data-id="${u.id}">
                Remove
            </button>

        </div>
    `,
      )
      .join("");

  document.querySelector("#addUserBtn").addEventListener("click", () => {
    const name = prompt("Name:");
    const role = prompt("Role:");

    if (!name || !role) return;

    addUser({ name, role });
  });

  document.querySelectorAll(".delete-user").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteUser(Number(e.target.dataset.id));
    });
  });
}
