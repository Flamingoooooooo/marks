/**
 * call
 * @param {*} context 
 * @returns 
 */
Function.prototype.myCall = function (context,...argArrays) {
  //简单判断context为false是不行的，因为空字符串，布尔类型，Number0也是false
  if (context === undefined || context === null) context = window
  else context = Object(context)
  //给context加上目标方法，使用symnol防止和原有属性冲突
  const method = Symbol('targetMethod')
  context[method] = this
  //执行，并删除目标方法
  let res = context.method(...argArrays)
  delete context[method]
  return res
}

/**
 * apply
 * @param {*} context 
 * @returns 
 */
Function.prototype.myApply = function (context) {
  //apply和call只有参数处理的不同
  if (context === undefined || context === null) context = window
  else context = Object(context)
  const method = Symbol('targetMethod')
  context[method] = this
  //apply的第二个参数应该为数组或类数组
  let res
  if (!Array.isArray(arguments[1]) && !isArrayLike(arguments[1])) {
    throw new TypeError('第二个参数只能为数组或类数组！')
  } else {
    res = context[method]([...arguments[1]])
  }
  delete context[method]
  return res
}
// JavaScript权威指南判断是否为类数组对象
function isArrayLike(o) {
  if (o &&                                    // o不是null、undefined等
    typeof o === 'object' &&                // o是对象
    isFinite(o.length) &&                   // o.length是有限数值
    o.length >= 0 &&                        // o.length为非负值
    o.length === Math.floor(o.length) &&    // o.length是整数
    o.length < 4294967296)                  // o.length < 2^32
    return true
  else
    return false
}
/**
 * bind方法，还不熟，需要继续练习
 * @param {*} objThis 
 * @param  {...any} params 
 * @returns 
 */
Function.prototype.myBind=function(objThis,...params){
  //存储源函数
  const func=this
  //secondParamas为处理二次传参
  let bindFunc=function(...secondParamas){
    //判断是否是bindFunc的实例，也就是说，判断是否是通过new调用的
    const isNew=this instanceof bindFunc
    //new调用就绑定到this上，否则绑定到objThis上
    const context=isNew?this:Object(objThis)
    //返回执行结果
    return func.call(context,...params,...secondParamas)
  }
  if(func.prototype){
    //赋值原函数的prototype给bindFunc
    bindFunc.prototype=Object.create(func.prototype)
  }
  return bindFunc
}