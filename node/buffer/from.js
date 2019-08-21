const fs = require('fs')

const bufFromStr = Buffer.from('hello buffer');
// ASCII 16进制形式
// console.log(bufFromStr);

// 申请一个大小
const alloc = Buffer.alloc(32);
alloc.write('123456789')
// console.log('alloc', alloc.toString());

fs.readFile('./taylor.jpg', (err, data) => {
  console.log(Buffer.isBuffer(data));
  fs.writeFile('./taile.jpg', data, () => {})
  const anotherBuffer = Buffer.from(data).toString('base64');
  // console.log(anotherBuffer);
  const decodeImage = Buffer.from(anotherBuffer, 'base64')
  console.log('对比', Buffer.compare(data, decodeImage));
  fs.writeFile('taile1.jpg', decodeImage, () => {})
})