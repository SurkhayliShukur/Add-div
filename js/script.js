let addDiv = document.querySelector(".btn-success");

addDiv.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);

  var bgColor = "#" + Math.round(0xffffff * Math.random()).toString(16);
  const x = Math.round(Math.random() * 1000 + 20);
  const y = Math.round(Math.random() * 200 + 40);
  const z = Math.round(Math.random() * 300+ 40);
  var randomWid = Math.floor(Math.random() * 100);
  var randomHei = Math.floor(Math.random() * 100);
  newDiv.style.background = bgColor;
  newDiv.style.width = randomWid + "px";
  newDiv.style.height = randomHei + "px";
  newDiv.style.position = "absolute";
  newDiv.style.left = x + "px";
  newDiv.style.top = y + "px";
  newDiv.style.right = z + "px";
  newDiv.style.visibility = "visible";

  newDiv.addEventListener("click", () => {
    newDiv.remove();
  });
});
