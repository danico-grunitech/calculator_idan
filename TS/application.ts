function info() {
  alert(`developer's name: idan teperovich
  calaculator version: 1
  this is a calculator!`);
}

function displayButtonInfo(x) {
  alert(x);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.search) {
    const search = new URLSearchParams(window.location.search);
    document.body.style.backgroundColor = search.get("color");
    document.body.style.fontFamily = search.get("font");
    document.body.classList.toggle(search.get("mode"));
  }
});

const bulb = document.getElementById("bulb");
bulb.addEventListener("click", () => {
  //document.body.classList.toggle("dark");
  document.getElementById("screen").classList.toggle("screenBGC");
  flagBulb = !flagBulb;
  if (flagBulb) {
    bulb.style.backgroundColor = "red";
  } else {
    bulb.style.backgroundColor = "revert-layer";
  }
});

const scientific = document.getElementById("scientific");
scientific.addEventListener("click", () => {
  flagSci = !flagSci;
  num1 = "";
  num2 = "";
  oper = "";
  oper2 = "";
  display.innerHTML = "";
  if (flagSci) {
    scientific.style.backgroundColor = "red";
    document.getElementById("right-container").style.display = "block";
  } else {
    scientific.style.backgroundColor = "revert-layer";
    document.getElementById("right-container").style.display = "none";
  }
});

const hist = document.getElementById("hist");
hist.addEventListener("click", () => {
  flagHis = !flagHis;
  if (flagHis) {
    hist.style.backgroundColor = "red";
    document.getElementById("left-container").style.display = "block";
  } else {
    hist.style.backgroundColor = "revert-layer";
    document.getElementById("left-container").style.display = "none";
  }
});
