function min (numberA, numberB) {
    if (numberA > numberB) {
        return numberB;
    } else {
        return numberA;
    }
}

console.log(min(0,10));
console.log(min(0,-10));