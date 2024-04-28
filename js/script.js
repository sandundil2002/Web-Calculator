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
