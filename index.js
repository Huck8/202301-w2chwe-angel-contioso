// export function suma(a, b) {
//   return a + b;
// }

// const containerArray = [];

let myArray = [
  ["Antonio", "Antonio", "Paco"],
  ["Nina", "Andrea", "Antonio", "Eli"],
  ["Lana", "Antonio", "Plata"],
];

function runArr() {
  let nameCount = 0;
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    for (let j = 0; j < myArray.length; j++) {
      if (myArray[i][j] === "Antonio") {
        nameCount++;
        console.log(myArray[i][j]);
        console.log(nameCount);
      }
    }
  }
}

runArr();
