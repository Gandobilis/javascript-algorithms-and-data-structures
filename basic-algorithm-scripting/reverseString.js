function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

function reverseString1(str) {
    return str
        .split("")
        .reverse()
        .join("");
}