var container = document.getElementById("container");
for (var i = 0; i < 16 * 16; i++) {
    var box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
    box.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
    });
}

// have to add event listeners

