const input = document.getElementById("input");
const btn = document.getElementById("btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

let value;

function renderConversionCard(el, val, unit1, unit2, rate) {
  const val1 = (val * rate).toFixed(3);
  const val2 = (val / rate).toFixed(3);
  el.textContent = `
    ${val} ${unit1} = ${val1} ${unit2} | ${val} ${unit2} = ${val2} ${unit1}`;
}

btn.addEventListener("click", () => {
  if (input.value) {
    value = input.value;
    input.value = "";
  } else {
    value = 0;
  }

  renderConversionCard(lengthEl, value, "meters", "feet", 3.28084);
  renderConversionCard(volumeEl, value, "liters", "gallons", 0.264172);
  renderConversionCard(massEl, value, "kilos", "pounds", 2.20462);
});
