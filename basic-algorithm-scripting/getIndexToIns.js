function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }

    return arr.length;
}

console.log(getIndexToIns([40, 60], 50));

function getIndexToInsFilter(arr, num) {
    return arr.filter(val => num > val).length;
}

console.log(getIndexToInsFilter([40, 60], 50));

function getIndexToInsFindIndex(arr, num) {
    // sort and find right index
    let index = arr
        .sort((curr, next) => curr - next)
        .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
}

console.log(getIndexToInsFindIndex([40, 60], 500));

function getIndexToInsConcat(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}

console.log(getIndexToInsConcat([1, 3, 4], 2));