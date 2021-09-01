"use strict";

let iteration = -1;
let maxIteration;
let typeSound1 = document.querySelector("#typekey1");
let typeSound2 = document.querySelector("#typekey2");
let typeSpace = document.querySelector("#typespace");
let typeReturn = document.querySelector("#typereturn");
let typeLast = document.querySelector("#typelast");

const string = document.getElementById("typewriter").textContent.trim();
const word = string.split("");

maxIteration = Number(string.length);
console.log("max iteration: " + maxIteration);

init();

function init() {
  console.log("init");
  document.querySelector("#typewriter").innerHTML = "";
  loop();
}

function loop() {
  iteration++;

  setTimeout(timeOut, 400);

  function timeOut() {
    if (iteration < maxIteration) {
      console.log(string[iteration]);
      //   document.querySelector("#typewriter").innerHTML = string[iteration];

      let number = Math.floor(Math.random() * 2);
      if (number == 0) {
        console.log("typeSound1");
        typeSound1.play();
      } else {
        console.log("typeSound2");

        typeSound2.play();
      }

      if (string[iteration] === " ") {
        typeSpace.play();
        document.querySelector("#typewriter").innerHTML += string[iteration];
      }

      document.querySelector("#typewriter").innerHTML += string[iteration];
      loop();
    } else if ((iteration = maxIteration)) {
      typeLast.play();
      typeReturn.play();
    }
  }
}
