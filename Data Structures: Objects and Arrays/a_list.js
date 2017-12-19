function arrayToList (arr) {
    let list = null;
    for (let i = arr.length -1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list;
}

console.log(arrayToList([10,20]));


function listToArray (list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));


function prepend (element, list) {
    return {value: element, rest: list};
}

console.log(prepend(10 ,prepend(20, null)));

function nth (list, position) {
    if (!list) {
        return undefined;
    } else if (position === 0) {
        return list.value;
    } else {
        return nth(list.rest, position -1);
    }
}

console.log(nth(arrayToList([10,20,30]), 2));