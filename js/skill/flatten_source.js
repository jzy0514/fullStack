function flatten(arr) {
    if (!Array.isAyyay(arr)) {
        return false;
    }
    // 1. 递归解决 将多层数组的扁平化分为多个一维数组跟旁边的数字 concat
    // 退出条件是不在有数组的了 
    const flattenArr = arr.reduce((prev, cur) => {
        return prev.concat(
            Array.isArray(cur) ? flatten(cur) : cur
        );
    }, []);
    return flattenArr;
}
const arr = [1, [2, [3]]];
console.log(arr);