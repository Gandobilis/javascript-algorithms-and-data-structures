function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

console.log(mutation(["hello", "hey"]));

function mutationEvery(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every(function (letter) {
            return arr[0].toLowerCase().indexOf(letter) !== -1;
        });
}

console.log(mutationEvery(["hello", "hey"]));

function mutationRecursive([target, test], i = 0) {
    target = target.toLowerCase();
    test = test.toLowerCase();
    return i >= test.length
        ? true
        : !target.includes(test[i])
            ? false
            : mutationRecursive([target, test], i + 1);
}

console.log(mutationRecursive(["hello", "hey"]));

function mutationRegExp([elem1, elem2]) {
    const regex = new RegExp(`[^${elem1}]`, 'i');
    return !regex.test(elem2);
}

console.log(mutationRegExp(["hello", "hey"]));

