<<<<<<< HEAD
var str1 = '123412235112352135212341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511212341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523535213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523535';
var str2 = '2312123123123123123123312';
// console.log(num1 + num2);
function addTwoNumbers(str1, str2) {
    let carry = 0, // 是否有进位
    l1 = str1.length,// 数字1的长度
    l2 = str2.length,// 数字二的长度
    arr = []; // 为变成字符串做准备

    var max = Math.max(l1, l2); // 最大长度

    // 倒着加加到什么地方为止
    for (let i = l1 - 1, j = l2 - 1, n = max - 1; n >= 0; n--, i--, j--) {
        // 倒着循环， 退出条件是最大值的【0】
        // 同一位相加在加之前数字的进位，进位为flag， 又是加的值
        var sum = (+str1[i] || 0) + (+str2[j] || 0) + carry;
        // 设置carry，判断是否得到的进位
        if (sum >= 10) {    //如果大于等于1 则carry=1
            carry = 1;
            arr.push(sum - 10);
        } else {  //如果小于等于1 则carry=0
            carry = 0;
            arr.push(sum)
        }
    }
    // 最后还有进位
    if (carry > 0 ) {
        arr.push(carry);
    }
    return arr.reverse().join('');
}
console.log(addTwoNumbers(str1, str2));

=======
var str1 = '123412235112352135212341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511212341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523535213523512341223511235213523512341223511235213523512341223511235213523512341223511235213523535';
var str2 = '2312123123123123123123312';
// console.log(num1 + num2);
function addTwoNumbers(str1, str2) {
    let carry = 0, // 是否有进位
    l1 = str1.length,// 数字1的长度
    l2 = str2.length,// 数字二的长度
    arr = []; // 为变成字符串做准备

    var max = Math.max(l1, l2); // 最大长度

    // 倒着加加到什么地方为止
    for (let i = l1 - 1, j = l2 - 1, n = max - 1; n >= 0; n--, i--, j--) {
        // 倒着循环， 退出条件是最大值的【0】
        // 同一位相加在加之前数字的进位，进位为flag， 又是加的值
        var sum = (+str1[i] || 0) + (+str2[j] || 0) + carry;
        // 设置carry，判断是否得到的进位
        if (sum >= 10) {    //如果大于等于1 则carry=1
            carry = 1;
            arr.push(sum - 10);
        } else {  //如果小于等于1 则carry=0
            carry = 0;
            arr.push(sum)
        }
    }
    // 最后还有进位
    if (carry > 0 ) {
        arr.push(carry);
    }
    return arr.reverse().join('');
}
console.log(addTwoNumbers(str1, str2));

>>>>>>> b1290998600ba17f13ae4a11504b2e581e126533
