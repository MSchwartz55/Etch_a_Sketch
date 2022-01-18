function populateGrid() {
    let gridContainer = document.getElementById("container");

    for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.classList.add("grid");
        gridContainer.appendChild(div);
    }
}

populateGrid();