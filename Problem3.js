// Problem 3
function prime(num) {
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) {
           return false;
        }
    }
    return true;
}

function persegiEmpat(wide, high, start) {
    const arr = [];
    const area = wide * high;
    let i = start + 1;

    while (true) {
        const prima = prime(i);
        if (prima) {
            arr.push(i);
        }
        if (arr.length === area) {
            break;
        }
        i++;
    }

    let str = "";
    for (let i = 0; i < high; i++) {
        for (let j = 0; j < wide; j++) {
            const pos = i * wide + j;
            str += `${arr[pos]}`;

            if (j !== wide - 1) {
                str += " ";
            }
        }
        str += "\n";
    }
    const sum = arr.reduce((a, b) => a + b, 0);
    str += sum;

    return str;
}

console.log(persegiEmpat(2, 3, 13))