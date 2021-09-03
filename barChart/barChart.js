window.addEventListener("DOMContentLoaded", init);

// document.querySelector("#container").addEventListener("click", removedBar);

let arrQue = [];
let newArr = arrQue;
let i = 0;
let removeCounter = 0;
let queSize;

function init() {
  loop();
}

function loop() {
  i++;
  setTimeout(loopDelay, 1000);
  function loopDelay() {
    if (i <= 39) {
      addBar();
      loop();
    } else {
      addBar();
      removedBar();

      loop();
    }
  }
}

// *********** remove bar

function removedBar() {
  removeCounter++;
  let stringJoin = "bar" + removeCounter;
  document.getElementById(stringJoin.toString()).remove();

  console.log("removed");
}

function viewQue() {
  console.log("view");
}

// ********************add bars

function addBar() {
  getNumberOfCustomer();

  const newBar = document.createElement("div");
  //   let randomNumberHeight = Math.floor(Math.random() * 90);
  let newBarHeight = queSize + Math.floor(Math.random() * 50);
  let newId = "bar" + i;
  console.log("test" + newBarHeight);

  //   ****************for colors
  if (newBarHeight < 40) {
    newBar.style.backgroundColor = "green";
  } else if (newBarHeight >= 40 && newBarHeight < 60) {
    newBar.style.backgroundColor = "orange";
  } else if (newBarHeight >= 60) {
    newBar.style.backgroundColor = "red";
  }

  //   ************** bar attributes
  newBar.id = newId.toString();
  newBar.style.width = "19.24px";
  newBar.style.height = newBarHeight.toString() + "%";
  newBar.style.marginLeft = "3px";
  newBar.style.marginRight = "3px";

  //   append child

  newBar.appendChild(document.createTextNode(""));
  document.getElementById("container").appendChild(newBar);

  //   *********** put to array
  newArr = arrQue.push(newBar.id);
  console.log(arrQue.slice(0, 39));

  document
    .getElementById(newId.toString())
    .addEventListener("mouseover", function () {
      console.log(queSize);
      document.querySelector("h1").innerHTML =
        "Persons in this que: " + queSize;
    });
}

// **************get number of customers

function getNumberOfCustomer() {
  queSize = Math.floor(Math.random() * 32);
}
