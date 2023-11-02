function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("He has to give me a new name", "name"));

function confirmEndingRegEx(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    let re = new RegExp(target + "$", "i");

    return re.test(str);
}

console.log(confirmEndingRegEx("Bastian", "n"));

function confirmEndingBackward(str, target) {
    return str.slice(-target.length) === target
}

console.log(confirmEndingBackward("Bastian", "n"));