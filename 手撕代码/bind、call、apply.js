Function.prototype.myBind=function(){
  //保存this
  var _this = this;

  var context = [].shift.call(arguments);//保存需要绑定的this上下文，取出第一个参数
  var args = [].slice.call(arguments);//剩下参数转为数组

  // console.log(_this,context,args)
  return function() {
    return _this.apply(context,[].concat.call(args,[].slice.call(arguments)))
  }
}

Function.prototype.myCall=function(context){
  //第一个参数为调用call方法的函数中this的指向，context是 想要执行.call()之前的函数 的对象
  var context=context || global;
  //将this保存到context的fn属性，保存的是.call()之前的、想要使用的函数
  context.fn=this;
  var arr=[];
  //复制参数数组到arr
  for(var i=0;i<arguments.length;i++){              
    arr.push("arguments[" + i + "]")
  }
  //执行this指向的函数，并返回结果
  var result=eval("context.fn(" + arr.toString() + ")")
  //销毁this
  delete context.fn;
  return result;
}

Function.prototype.myApply=function(context,arr){
  //保存this到context.fn中
  let context=context || global;
  context.fn=this;

  let result;
  if(!arr){
    //数组为空直接执行
    result=context.fn();
  }else{
    let args=[];
    for(let i=0;i<arr.length;i++){
      args.push("arr[" + i + "]")
    }
    result=eval("context.fn([" + args.toString() + "])")
  }
  //销毁this
  delete context.fn;
  return result;
}