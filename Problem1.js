// Problem 1
function prime(num) {
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) {
           return false;
        }
    }
    return true;
}

function primeX(num) {
    let counter = 0;
    let i = 2;

    while (true) {
        const prima = prime(i);
        if (prima) {
            counter++;
        }
        if (counter === num) {
            return i;
        }
        i++;
    }
}

console.log(primeX(5))