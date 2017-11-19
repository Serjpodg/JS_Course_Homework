//Task 1

function evenodd (x) {

    var odd = " is odd";
    var even = " is even";
    var i = 0;
    while (i <= x) {
        if (i%2 === 0) {
            console.log(i + even);
        } else {
            console.log(i + odd);
        }
        i++;
    }
}

evenodd(15);

//Task 2

function FizzBuzz (x) {

    var f = "Fizz";
    var b = "Buzz";
    var j = 0;

    for (var i = 0; i <= x; i++) {
        if (i % 15 === 0) {j = f+b;}
        else if (i % 3 === 0) {j = f;}
        else if (i % 5 === 0) {j = b;}
        else {j = i;}
        console.log(j);
    }
}

FizzBuzz(100);

//Task 3
function GCD (x, y) {

    var a = 0;
    var b = 0;
    var gcd;

    if (x >= y) {a = y; b = x;} else {a = x; b = y;}

    for (var i = a; i > 0; i--) {
        if ( (b % i === 0) && (a % i === 0) ) {
            gcd = i;
            alert(gcd);
            return;
        }
    }
}

GCD(256, 128);

//Task 4
