//防抖，非立即执行
function debounce(func,delay){
  let timeout
  return function(){
    const context=this
    const args=[...arguments]
    if(timeout)clearTimeout(timeout)
    timeout=setTimeout(()=>{
      func.apply(context,args)
    },delay)
  }
}
//节流
function throttle(func,delay){
  let timeout
  return function(){
    let context=this
    let args=[...arguments]
    if(!timeout){
      setTimeout(()=>{
        timeout=null
        func.apply(context,args)
      },delay)
    }
  }
}
//时间戳版节流
function throttle2(func,delay){
  let pre=0
  return function(){
    let now=Date.now()
    let context=this
    let args=[...arguments]
    if(now-pre>=delay){
      func.apply(context,args)
      pre=now
    }
  }
}
