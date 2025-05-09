/* assets/js/accordion.js */
document.addEventListener("DOMContentLoaded", () => {
  // Grab every accordion header
  document.querySelectorAll(".accordion-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Toggle the active class on the parent .accordion element
      const container = btn.parentElement;
      container.classList.toggle("open");

      // For smooth height animation
      const content = container.querySelector(".accordion-content");
      if (container.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
