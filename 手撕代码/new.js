function myNew(){
  //创建新对象
  let obj=new Object();
  //将第一个参数（this）保存为func，其他参数保存到args
  let [func,...args] = [...arguments];
  //链接原型
  obj._proto_=func.prototype;
  //用对象obj调用func函数
  let result = func.call(obj,...args);
  //这里是模拟真正new的实现，若返回构造函数返回别的对象，就照常返回，否则都返回这个被创建的result对象
  if(result && (typeof(result) === "object" || typeof(result)==="Fuction")){
    return result;
  }
  return obj;
}

function create(func,...args){
  let obj={}
  obj.__proto__=func.prototype
  let result=func.call(func,...args)
  if(result&&(typeof result==='Object'||typeof result==='Function')){
    return result
  }
  return obj
}