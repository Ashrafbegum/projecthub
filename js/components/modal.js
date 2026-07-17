export function openModal(modalId) {
  const modal = document.querySelector(modalId);
  if (!modal) return;

  modal.classList.add("active");
}

export function closeModal(modalId) {
  const modal = document.querySelector(modalId);
  if (!modal) return;

  modal.classList.remove("active");
}

export function initModalClose() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.classList.remove("active");
    }

    if (e.target.classList.contains("modal-close")) {
      e.target.closest(".modal").classList.remove("active");
    }
  });
}
