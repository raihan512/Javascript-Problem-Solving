// Write a program to print all even numbers from 1 to N.
function findEven(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            if (i == 0) continue
            console.log(i);
        }
    }
}

findEven(10);