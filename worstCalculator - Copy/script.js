"usestrict";
let sum;

window.addEventListener("DOMContentLoaded", clickCalculate);
document.querySelector("#clear").addEventListener("click", clearResult);

function clickCalculate() {
  console.log("calculating");

  document.querySelector("#calculate").addEventListener("click", () => {
    let firstnumber = document.getElementById("firstnumber").value;
    let secondnumber = document.getElementById("secondnumber").value;
    let operator = document.getElementById("operator").value;

    console.log(firstnumber, operator, secondnumber);

    if (operator === "sub") {
      sum = parseInt(firstnumber) - parseInt(secondnumber);
    } else if (operator === "add") {
      sum = parseInt(firstnumber) + parseInt(secondnumber);
    } else if (operator === "div") {
      sum = parseInt(firstnumber) / parseInt(secondnumber);
    } else if (operator === "mul") {
      sum = parseInt(firstnumber) * parseInt(secondnumber);
    }
    console.log(sum);
    roundNumber();
  });
}
function roundNumber() {
  console.log("roundnumber");
  const checked = document.getElementById("doround").checked;
  const decimal = document.getElementById("decimals").value;

  ul = document.getElementById("results");
  li = document.createElement("li");

  if (checked === true) {
    console.log(sum.toFixed(decimal));
    li.appendChild(document.createTextNode(sum.toFixed(decimal)));
    ul.appendChild(li);
  } else {
    li.appendChild(document.createTextNode(sum));
    ul.appendChild(li);
  }
}

function clearResult() {
  element = document.querySelector("ul");
  // document.parentNode.removeChild(element);
  ul = document.getElementById("results");
  li = document.createElement("li");

  document.querySelector("ul").innerHTML = "";
  li.appendChild(document.createTextNode("0"));
  ul.appendChild(li);
}
