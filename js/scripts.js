// needed:
// onload function DONE
//query select or getbyid all elements needed DONE
//event listener for submit button so we know its been clicked
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
  let submitBtn = document.querySelector("button#submit");
  const num1 = parseInt(document.querySelector("form#number-input1").value);
  const num2 = parseInt(this.document.querySelector("form#number-input2").value);
  const operation = document.querySelector("form#operation");

form.addEventListener("submit"), function(event) {
    event.preventDefeault();
  
  let result = "";
    if (operation === "add") {
        result = add(num1, num2);
    } else if (operation === "sub") {
        result = sub(num1, num2);
    } else if (operation === "mult") {
        result = mult(num1, num2);
    } else if (operation === "div") {
        result = div(num1, num2);
    }
}
});
