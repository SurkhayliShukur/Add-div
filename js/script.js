let addDiv = document.querySelector(".btn-success");
var documentHeight = document.documentElement.clientHeight;
var documentWidth = document.documentElement.clientWidth;

addDiv.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);

  var bgColor = "#" + Math.round(0xffffff * Math.random()).toString(16);
  const newdivSize = Math.floor(Math.random()*80+20);
  const x = Math.round(Math.random() * (documentWidth)-newdivSize);
  const y = Math.round(Math.random() * (documentHeight)-newdivSize);
  var randomWid = Math.floor(Math.random() * 100);
  var randomHei = Math.floor(Math.random() * 100);
  newDiv.style.background = bgColor;
  newDiv.style.width = randomWid + "px";
  newDiv.style.height = randomHei + "px";
  newDiv.style.position = "absolute";
  newDiv.style.left = x + "px";
  newDiv.style.top = y + "px";
  newDiv.style.visibility = "visible";

  newDiv.addEventListener("click", () => {
    newDiv.remove();
  });
});
