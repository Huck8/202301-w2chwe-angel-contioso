// export function suma(a, b) {
//   return a + b;
// }

// const containerArray = [];

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
//addInNewGrid()
//console.log(neighborCells);
addInNewGrid(actualPosition);

//   if (actualPosition === 0 && neighborCell === 3) {
//     newGrid[i][j] = 1;
//   } else if (actualPosition === 1 && (neighborCell < 2 || neighborCell > 3)) {
//     newGrid[i][j] = 0;
//   } else{
//     newGrid[i][j] = actualPosition;
//   }
// }

// myArray.forEach((value) => {
//   if (value !== "text") {
//     console.log("Error");
//   }
//   console.log(value);
// });

// function runArr() {
//   let nameCount = 0;
//   for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//     for (let j = 0; j < myArray.length; j++) {
//       if (myArray[i][j] === true) {
//         nameCount++;
//         console.log(myArray[i][j]);
//         console.log(nameCount + " Goal");
//       }
//     }
//   }
// }

// runArr();
