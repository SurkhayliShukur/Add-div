const btnAdd = document.querySelector(".btn");


btnAdd.addEventListener("click",addNew);

function addNew(){
  const newDiv = document.createElement("div");
  console.log("add");
  newDiv.classList.add('addDiv');
  document.body.appendChild(newDiv);
  newDiv.addEventListener("click",()=>{
    newDiv.remove();
  });
  var bgColor = "#" + Math.round(0xffffff*Math.random()).toString(16);
  newDiv.style.background = bgColor;
}

