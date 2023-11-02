function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function frankenSpliceSpread(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

console.log(frankenSpliceSpread([1, 2, 3], [4, 5, 6], 1));

function frankenSpliceSpreads(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

console.log(frankenSpliceSpreads([1, 2, 3], [4, 5, 6], 1));
