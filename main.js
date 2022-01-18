let resetButton = document.getElementById("reset");
let gridContainer = document.getElementById("container");

function populateGrid(parent, num) {
    let size = num * num;
    for (let i = 0; i < size; i++) {
        let div = document.createElement("div");
        div.classList.add("grid");
        div.style.flex = `1 0 calc(${(1 / num) * 100}% - 4px)`;
        parent.appendChild(div);
    }
}

function addHoverEffect(selector) {
    let list = document.querySelectorAll(selector);

    [].map.call(list, function (element) {
        element.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "pink";
        })
    })
}

populateGrid(gridContainer, 16);
addHoverEffect('.grid');

resetButton.addEventListener('click', () => {
    let response = window.prompt("How many squares would you like per row? (limit 100)");
    if (response > 100 || response < 1) {
        window.alert("invalid square count choice");
        return;
    }

    let list = document.querySelectorAll(".grid");

    [].map.call(list, function (element) {
        element.remove();
    })

    populateGrid(gridContainer, response);
    addHoverEffect(".grid");
})
