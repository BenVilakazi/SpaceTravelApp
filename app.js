"use strict";

//MOBILE MENU
const hamburgerBtn = document.querySelector(".navigation__open-btn-link");
const closeBtn = document.querySelector(".navigation__close-btn-link");

//NAVIGATION MENU
const navMenu = document.querySelector(".navigation__menu");

//CONTENT--DESTINATIONS
const destinations = document.querySelectorAll(".content--destinations__link");
const descritpion = document.querySelector(".content--destinations__paragraph");
const distance = document.querySelector(".distance");
const time = document.querySelector(".time");
const planetName = document.querySelector(".name");
const current = document.getElementsByClassName("active-link");
const planetImg = document.getElementById("planet");

//CONTENT--CREW
const dots = document.querySelectorAll(".content-crew__dot");
const title = document.querySelector(".content-crew__heading5");
const crewName = document.querySelector(".content-crew__heading1");
const crewDescription = document.querySelector(".content-crew__paragraph");
const crewImg = document.querySelector(".crew-member");
const currentDot = document.getElementsByClassName("active-dot");

//CONTENT-TECHNOLOGY
const numbers = document.querySelectorAll(".content-technology__number");
const currentNum = document.getElementsByClassName("active-number");
const vehicleName = document.querySelector(".content-technology__heading1");
const vehicleDescription = document.querySelector(
  ".content-technology__paragraph"
);
const vehicle = document.querySelector(".vehicle");

const loader = document.querySelector("#preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

hamburgerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  navMenu.classList.add("active");
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  navMenu.classList.remove("active");
});

const toggleClass = function (data, currentClass, activeClass) {
  currentClass[0].className = currentClass[0].className.replace(
    activeClass,
    ""
  );
  data.className += activeClass;
};

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    destinations.forEach((el, i) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();

        planetImg.src = json.destinations[i].images.png;
        planetName.innerText = json.destinations[i].name;
        descritpion.innerText = json.destinations[i].description;
        distance.innerText = json.destinations[i].distance;
        time.innerText = json.destinations[i].travel;

        const data = this;
        toggleClass(data, current, " active-link");
      });
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", function (e) {
        e.preventDefault();

        crewImg.src = json.crew[i].images.png;
        crewName.innerText = json.crew[i].name;
        crewDescription.innerText = json.crew[i].bio;
        title.innerText = json.crew[i].role;

        const data = this;
        toggleClass(data, currentDot, " active-dot");
      });
    });

    numbers.forEach((number, i) => {
      number.addEventListener("click", function (e) {
        e.preventDefault();

        vehicle.src = json.technology[i].images.portrait;
        document.querySelector(
          "source"
        ).srcset = `${json.technology[i].images.landscape} 900w`;
        vehicleName.innerText = json.technology[i].name;
        vehicleDescription.innerText = json.technology[i].description;

        const data = this;
        toggleClass(data, currentNum, " active-number");
      });
    });
  });
