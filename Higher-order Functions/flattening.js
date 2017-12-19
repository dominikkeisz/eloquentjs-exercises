var arrays = [[1, 2, 3], [4, 5], [6]];

let concatedArrays = arrays.reduce(function(concats, currentArr) {
    return concats.concat(currentArr);
}, []);

console.log(concatedArrays);