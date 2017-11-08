//1
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

var arrPrime = [];
function primesInRange(a,b) {
    for (var i = a, j = 0; i <= b; i++) {
        if (isPrime(i)) {
            arrPrime[j] = i;
            j++;
        }
    }
    return arrPrime;
}

alert(primesInRange(+prompt("x"),+prompt("y")));

//2


