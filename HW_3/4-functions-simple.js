//1 task

function getName(name) {
    alert ("Hello, " + name);
};
getName(prompt("Enter name"));

//2 task

function double(x) {
    alert (x*2);
};
double(prompt("Enter x"));

//3 task

var sum = 0;
function sumRange(x,y) {
    for (var i = x; i <= y; i++)
    {
       sum += i;
    }
    alert (sum);
}
sumRange(+prompt("Enter x"),+prompt("Enter y"));

//4 task

function isPrime(x) {
    if ( x !== 1 && x <= 3) {
        return 1;
    } else {
        for (var i = 2; i < x; i++) {
            if (x % i === 0) {
                return 0;
            }
        }
        return 1;
    }
}
var sum = 0;
function getPrimesSumBelow(num) {
    for (var i = num; i > 1; i--) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

alert(getPrimesSumBelow(+prompt()));

//5 task
function isOdd(x) {
    return (x % 2 !== 0);
}
alert(isOdd(+prompt()));

//6 task
function oddInRange(x, y) {
var oddnums = [];
    for (var i = 0, j = x; j <= y; j++) {
        if (isOdd(j) === true) {
            oddnums[i] = j;
            i++;
            }
        }
    return oddnums;
}
alert(oddInRange(+prompt("x"),+prompt("y")));

//7 task
function nine() {
    var num = +prompt("number");
    if (num !== 9) {
        nine();
    } else {
        alert("thanks");
    }
}

nine();
