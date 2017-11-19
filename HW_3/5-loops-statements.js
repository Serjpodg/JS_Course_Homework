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
