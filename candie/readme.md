<<<<<<< HEAD
fillter： blur（） 在设置图像的模糊度
fillter： contrast（） 设置图像的对比度
filter: grayscale()  设置灰度



1. mixin 与函数的区别
    mixin 是一段样式的封装， 可以在引用的地方服用 stylus 使用的最多的
    函数 有返回值 random(min， max)
2. stylus 内置的函数库
    floor math(0, 'random')
    unit(XXX, 'px')
3. 200个元素    stylus for
    for num 1..200
        .g-ball:nth-child({num})
            $width = random(0, 40)
            width unit($width, 'px')
4. filter: contrast(20)
    mix-blend-mode screen;<!-- 颜色的混合 -->
=======
fillter： blur（） 在设置图像的模糊度
fillter： contrast（） 设置图像的对比度
filter: grayscale()  设置灰度



1. mixin 与函数的区别
    mixin 是一段样式的封装， 可以在引用的地方服用 stylus 使用的最多的
    函数 有返回值 random(min， max)
2. stylus 内置的函数库
    floor math(0, 'random')
    unit(XXX, 'px')
3. 200个元素    stylus for
    for num 1..200
        .g-ball:nth-child({num})
            $width = random(0, 40)
            width unit($width, 'px')
4. filter: contrast(20)
    mix-blend-mode screen;<!-- 颜色的混合 -->
>>>>>>> b1290998600ba17f13ae4a11504b2e581e126533
