// Problem 4

function maxSequence(arr) {
    let maxSum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let totalSum = 0;
            for (let k = i; k < j; k++) {
                totalSum += arr[k];
            }
            if (totalSum > maxSum) {
                maxSum = totalSum;
            }
        }
    }
    return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));