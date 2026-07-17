export const store = {
  state: {
    projects: [],
    tasks: [],
  },

  listeners: [],

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  },

  subscribe(fn) {
    this.listeners.push(fn);
  },

  notify() {
    this.listeners.forEach((fn) => fn(this.state));
  },
};
