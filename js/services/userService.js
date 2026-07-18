import { store } from "../core/store.js";
import { db } from "../storage/localStorageDB.js";

function sync(users) {
  db.saveUsers(users);
  store.setState({ users });
}

export function addUser(user) {
  sync([...store.state.users, { id: Date.now(), ...user }]);
}

export function deleteUser(id) {
  sync(store.state.users.filter((u) => u.id !== id));
}
