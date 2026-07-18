import { store } from "../core/store.js";
import { db } from "../storage/localStorageDB.js";

function sync(events) {
  db.saveEvents(events);
  store.setState({ events });
}

export function addEvent(event) {
  sync([...store.state.events, { id: Date.now(), ...event }]);
}

export function deleteEvent(id) {
  sync(store.state.events.filter((e) => e.id !== id));
}
