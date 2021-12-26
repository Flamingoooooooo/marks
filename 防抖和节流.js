//防抖函数 延迟防抖
function debounce(func,delay){
  let timer;
  return function(){
    let context=this;//保存func的词法环境，如果不保存，直接执行func，return的函数会指向window，而func应该是指向func调用者的
    let args=arguments;
    clearTimeout(timer);//清除延时
    timer = setTimeout(() => {
      func.apply(context,args);//调用func函数
    }, delay);
  }
}

//节流函数 方法一：前缘节流
function throttle(func,delay){
  let timer;
  return function(){
    let context=this;
    let args=arguments;
    if(timer){
      return;//如果timer存在，说明现在已有函数在等待中了
    }
    timer = setTimeout(() => {
      func.apply(context,args);
      timer = null;//不需要clearTimeOut，直接清空timer
    }, delay);//设置timer在delay之后执行，在执行前这段时间里，timer不为null，函数无法执行，直接被return了
  }
}

//方法二：Date：
function throttle2(func,delay){
  let pre=0;
  return function(){
    let now=new Date;
    let context=this;
    let args=arguments;
    if(now-pre>delay){
      func.apply(context,args);
      pre=now;
    }
  }
}