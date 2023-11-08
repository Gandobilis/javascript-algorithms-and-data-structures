function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArr.push(arr[i]);
    }
    return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));

function bouncerFilter(arr) {
    return arr.filter(Boolean);
}

console.log(bouncerFilter([7, "ate", "", false, 9]));