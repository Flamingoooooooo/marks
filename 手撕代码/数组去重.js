//1.双循环去重
//2.indexOf去重
//3.排序后去重
//4.利用对象属性去重
//5.ES6set和解构赋值/Array.from
return [...new Set(arr)]
return Array.from(new Set(arr))