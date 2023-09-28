let slider = document.getElementById("slider");
const number = document.getElementById("number");
const checkboxes = document.querySelectorAll(".chk");
let one = document.querySelector(".one");
const lvl = document.querySelectorAll(".lvl");
let generate = document.getElementById("generate");
const text = document.getElementById("medium");
let password = document.getElementById("password");
let copyBtn = document.getElementById("copy-btn");
let strength = 0;
let charset = "";
let error = "You must select at least one checkbox";

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

Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      strength++;
    } else {
      strength--;
    }
  });
});

generate.addEventListener("click", function () {
  if (strength == 1) {
    lvl[0].style.backgroundColor = "var(--1---Red, #F64A4A)";
    text.innerHTML = "TOO WEAK!";
  } else {
    lvl[0].style.backgroundColor = "";
    text.innerHTML = "";
  }
  if (strength == 2) {
    lvl[0].style.backgroundColor = "var(--2---Orange, #FB7C58)";
    lvl[1].style.backgroundColor = "var(--2---Orange, #FB7C58)";
    text.innerHTML = "WEAK";
  } else {
    lvl[(0, 1)].style.backgroundColor = "";
  }
  if (strength == 3) {
    lvl[0].style.backgroundColor = "var(--3---Yellow, #F8CD65)";
    lvl[1].style.backgroundColor = "var(--3---Yellow, #F8CD65)";
    lvl[2].style.backgroundColor = "var(--3---Yellow, #F8CD65)";
    text.innerHTML = "MEDIUM";
  } else {
    lvl[(0, 1, 2)].style.backgroundColor = "";
  }
  if (strength == 4) {
    lvl[0].style.backgroundColor = "var(--Neon-Green, #A4FFAF)";
    lvl[1].style.backgroundColor = "var(--Neon-Green, #A4FFAF)";
    lvl[2].style.backgroundColor = "var(--Neon-Green, #A4FFAF)";
    lvl[3].style.backgroundColor = "var(--Neon-Green, #A4FFAF)";
    text.innerHTML = "STRONG";
  } else {
    lvl[(0, 1, 2, 3)].style.backgroundColor = "";
  }

  charset = "";
  password.innerHTML = generateRandomPassword(parseInt(slider.value));
});
document.addEventListener("DOMContentLoaded", function () {
  copyBtn.addEventListener("click", function () {
    const textArea = document.createElement("textarea");
    textArea.value = password.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    ResolutionChange();
    document.getElementById("copied").textContent = "copied";
    setTimeout(function () {
      document.getElementById("copied").textContent = "";
    }, 1000);
  });
});

function generateRandomPassword(length) {
  if (checkboxes[0].checked) {
    charset += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (checkboxes[1].checked) {
    charset += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (checkboxes[2].checked) {
    charset += "1234567890";
  }
  if (checkboxes[3].checked) {
    charset += "!@#$%^&*()_+=";
  }
  if (
    !checkboxes[0].checked &&
    !checkboxes[1].checked &&
    !checkboxes[2].checked &&
    !checkboxes[3].checked
  ) {
    return error;
  }

  let passwordAchi = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    passwordAchi += charset[randomIndex];
  }

  return passwordAchi;
}

function ResolutionChange() {
  if (window.innerWidth >= 768) {
    document.getElementById("copied").style.display = "block";
  } else {
    document.getElementById("copied").style.display = "none";
  }
}
