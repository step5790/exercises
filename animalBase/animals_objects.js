"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");
  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
      displayList();
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    console.log(jsonObject);

    // assign array to jsonObject
    const array = jsonObject;
    console.log(array);

    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    let animal = Object.create(allAnimals);

    animal = {
      nameAnimal: "",
      type: "",
      desc: "",
      age: 0,
    };

    // // assign values to properties
    const word = array.fullname.split(" ");
    animal.nameAnimal = word[0];

    animal.desc = word[3];
    animal.type = word[2];
    animal.age = array.age;

    // push object to array
    allAnimals.push(animal);
  });

  //   displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone

  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.nameAnimal;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
