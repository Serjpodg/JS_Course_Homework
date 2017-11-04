/*//Task 1
var a = +prompt("enter a");
if (a == 0) {
    console.log("Верно!");
}
else {
    console.log("Неверно!");
}

//Task2
var a = prompt("enter a");
if (a == 'test') {
    console.log("Верно!");
}
else {
    console.log("Неверно!");
}

//Task 3.1
function testTrue(test) {
    if (test === true) {
        console.log("Верно!");
    }
    else {
        console.log("Неверно!");
    }
}

testTrue(true);
testTrue(false);

//Task 3.2
function testTrue1(test1) {
    test1 === true ? console.log("Верно!") : console.log("Неверно!");
}

testTrue1(true);
testTrue1(false);

//Task 4
var a = +prompt("enter a");
var b = +prompt("enter b");
var result = a + b;
if (result > 5) {
    result = 5
}
else {
    result *= 10;
}

console.log(result); */

//Task 5
var a = +prompt("enter a");
a === 2 || a === 0 ? console.log(a/10) : console.log(a+7);

//Task 6
var a = +prompt("enter a");
var b = +prompt("enter b");
a <== 1 && b >== 3 ? console.log(a+b) : console.log("НЕверно!");

//Task 7
var a = +prompt("enter a");
var b = +prompt("enter b");
11 > == a >== 2 || 14 > b >== 6 ? console.log(a+2) : console.log(a+5);

//Task 8
var num = +prompt("enter num");
switch(num) {
    case 1:  var result = "Winter";
        break;
    case 2: result = "Spring";
        break;
    case 3:  var result = "Summer";
        break;
    case 4: result = "Autumn";
        break;
    default: result = "Wrong";
        break;
}
console.log(result);
