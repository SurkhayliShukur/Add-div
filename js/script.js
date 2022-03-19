let success = document.querySelector(".btn-success");

success.addEventListener("click", addNew);

var divs = document.getElementsByTagName("div");
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

function addNew() {
  for (var i = 0; i < divs.length; i++) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    var thisDiv = divs[i];

    thisDiv.style.backgroundColor = "#" + randomColor;

    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    thisDiv.style.top = randomTop + "px";
    thisDiv.style.left = randomLeft + "px";
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}