function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log(factorialize(5));

function factorializeRecursion(num) {
    if (num <= 0) {
        return 1;
    }
    return num * factorializeRecursion(num - 1);
}

console.log(factorializeRecursion(5));

function factorializeTailRecursion(num, factorial = 1) {
    if (num <= 0) {
        return factorial;
    } else {
        return factorializeTailRecursion(num - 1, factorial * num);
    }
}

console.log(factorializeTailRecursion(5));