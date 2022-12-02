const displayUp = document.querySelector("#up");
const displayDown = document.querySelector("#down");
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const delet = document.querySelector(".del");
const clear = document.querySelector(".c");
const clearAll = document.querySelector(".clear");
const equal = document.querySelector(".equal");

class Calculator {
  constructor(displayUp, displayDown) {
    this.displayUp = displayUp;
    this.displayDown = displayDown;
  }

  clear(){
    this.displayUp = '';
    this.displayDown = '';
    this.operation = undefined;
  }

  updateDisplay() {
    this.displayUp.innerText = this.displayUp;
    this.displayDown.innerText = this.displayDown;
  }
}

const calculator = new Calculator(
  displayUp, displayDown
);