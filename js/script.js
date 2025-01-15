let container = document.querySelector(".container");

//Function for creating grid

function createGrid(size) {
  container.innerHTML = "";

  for (var i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (var j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = randomColor();
      });

      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

createGrid(8);

//function for random color oh hover

function randomColor() {
  let color = [];

  for (var i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

//function for reset grid button

function changeGrid() {
  let gSize = prompt("Enter your desired grid size (Max 100): ");
  gSize = parseInt(gSize);

  if (gSize && gSize > 0 && gSize <= 100) {
    createGrid(gSize);
  } else {
    alert("Enter valid grid size between 1 and 100");
  }
}
