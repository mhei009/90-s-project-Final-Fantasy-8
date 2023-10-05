//Squall Modal
const squallModal = document.querySelector("#modal_squall");
const openSquallModal = document.querySelector(".open__squall");
const closeSquallModal = document.querySelector(".close__squall");


openSquallModal.addEventListener("click", () => {
  squallModal.showModal();
});


closeSquallModal.addEventListener("click", () => {
  squallModal.close();
});

//Rinoa Modal
const rinoaModal = document.querySelector("#modal_rinoa");
const openRinoaModal = document.querySelector(".open__rinoa");
const closeRinoaModal = document.querySelector(".close__rinoa");

openRinoaModal.addEventListener("click", () => {
  rinoaModal.showModal();
});

closeRinoaModal.addEventListener("click", () => {
  rinoaModal.close();
});

//Quistis Modal

const quistisModal = document.querySelector("#modal_quistis");
const openQuistisModal = document.querySelector(".open__quistis");
const closeQuistisModal = document.querySelector(".close__quistis");

openQuistisModal.addEventListener("click", () => {
  quistisModal.showModal();
});

closeQuistisModal.addEventListener("click", () => {
  quistisModal.close();
});


//Zell Modal

const zellModal = document.querySelector("#modal_zell");
const openZellModal = document.querySelector(".open__zell");
const closeZellModal = document.querySelector(".close__zell");

openZellModal.addEventListener("click", () => {
  zellModal.showModal();
});

closeZellModal.addEventListener("click", () => {
  zellModal.close();
});

//Selphie Modal

const selphieModal = document.querySelector("#modal_selphie");
const openSelphieModal = document.querySelector(".open__selphie");
const closeSelphieModal = document.querySelector(".close__selphie");

openSelphieModal.addEventListener("click", () => {
  selphieModal.showModal();
});

closeSelphieModal.addEventListener("click", () => {
  selphieModal.close();
});

//Irvine Modal

const irvineModal = document.querySelector("#modal_irvine");
const openIrvineModal = document.querySelector(".open__irvine");
const closeIrvineModal = document.querySelector(".close__irvine");

openIrvineModal.addEventListener("click", () => {
  irvineModal.showModal();
});

closeIrvineModal.addEventListener("click", () => {
  irvineModal.close();
});


//Seifer

const seiferModal = document.querySelector("#modal_seifer");
const openSeiferModal = document.querySelector(".open__seifer");
const closeSeiferModal = document.querySelector(".close__seifer");

openSeiferModal.addEventListener("click", () => {
  seiferModal.showModal();
});

closeSeiferModal.addEventListener("click", () => {
  seiferModal.close();
});

//laguna

const lagunaModal = document.querySelector("#modal_laguna");
const openLagunaModal = document.querySelector(".open__laguna");
const closeLagunaModal = document.querySelector(".close__laguna");

openLagunaModal.addEventListener("click", () => {
  lagunaModal.showModal();
});

closeLagunaModal.addEventListener("click", () => {
  lagunaModal.close();
});

//Kiros modal

const kirosModal = document.querySelector("#modal_kiros");
const openKirosModal = document.querySelector(".open__kiros");
const closeKirosModal = document.querySelector(".close__kiros");

openKirosModal.addEventListener("click", () => {
  kirosModal.showModal();
});

closeKirosModal.addEventListener("click", () => {
  kirosModal.close();
});

//ward modal

const wardModal = document.querySelector("#modal_ward");
const openWardModal = document.querySelector(".open__ward");
const closeWardModal = document.querySelector(".close__ward");

openWardModal.addEventListener("click", () => {
  wardModal.showModal();
});

closeWardModal.addEventListener("click", () => {
  wardModal.close();
});

//edea modal

const edeaModal = document.querySelector("#modal_edea");
const openEdeaModal = document.querySelector(".open__edea");
const closeEdeaModal = document.querySelector(".close__edea");

openEdeaModal.addEventListener("click", () => {
  edeaModal.showModal();
});

closeEdeaModal.addEventListener("click", () => {
  edeaModal.close();
});

//Ultimecia modal

const ultimeciaModal = document.querySelector("#modal_ultimecia");
const openUltimeciaModal = document.querySelector(".open__ultimecia");
const closeUltimeciaModal = document.querySelector(".close__ultimecia");

openUltimeciaModal.addEventListener("click", () => {
  ultimeciaModal.showModal();
});

closeUltimeciaModal.addEventListener("click", () => {
  ultimeciaModal.close();
});

//Scroll up

  var scrollToTopButton = document.getElementById('scrollToTopButton');

  // Show the button when the user scrolls down 20px from the top of the document
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  };

  // Scroll to the top of the document when the button is clicked
  scrollToTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });


  