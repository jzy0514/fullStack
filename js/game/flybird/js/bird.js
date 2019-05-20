var bird = {
    flyTimer: null, //小鸟飞翔的定时器
    wingTimer: null, //小脑翅膀摆动的定时器

    div:document.createElement("div"),
    showBird:function (parentObj) {
        this.div.style.width = "40px";
        this.div.style.height = "28px";
        this.div.style.backgroundImage = "url(./images/img/bird0.png)";
        this.div.style.backgroundRepeat = "no-repeat";
        this.div.style.position = "absolute";
        this.div.style.left = "50px";
        this.div.style.top = "200px";
        this.div.style.zIndex = "1";

        parentObj.appendChild(this.div);// 将小鸟插入到父容器中
    },

    fallSpeed: 0,// 小鸟下落的速度
    flyBird: function () {// 控制小鸟飞行下落的函数
        bird.flyTimer = setInterval(fly, 40)
        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px';
            if (bird.div.offsetTop < 0) {
                bird.fallSpeed = 2;// 用于控制小鸟不要飞出界面
            }
            if (bird.div.offsetTop >= 395) {
                bird.fallSpeed = 0;
                clearInterval(bird.flyTimer)// 掉到地面，清除飞翔额定时器
                clearInterval(bird.wingTimer)// 掉到地面，清除翅膀摆动的定时器
            }
            if (bird.fallSpeed > 12 ) {
                bird.fallSpeed = 12 // 小鸟下落的速度控制为12
            }
        }
    },
    wingWave: function () {// 控制小鸟翅膀煽动
        var up = ["url(images/img/up_bird_0.png)", "url(images/img/up_bird_1.png)"];
        var dowm = ["url(images/img/dowm_bird_0.png)", "url(images/img/dowm_bird_1.png)"];
        var i = 0, j = 0;
        function wing() {
            if (bird.fallSpeed > 0 ) {
                bird.div.style.backgroundImage = down[i++];
                if (i = 2) {i = 0}
            }
            if (bird.fallSpeed < 0 ) {
                bird.div.style.backgroundImage = up[j++];
                if (i = 2) {i = 0}
            }
        }
        setInterval(wing, 120)
    }
}