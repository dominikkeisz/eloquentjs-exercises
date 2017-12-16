function countBs (str) {
    let numberOfBs = 0;
    for (let char = 0; char < str.length; char++) {
        if (str[char] === 'B') {
            numberOfBs++;
        }
    }
    return numberOfBs;
}

console.log(countBs("BBC"));

function countChar (str, letter) {
    let letterInStr = 0;
    for (let char = 0; char < str.length; char++) {
        if (str[char] === letter) {
            letterInStr++;
        }
    }
    return letterInStr;
}

console.log(countChar("kakkerlak", "k"));