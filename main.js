const slider = document.getElementById("slider");
const number = document.getElementById("number");
const checkboxOne = document.querySelector(".first");
const checkboxTwo = document.querySelector(".second");
const checkboxThree = document.querySelector(".third");
const checkboxFour = document.querySelector(".fourth");

const arry = document.getElementById("myinput-large custom");
console.log(arry);

//lvl-boxes

slider.addEventListener("change", function () {
  const num = slider.value;
  number.innerHTML = num;
});

slider.addEventListener("input", function (event) {
  const thumbPosition =
    (event.target.value - event.target.min) /
    (event.target.max - event.target.min);
  const thumbPositionPercent = thumbPosition * 100 + "%";
  document.documentElement.style.setProperty(
    "--thumb-position",
    thumbPositionPercent
  );
});

checkboxOne.addEventListener("click", function () {
  if (checkboxOne.style.backgroundColor === "") {
    checkboxOne.style.backgroundColor = "#A4FFAF";
  } else {
    checkboxOne.style.backgroundColor = "";
  }
});
checkboxTwo.addEventListener("click", function () {
  if (checkboxTwo.style.backgroundColor === "") {
    checkboxTwo.style.backgroundColor = "#A4FFAF";
  } else {
    checkboxTwo.style.backgroundColor = "";
  }
});
checkboxThree.addEventListener("click", function () {
  if (checkboxThree.style.backgroundColor === "") {
    checkboxThree.style.backgroundColor = "#A4FFAF";
  } else {
    checkboxThree.style.backgroundColor = "";
  }
});
checkboxFour.addEventListener("click", function () {
  if (checkboxFour.style.backgroundColor === "") {
    checkboxFour.style.backgroundColor = "#A4FFAF";
  } else {
    checkboxFour.style.backgroundColor = "";
  }
});
