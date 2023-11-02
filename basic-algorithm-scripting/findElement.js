function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }

    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

function findElementFind(arr, func) {
    return arr.find(func);
}

console.log(findElementFind([1, 2, 3, 4], num => num % 2 === 0));

function findElementRecursive(arr, func) {
    if (arr.length > 0 && !func(arr[0])) {
        return findElementRecursive(arr.slice(1), func);
    } else {
        return arr[0];
    }
}

console.log(findElementRecursive([1, 2, 3, 4], num => num % 2 === 0));

