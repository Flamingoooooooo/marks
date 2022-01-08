# [new](../手撕代码/new.js)和[Object.create](../手撕代码/ObjectCreate.js)的区别
* new中用call方法调用了构造函数，也链接了原型，因此对象继承了类的属性和原型
* Object.create没有调用构造函数，只链接了原型，因此没有继承类的属性,只继承了原型
* 其他不同点：new必须以function定义，Object.create可以用function和object