function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }

    return longestLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function findLongestWordLengthSplit(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

console.log(findLongestWordLengthSplit("The quick brown fox jumped over the lazy dog"));

function findLongestWordLengthReduce(s) {
    return s
        .split(' ')
        .reduce((longest, word) => Math.max(longest, word.length), 0);
}

console.log(findLongestWordLengthReduce("The quick brown fox jumped over the lazy dog"));

function findLongestWordLengthMap(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

console.log(findLongestWordLengthMap("The quick brown fox jumped over the lazy dog"));

function findLongestWordLengthRecursive(str) {
    // split the string into individual words
    const words = str.split(" ");

    // words only has 1 element left that is the longest element
    if (words.length === 1) {
        return words[0].length;
    }

    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
        words[0].length,
        findLongestWordLengthRecursive(words.slice(1).join(" "))
    );
}

console.log(findLongestWordLengthRecursive("The quick brown fox jumped over the lazy dog"));