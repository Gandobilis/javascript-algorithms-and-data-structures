function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";

    for (let i = 0; i < num; i++) {
        accumulatedStr += str;
    }

    return accumulatedStr;
}

console.log(repeatStringNumTimes("abc", 3));

function repeatStringNumTimesRecursive(str, num) {
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimesRecursive(str, num - 1);
    }
}

console.log(repeatStringNumTimesRecursive("abc", 3));

function repeatStringNumTimesRecursiveShort(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

console.log(repeatStringNumTimesRecursiveShort("abc", 3));
