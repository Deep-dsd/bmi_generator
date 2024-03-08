const inputEl = document.querySelectorAll("input");
const btnEl = document.querySelector("button");
const bmiValEl = document.querySelector("#bmiVal");
let weight;
let height;
inputEl.forEach((item) => {
  item.addEventListener("change", (event) => {
    if (event.target.id === "height") {
      height = event.target.value;
    } else {
      weight = event.target.value;
    }
  });
});

btnEl.addEventListener("click", () => {
  if (!weight && !height) {
    bmiValEl.innerHTML = `Enter some value!!`;
    bmiValEl.setAttribute("style", "display: block");
  } else {
    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(1);
    bmiValEl.innerHTML = `${bmi} <span>KG/M<sup>2</sup></span>`;
    bmiValEl.setAttribute("style", "display: block");
  }
});
