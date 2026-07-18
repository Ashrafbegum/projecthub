import { store } from "../core/store.js";
import { addEvent, deleteEvent } from "../services/calendarService.js";

export function renderCalendar() {
  const days = document.querySelectorAll(".calendar__day");

  days.forEach((day) => {
    const date = Number(day.textContent);
    const event = store.state.events.find((e) => e.date === date);

    day.innerHTML = `
            <div>${date}</div>
            ${event ? `<small>${event.title}</small>` : ""}
            <button class="add-event">+</button>
        `;

    day.querySelector(".add-event").addEventListener("click", () => {
      const title = prompt("Event name:");

      if (!title) return;

      addEvent({
        title,
        date,
      });
    });
  });
}
