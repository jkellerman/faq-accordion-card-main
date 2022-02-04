const controls = document.querySelectorAll(".accordion-control");

controls.forEach((accordionControl) => {
  accordionControl.addEventListener("click", () => {
    accordionControl.classList.toggle("active");
    if (accordionControl.classList.contains("active")) {
      controls.forEach((accordionControl) => {
        accordionControl.classList.remove("active");
      });

      accordionControl.classList.toggle("active");
    }
  });
});
