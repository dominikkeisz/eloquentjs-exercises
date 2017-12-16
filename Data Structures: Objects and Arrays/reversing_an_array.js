function reverseArray(arr) {
    const newArr = [];
    arr.map(elem => newArr.unshift(elem));
    return newArr;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arr) {
   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
       let mirrorChar = arr[i];
       arr[i] = arr[arr.length - 1 - i]; 
       arr[arr.length - 1 - i] = mirrorChar;
   }
   return arr;
}

var arrayValue = [1,2,3,4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);