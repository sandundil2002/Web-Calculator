const display = document.getElementById("display");
let currentValue = "";

function getValue(num) {
  currentValue += num;
  display.value = currentValue;
}

function clean() {
  currentValue = " "
  display.value = currentValue;
}

function calculate() {
  try {
      let total = eval(currentValue);
      display.value = total;
      currentValue = total;
  } catch (error) {
      display.value = currentValue;
  }
}

function back() {
  const output = currentValue.slice(0,currentValue.length-1);
  display.value = output;
  currentValue = output;
}

