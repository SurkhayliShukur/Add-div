let addDiv = document.querySelector(".btn-success");

addDiv.addEventListener("click", ()=>{
    const x =Math.floor(Math.random()*500+20);
    const y =Math.floor(Math.random()*500+20);
    const newDiv = document.createElement("div");
    newDiv.style.left = x + "px";
    newDiv.style.top = y + "px";
    console.log("add");
    newDiv.classList.add('AddDiv');
    document.body.appendChild(newDiv);

    var bgColor = "#" + Math.round(0xffffff * Math.random()).toString(16);
    newDiv.style.background = bgColor;

    newDiv.addEventListener("click", () => {
        newDiv.remove();
    });
    var randomWid = Math.floor(Math.random()*100);
    var randomHei = Math.floor(Math.random()*100);
    newDiv.style.width = randomWid;
    newDiv.style.height = randomHei;
    newDiv.style.visibility = "visible";
});
