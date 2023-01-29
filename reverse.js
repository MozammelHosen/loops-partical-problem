let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

let num = 10;
while (num >= 1) {
  console.log("Hello " + num);
  num--;
}

//  for loop
for (let i = 10; i >= 1; i--) {
  console.log("Hello Reverse " + i);
}

for (let i = 10; i >= 1; i--) {
  if (i <= 5) {
    break;
  }
  console.log("Hello World Reverse " + i);
}
