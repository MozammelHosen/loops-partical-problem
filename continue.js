const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element > 17){
        continue;
    }
    console.log(element);  
}
