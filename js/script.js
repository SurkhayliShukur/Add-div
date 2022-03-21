let addDiv = document.querySelector(".btn-success");

addDiv.addEventListener("click", ()=>{
    const x =Math.floor(Math.random()*100+20);
    const y =Math.floor(Math.random()*100+20); 
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv);

    var bgColor = "#" + Math.round(0xffffff * Math.random()).toString(16);
    newDiv.style.background = bgColor;

    newDiv.addEventListener("click", () => {
        newDiv.remove();
    });
    var randomWid = Math.floor(Math.random()* 100);
    var randomHei = Math.floor(Math.random()* 100);
    newDiv.style.width = randomWid + "px";
    newDiv.style.height = randomHei +"px";
    newDiv.style.visibility = "visible"; 
    newDiv.style.left = x + "px";
    newDiv.style.top = y + "px";
   
});
