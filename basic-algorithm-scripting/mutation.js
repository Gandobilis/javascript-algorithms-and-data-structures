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

function mutationTernary([target, test], i = 0) {
    target = target.toLowerCase();
    test = test.toLowerCase();
    return i >= test.length
        ? true
        : !target.includes(test[i])
            ? false
            : mutation([target, test], i + 1);
}

console.log(mutationTernary(["hello", "hey"]));
