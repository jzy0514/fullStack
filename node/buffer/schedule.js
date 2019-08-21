var schedule = require('node-schedule');
// 月份是从0开始的0代表1月,如果是8月份则要写7
const date = new Date(2019, 7, 21, 16, 25, 0)
Schedule.scheduleJob(date, () =>{
  console.log('执行了');
})
// let rule = new Schedule.RecurrenceRule();
// rule.hour = 16;
// rule.minute = 29;
// let j = Schedule.scheduleJob(rule, function () {
//   console.log('执行了');
// })
