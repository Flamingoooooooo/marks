//1.原型链继承
function Dad(){}
function Son(){}
Son.prototype=new Dad;//继承
Son.prototype.constructor=Son
//给子类添加方法要在继承之后
let son=new Son;

//2.构造函数继承
function Father(){}
function Daughter(){
  Father.call(this);//如果父类可以需要接受参数，这里也可以直接传递
}
let daughter=new Daughter;

//3.组合继承
function Super(){}
function Sub(){
  Super.call(this);//一次
}
Sub.prototype=new Super;//两次
let obj=new Sub;
Sub.prototype.constructor=Sub;//修正构造函数指向
//给子类添加原型方法

//4.寄生组合继承
/*省略类的声明*/
let prototype=Object.create(Super.prototype);//create函数返回一个链接了super.prototype的对象
prototype.constructor=Sub;//让这个对象的构造器指向sub（修改构造函数指向）
Sub.prototype=prototype;//让这个对象成为sub的原型，该对象只继承了super的原型，没有继承super构造器里的属性
                        //在let obj=new Sub;时用call调用super的构造方法，继承了父类构造器中的属性，防止继承两次