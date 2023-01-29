/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */

// Display every  element of an array
const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  console.log(element);
}

/* const names = ["Rohim", "Korim", "Sultan", "fahim", "Istiyak"];
for(let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
} */

// array of event names
const names = ["Rohim", "Korim", "Sultan", "fahim", "Istiyak"];
for(let i = 1; i < names.length; i+=2) {
    const element = names[i];
    console.log(element);
}

//  array odd number of

/* const names = ["Rohim", "Korim", "Sultan", "fahim", "Istiyak"];
for(let i = 0; i < names.length; i+=2) {
    const element = names[i];
    console.log(element);
} */