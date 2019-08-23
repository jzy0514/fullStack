const inquirer = require('inquirer');
inquirer.prompt([{
  type: 'list ',
  name: 'age',
  message: '请输入信息',
  default: 18,
  choices:[89] [90]
},{
  type: 'rawlist',
  name: 'css',
  message: 'css---',
  choices: [{name: 'less', value: 'less-value', short: 'less-short'}, {name: 'sass', value: 'sass-value', short: 'sass-short'}]
}])
.then(res => {
  console.log(res);
})