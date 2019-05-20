let arr = []; // 数组-数据的集合
arr.push("{"); 
// console.log(arr,arr.length);
// console.log(typeof arr);
arr.push("}");//  push-向数组的末尾添加一个或更多元素，并返回新的长度。
// console.log(arr);
arr.pop(); //      pop-删除并返回数组的最后一个元素
// console.log(arr);
arr.unshift("]");
console.log(arr);
arr.shift();//	  shift-删除并返回数组的第一个元素
console.log(arr);
arr.forEach(item => {
    console.log(item);
})

// 如何来做匹配规则 if|else
let obj = {};
obj["{"] = "}";
obj["["] = "]";
obj["("] = ")";
// "()"; sta[0] = "(" ")"
 let sta = ["("];
 let s = ")";
 if (obj[sta[sta.length-1]] ===s ) {
     sta.pop();
 }
 console.log(!sta.length);