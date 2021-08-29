"usestrict";
let sum;

window.addEventListener("DOMContentLoaded", clickCalculate);

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
  if (checked === true) {
    const decimal = document.getElementById("decimals").value;
    console.log(sum.toFixed(decimal));

    let x = document.querySelector("li");
    let y = document.createTextNode(sum);
    x.appendChild(y);
    document.getElementById("results").appendChild(y);
  }
}
