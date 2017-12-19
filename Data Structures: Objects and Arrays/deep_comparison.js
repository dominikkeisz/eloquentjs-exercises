function deepEqual (arg1, arg2) {
    if (arg1 === arg2) {
        return true;
    }

    if (arg1 == null || typeof arg1 != 'object' || arg2 == null || typeof arg2 != 'object') {
        return false;
    }

    let propertiesOfArg1 = 0;
    let propertiesOfArg2 = 0;

    for (let prop in arg1) {
        propertiesOfArg1++;
    }

    for (let prop in arg2) {
        propertiesOfArg2++;
    }

    if (propertiesOfArg1.length != propertiesOfArg2.length) {
        return false;
    }

    for (let prop in arg1) {
        if (!(prop in arg2) || !deepEqual(arg1[prop], arg2[prop])) {
            return false;
        }
    }

    return propertiesOfArg1 == propertiesOfArg2;

}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));