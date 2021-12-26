function curry(fn,argsArr){
  return function(){
      // arguments为收到的不定参数 
      // fn(1,2)(3) fn(1,2,3) 参数个数不固定 所以用arguments去取参数
      // arguments是伪数组 要转换成真数组
      var args = [...arguments];
      // 非首次调用 第一次不会进入
      if(argsArr){
          // 收集参数 合并数组
          args=[...args,...argsArr]
      }
      //3. 新函数接受参数长度 === 接收的那个函数参数的长度时   执行接受的函数
      if(args.length===fn.length){
          return fn(...args)
      }
      //4. 新函数接受参数长度  !==  接收的那个函数参数的长度时   返回本身函数
      // 调用时传入收到的函数和保存的参数数组 做递归 向数组里记录收到的参数
      return curry(fn,args)
  }
}
function sum(a,b,c){
  return a+b+c;
}
let fn=curry(sum);
let a1=fn(1);
console.log(a1);
let a2=a1(2);
console.log(a2);
let a3=a2(2);
console.log(a3);