// let factorial = 1;
// for (let i = 5; i >= 1; i--){
//     factorial = factorial * i;
//     // return factorial;
// }

// console.log(factorial);

// let factorial = 1;
// for (let i = 5; i >= 1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial(i){ 
    if (i == 1) {
        return 1;          
    }
    return i * factorial(i - 1);
}

const total = factorial(5);
console.log(total);

/*
5 * facktorial(4)
5 * 4 facktiral (3);
5 * 4 * 3 facktorial (2)
5 * 4 * 3 * 2 * facltproa;(1)
*/