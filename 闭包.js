//在for循环中打印，实现间隔1s输出
for (var i = 0; i < 5; i++) {//方法三，把var改成let，let会形成块级作用域
  setTimeout(function () {
    console.log(i)//会输出五个5，在1s过后，所有的function都会去操作全局的i因此输出了五个5
  }, 1000)
}
console.log(i);//输出5，这是以为for循环没有块级作用域，i的声明都在全局作用域里
//方法一：
for (let i = 0; i < 5; i++) {
  setTimeout((function (i) {
    return function () {
      console.log(i);
    };
  })(i), 1000);
}

//方法二：
for (let i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);//使用立即执行函数IIFE，立即执行函数在声明时就立即被调用，使用的是被调用时的执行上下文
}

//获取多个元素并添加点击事件
let options = document.getElementsByClassName("xxx");
for (let i = 0; i < options.length; i++) {
  options[i].onclick = (function (i) {
    return function () {
      alert(i);
    }
  })(i);
}