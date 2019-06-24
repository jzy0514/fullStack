<<<<<<< HEAD
function binary_search(arr, data) {
    // 1. 计算出mid， 小于就向左， 大于就向右。
    // 2. 重复做
    // 3. 递归思想
    // 推出条件， 只有一个数的时候
    let min = 0,
        max = arr.length - 1,
        mid;
    // 不能再分中间
    while (min <= max) {
        // mid = parseInt((min + max) / 2);
        // 不用加法怎么去得一半
        // 溢出
        // mid = parseInt(min + (max - min) / 2);
        // 位移运算
        mid = min + ((max - min) >> 1)
        if (arr[mid] > data) {
            max = mid - 1
        } else if (arr[mid] < data) {
            min = mid + 1
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(binary_search([1, 4, 7, 9, 10, 12], 10));

let arr = [];
for (let i = 0; i < 10000000; i++) {
    // 二分查找在那个地方会出问题
    arr.push(i);
}
console.log(binary_search(arr, 2019));
=======
function binary_search(arr, data) {
    // 1. 计算出mid， 小于就向左， 大于就向右。
    // 2. 重复做
    // 3. 递归思想
    // 推出条件， 只有一个数的时候
    let min = 0,
        max = arr.length - 1,
        mid;
    // 不能再分中间
    while (min <= max) {
        // mid = parseInt((min + max) / 2);
        // 不用加法怎么去得一半
        // 溢出
        // mid = parseInt(min + (max - min) / 2);
        // 位移运算
        mid = min + ((max - min) >> 1)
        if (arr[mid] > data) {
            max = mid - 1
        } else if (arr[mid] < data) {
            min = mid + 1
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(binary_search([1, 4, 7, 9, 10, 12], 10));

let arr = [];
for (let i = 0; i < 10000000; i++) {
    // 二分查找在那个地方会出问题
    arr.push(i);
}
console.log(binary_search(arr, 2019));
>>>>>>> b1290998600ba17f13ae4a11504b2e581e126533
