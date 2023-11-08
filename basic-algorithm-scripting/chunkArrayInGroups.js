function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

function chunkArrayInGroupsSlice(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

console.log(chunkArrayInGroupsSlice(["a", "b", "c", "d"], 2));

function chunkArrayInGroupsWhile(arr, size) {
    // Break it up.
    const newArr = [];
    let i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}

console.log(chunkArrayInGroupsWhile(["a", "b", "c", "d"], 2));

function chunkArrayInGroupsSplice(arr, size) {
    const newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

console.log(chunkArrayInGroupsSplice(["a", "b", "c", "d"], 2));

function chunkArrayInGroupsRecursive(arr, size) {
    if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)].concat(
            chunkArrayInGroups(arr.slice(size), size)
        );
    }
}

console.log(chunkArrayInGroupsRecursive(["a", "b", "c", "d"], 2));
