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

function sum(...args){
  if(args.length>=2)return args[1]+args[0]
  return function(){
    return args[0]+arguments[0]
  }
}

const curry=(fn,...args)=>{
  args>=fn.length?fn(...args):(...Args)=>curry(fn,...args,...Args)
}
function add(){
  let args=[...arguments]
  const curry=function(){
    args=[...args,...arguments]
    return curry
  }
  curry.toString=function(){
    return args.reduce((a,b)=>a+b)
  }
  return curry
}
