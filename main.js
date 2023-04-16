var mode = "rainbow";
var cl = "black";

function color_changer(e){
    if(mode == 'rainbow'){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        console.log("here");
    }
    else e.target.style.backgroundColor = cl;
}


var container = document.getElementById("container");
for (var i = 0; i < 16 * 16; i++) {
    var box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
    box.addEventListener("mouseover", color_changer);
}