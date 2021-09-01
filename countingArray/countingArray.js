const limit = 50;
let array = [];
let count = -1;
let number = array;

init();

function init() {
  loop();
}

function loop() {
  count++;

  setTimeout(loopDelay, 700);

  function loopDelay() {
    if (count < limit) {
      number.unshift(count);
      loop();
      console.log(array.slice(1, 9));
    }
  }
}
