const container = document.getElementById("container");
const gameSection = document.createElement("section");
container.appendChild(gameSection);


const rows = 4;
const columns = 4;
const squares = [];

for (let i = 0; i < rows; i++) {
  squares[i] = [];

  for (let j = 0; j < columns; j++) {
    squares[i][j] = "";
  }
}

const value = squares[1][2];
console.log(value);
console.log("hello");

squares.forEach((row) => {
  const squareElement = document.createElement("div");
  squareElement.classList.add("square");
  gameSection.appendChild(squareElement);
});
