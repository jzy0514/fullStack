<<<<<<< HEAD
const arr = [1,2,3,4,5,6,7,8,9,0]
const chunk = (arr, size) => Array.from({
    length: Math.ceil(arr.length / size)
}, (v, i) => arr.slice(i * size, i * size + size));

console.log(chunk(arr, 3));
=======
const arr = [1,2,3,4,5,6,7,8,9,0]
const chunk = (arr, size) => Array.from({
    length: Math.ceil(arr.length / size)
}, (v, i) => arr.slice(i * size, i * size + size));

console.log(chunk(arr, 3));
>>>>>>> b1290998600ba17f13ae4a11504b2e581e126533
