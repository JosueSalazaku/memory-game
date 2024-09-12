const container = document.getElementById("container");
const canvas = document.getElementById("gamesection");
const context = canvas.getContext("2d");

const rows = 4;
const columns = 4;

const squareSize = 225; // Adjusted size

canvas.width = columns * squareSize;
canvas.height = rows * squareSize;

const squares = [];

for (let i = 0; i < rows; i++) {
  squares[i] = [];
  for (let j = 0; j < columns; j++) {
    const x = j * squareSize;
    const y = i * squareSize;

    context.fillStyle = "black";
    context.fillRect(x, y, squareSize, squareSize);

    // Update the position and size to match the increased square size
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");
    squareElement.style.width = `${squareSize}px`;
    squareElement.style.height = `${squareSize}px`;
    squareElement.style.position = "absolute";
    squareElement.style.left = `${x}px`;
    squareElement.style.top = `${y}px`;
    document.getElementById("container").appendChild(squareElement);

    squares[i][j] = squareElement;
  }
}
