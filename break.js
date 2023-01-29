/* for (let i = 0; i < 10; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
} */

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i < 5) {
    break;
  }
}

const names = ["Rohim", "Korim", "Sultan", "Fahim"];
for (let i = 0; i < names.length; i++) {
  const element = names[i];
  if (element == "Sultan") {
    break;
  }
  console.log(element);
}

const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element >= 17){
        break;
    }
    console.log(element);
    
}
