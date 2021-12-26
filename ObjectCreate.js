Object.myCreate=function(prototype,properties){
  let F=function(){}//创建一个构造器
  F.prototype=prototype;//让该构造器指向prototype
  if(properties){
    Object.defineProperties(F,properties);
  }
  return new F()//返回一个新对象，该对象是F的实例，
              //通过原型链链接到prototype，
              //可以使用prototype的属性和方法，
              //但因为没有使用prototype的构造器，
              //没有继承到prototype构造器里的属性和方法
}