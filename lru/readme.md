<<<<<<< HEAD
LRU 缓存 最近最少使用原则
Least Recently Used
操作系统
 
node fs 硬盘, 内存 
内存精贵
 硬盘 用不完

内存时代吗的运行空间 空间有限的 2
存放变量  2 个
当第三个出现的时候？


<!-- 1 put(1)
2 put(2) 
3 放不下了           1和2要一个走 -->
[]  内存  length 2
    原则： 最近最少使用

1 put(1, 1)
2 put(2, 2)
3 get(1) 返回1 1最近使用 ，2最近最少使用
4 put(3, 3) 3进来了， 2就要丢掉(因为最近最少使用它)
5 get(2)  拿不到
6 put(4, 4) 4 3   ---1被丢了
7 get(1) 找不到   -1
8 get(3) 3
9 get(4) 4

- cache LRUCache
 get 
 set 

- 对象字面量有利于get set方法实现，
- 最近最少使用， JSON 搞不定
  数组可以，  [0] [length -1]
  在一头进行操作
  一半的工作交给数组， 一半的工作交给对象字面量
  让它们成为LRUCache的两个属性

- get set arr + obj 组织在 
LRUCache
  indexOf pop unshift splice 
  
=======
LRU 缓存 最近最少使用原则
Least Recently Used
操作系统
 
node fs 硬盘, 内存 
内存精贵
 硬盘 用不完

内存时代吗的运行空间 空间有限的 2
存放变量  2 个
当第三个出现的时候？


<!-- 1 put(1)
2 put(2) 
3 放不下了           1和2要一个走 -->
[]  内存  length 2
    原则： 最近最少使用

1 put(1, 1)
2 put(2, 2)
3 get(1) 返回1 1最近使用 ，2最近最少使用
4 put(3, 3) 3进来了， 2就要丢掉(因为最近最少使用它)
5 get(2)  拿不到
6 put(4, 4) 4 3   ---1被丢了
7 get(1) 找不到   -1
8 get(3) 3
9 get(4) 4

- cache LRUCache
 get 
 set 

- 对象字面量有利于get set方法实现，
- 最近最少使用， JSON 搞不定
  数组可以，  [0] [length -1]
  在一头进行操作
  一半的工作交给数组， 一半的工作交给对象字面量
  让它们成为LRUCache的两个属性

- get set arr + obj 组织在 
LRUCache
  indexOf pop unshift splice 
  
>>>>>>> b1290998600ba17f13ae4a11504b2e581e126533
