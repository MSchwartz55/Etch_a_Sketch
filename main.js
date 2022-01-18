let gridContainer = document.getElementById("container");

function populateGrid(parent) {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.classList.add("grid");
        parent.appendChild(div);
    }
}

function addHover() {
    let list = document.querySelectorAll('.grid');

    [].map.call(list, function (element) {
        element.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "pink";
        })
    })
}

populateGrid(gridContainer);
addHover();

