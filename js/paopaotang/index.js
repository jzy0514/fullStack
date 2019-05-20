// Player类, 构造函数
"use strict";
function Player(name) {
    // constructor
    // 全局 || 指向的对象
    console.log(this);
    this.name = name;
    this.enemy = null;
}
// js 类的方法要定义在prototyoe上
Player.prototype.win = function () {
    console.log(this.name + "win");
}
Player.prototype.lose = function () {
    console.log(this.name + "lose");
}
// Player("狗蛋") // 普通函数调用
var Player1 = new Player("狗蛋");
// var Player2 = new Player("小怪");
// console.log(Player1.name);
// win函数，作为对象的方法被调用
// this会指向对象本身

Player1.win();
var Player2 = new Player("小怪");
Player1.enemy = Player2;
Player2.enemy = Player1;
Player2.lose();