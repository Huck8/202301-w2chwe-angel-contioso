// export function suma(a, b) {
//   return a + b;
// }

let grid = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

let neighborCells = 0;
let newGrid = [[], [], []];
let actualPosition;

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    actualPosition = grid[i][j];

    if (grid[i - 1] !== undefined && grid[i - 1][j - 1] === 1) {
      neighborCells++;
    }
    if (grid[i - 1] !== undefined && grid[i - 1][j] === 1) {
      neighborCells++;
    }
    if (grid[i - 1] !== undefined && grid[i - 1][j + 1] === 1) {
      neighborCells++;
    }
    if (grid[i] !== undefined && grid[i][j - 1] === 1) {
      neighborCells++;
    }
    if (grid[i] !== undefined && grid[i][j + 1] === 1) {
      neighborCells++;
    }
    if (grid[i + 1] !== undefined && grid[i + 1][j - 1] === 1) {
      neighborCells++;
    }

    if (grid[i + 1] !== undefined && grid[i + 1][j] === 1) {
      neighborCells++;
    }

    if (grid[i + 1] !== undefined && grid[i + 1][j + 1] === 1) {
      neighborCells++;
    }
    console.log(actualPosition);
  }
}

function addInNewGrid(actualPosition) {
  if (actualPosition === 0 && neighborCells === 3) {
    newGrid[i][j] = 1;
  } else if (actualPosition === 1 && (neighborCells < 2 || neighborCells > 3)) {
    newGrid[i][j] = 0;
  }
  console.log(actualPosition);
  return actualPosition;
}
console.table(newGrid);

console.table(grid);

addInNewGrid(actualPosition);
