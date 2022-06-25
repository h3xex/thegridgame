const grid = document.getElementById("grid");
let x = [];
let y = [];
const gridSize = 10;
let i = 0;


for (i = 0; i < gridSize; i++) {
  y.push(["foo"]);
}

for (i = 0; i < gridSize; i++) {
  x.push(y);
}


console.log(x);
grid.innerHTML = x.join("<br>");