const controls = document.querySelector(".controls");
const wrapper = document.querySelector(".wrapper");
const label = wrapper.querySelector(".label");

controls.addEventListener("click", onControlsClick);

function onControlsClick(e) {
  const { position } = e.target.dataset;
  wrapper.style.backgroundPosition = position;
  label.textContent = position;
}
