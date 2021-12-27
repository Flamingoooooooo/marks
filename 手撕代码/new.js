function myNew(){
  //创建新对象
  let obj=new Object();
  //将第一个参数（this）保存为func，其他参数保存到args
  let [func,...args] = [...arguments];
  //链接原型
  obj._proto_=func.prototype;
  //用对象obj调用func函数
  let result = func.call(obj,...args);
  //？？？
  if(result && (typeof(result) === "object" || typeof(result)==="Fuction")){
    return result;
  }

  return obj;
}