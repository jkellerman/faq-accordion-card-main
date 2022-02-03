const controls = document.querySelectorAll(".accordion-control");

controls.forEach((accordioncontrol) => {
  accordioncontrol.addEventListener("click", () => {
    accordioncontrol.classList.toggle("active");
  });
});
