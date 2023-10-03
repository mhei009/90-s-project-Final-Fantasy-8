//Squall Modal
const squallModal = document.querySelector("#modal_squall");
const openSquallModal = document.querySelector(".open-button-squall");
const closeSquallModal = document.querySelector(".close-button-squall");

openSquallModal.addEventListener("click", () => {
  squallModal.showModal();
});

closeSquallModal.addEventListener("click", () => {
  squallModal.close();
});

//Rinoa Modal
const rinoaModal = document.querySelector("#modal_rinoa");
const openRinoaModal = document.querySelector(".open-button-rinoa");
const closeRinoaModal = document.querySelector(".close-button-rinoa");

openRinoaModal.addEventListener("click", () => {
  rinoaModal.showModal();
});

closeRinoaModal.addEventListener("click", () => {
  rinoaModal.close();
});

//Quistis Modal


