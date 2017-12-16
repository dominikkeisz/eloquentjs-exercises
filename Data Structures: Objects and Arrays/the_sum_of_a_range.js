function range(start, end, step = 1) {
    const numbers = [];
    if (start > end && step < 0) {
        for (let i = start; i >= end; i += step) {
            numbers.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(range(1,10));
console.log(range(5,2,-1));

function sum(arr) {
    let sum = 0;
    for (let number = arr[0]; number <= arr.length; number++) {
        sum += number;
    }
    return sum;
}

console.log(sum(range(1,10)));