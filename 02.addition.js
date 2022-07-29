// Write a program to find the sum of numbers from N to M.
function addition(n, m) {
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    return sum;
}

let res = addition(2, 7);

console.log(res);