// String Type Variable
const bottle = "water";
const bottleColor = "black";
const penColor = "black";
// Number Type Variable
const sunglassPrice = 120;
// Boolean Type Variable
const isExpensive = true;
// Array Type Variable
const tableItems = [
  "bottle",
  "bottleColor",
  "bottle",
  "Paper",
  "Pen",
  "PenColor",
];
const item3 = tableItems[3];
tableItems[4]= "NoteBooks";
const penIndex = tableItems.indexOf("pen");

// conditional
if(tableItems.length > 5){
    console.log("Hello world");
}
else if(tableItems[3]=="pen"){
    console.log("pen id decliary");
}
else{
    console.log("Not allowed");
}

