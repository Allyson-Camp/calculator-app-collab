// needed:
// onload function DONE
//query select or getbyid all elements needed DONE
//event listener for submit button so we know its been clicked DONE
//if/else statement for calculation to be performed DONE
//variable for result

//Business logic
// calculation functions
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}
//UI logic
//events and other things that make the functions run

window.addEventListener("load", function () {
  const form = document.querySelector("form#input-form");
 
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const num1 = parseInt(document.querySelector("#number-input1").value);
    const num2 = parseInt(document.querySelector("#number-input2").value);
    const operation = document.getElementById("operation").value;

    let result;
    if (operation === "add") {
      result = add(num1, num2);
    } else if (operation === "subtract") {
      result = sub(num1, num2);
    } else if (operation === "multiply") {
      result = mult(num1, num2);
    } else if (operation === "divide") {
      result = div(num1, num2);
    }

     document.getElementById("printed-result").innerText = result;
  });
  //results function things
  
});
