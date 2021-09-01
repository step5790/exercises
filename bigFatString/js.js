"use strict";

document.querySelector(".generate").addEventListener("click", generate);

function generate() {
  let input = document.querySelector("#input").value;
  const choices = document.querySelector("#dropDown").value;

  if (choices == 1) {
    let answer = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    console.log(answer);
    document.querySelector(".result").innerHTML = answer;
  } else if (choices == 2) {
    let word = input.split(" ");
    if (word.length >= 4) {
      console.log(word.length);
      document.querySelector(".result").innerHTML = word.slice(0, 2).join(" ");
    } else {
      let word = input.split(" ");
      let answer = word[0];
      console.log(answer);
      document.querySelector(".result").innerHTML = answer;
    }
  } else if (choices == 3) {
    let word = input.split(" ");
    let answer = word[0];
    if (word.length >= 4) {
      let wordJoin = word.slice(0, 2).join(" ");
      console.log(wordJoin.length);
      document.querySelector(".result").innerHTML = wordJoin.length;
    } else {
      console.log(answer.length);
      document.querySelector(".result").innerHTML = answer.length;
    }
  } else if (choices == 4) {
    let word = input.split(" ");
    // let answer = word[0];
    if (word.length >= 4) {
      console.log(word[2]);
      document.querySelector(".result").innerHTML = word[2];
    } else {
      console.log(word[1]);
      document.querySelector(".result").innerHTML = word[1];
    }
  } else if (choices == 5) {
    if (input.endsWith(".png") == true || input.endsWith(".jpg") == true) {
      console.log("File name is PNG or JPG");
      document.querySelector(".result").innerHTML = "File name is PNG or JPG";
    } else {
      document.querySelector(".result").innerHTML =
        "File name is not PNG or JPG";
      console.log("File name is not PNG or JPG");
    }
  } else if (choices == 6) {
    let word = input.slice(input.length);
    console.log(input.padStart(input.length, "*"));
    document.querySelector(".result").innerHTML = word.padStart(
      input.length,
      "*"
    );
  } else if (choices == 7) {
    let word =
      input.substring(0, 2) + input[2].toUpperCase() + input.substring(3);
    document.querySelector(".result").innerHTML = word;
    console.log(word);
  } else if (choices == 8) {
    document.querySelector(".result").innerHTML = "";

    let counter = -1;

    init();

    function init() {
      loop();
    }

    function loop() {
      counter++;

      if (counter < input.length) {
        if (input.charAt(counter) === " " || input.charAt(counter) === "-") {
          document.querySelector(".result").innerHTML += input.charAt(counter);
          // console.log(input.charAt(counter));
          counter++;
          document.querySelector(".result").innerHTML += input
            .charAt(counter)
            .toUpperCase();
          // console.log(input.charAt(counter).toUpperCase());

          loop();
        } else {
          document.querySelector(".result").innerHTML += input.charAt(counter);
          // console.log(input.charAt(counter));
          loop();
        }
      }
    }
  }
}
