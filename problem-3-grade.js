let marks = 50;

if(marks >=80){
    console.log("A+");
}
else if (marks >=70) {
    console.log("A");
}
else if(marks >= 50){
    console.log("A-");
}
else if(marks >= 40){
    console.log("B");
}
else if(marks >= 33){
    console.log("C");
}
else{
    console.log("You Fail");
}

// isoceles

const side1 = 9;
const side2 = 8;
const side3 = 0;

if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log("isoceles");
}

else{
    console.log("Not Match");
}