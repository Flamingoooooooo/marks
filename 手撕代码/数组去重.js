//1.双循环去重，对象和Nan不去重，
//2.indexOf去重，对象不去重，Nan会被忽略掉，
//3.排序后去重，对象和Nan不去重，
//4.利用对象属性去重，全部去重
//5.ES6set和解构赋值/Array.from，对象不去重，Nan去重
[...new Set(arr)]
Array.from(new Set(arr))
//手写一个map/set
//区别：map.set等价于set.add，map多一个get方法
//weakMap,weakSet只能存储对象，并且垃圾回收机制不考虑weak对对象的引用，该回收直接回收
function mySet(arr=[]){
  let items={}
  this.size=0;
  arr.forEach((val)=>{
    this.add(val)
  })
}
//不希望被继承的函数应该写到构造函数中作为方法，这里为了方便看写到原型链上
//has方法
mySet.prototype.has=function(val){
  return items.hasOwnProperty(val)
}
//add
mySet.prototype.add=function(val){
  if(this.has(val))return false
  items[val]=val
  this.size++
  return true
}
//delete
mySet.prototype.delete=function(val){
  if(this.has(val)){
    delete items[val]
    this.size--
    return true
  }
}
//clear
mySet.prototype.clear=function(){
  items={}
  this.size=0
}
//遍历方法：
//keys
mySet.prototype.keys=function(){
  return Object.keys(items)
}
//values
mySet.prototype.values=function(){
  return Object.values(items)
}
//forEach方法
mySet.prototype.forEach=function(fn,context=this){
  for(let i=0;i<this.size;i++){
    let item=Object.keys(items)[i]
    fn.call(context,item,item,items)
  }
}
//set还有交集，并集，差集方法：
//并集：
mySet.prototype.union=function(other){
  let union=new mySet([...this.items])
  let values=other.values()
  values.forEach(e=>{
      union.add(e)
  })
  return union
}
//交集：
mySet.prototype.intersect=function(other){
  let intersect=new mySet()
  let values=this.values()
  values.forEach(e=>{
    if(other.has(e)){
      intersect.add(e)
    }
  })
  return intersect
}
//差集:A-B定义为存在于A中但不存在于B中的元素
mySet.prototype.difference=function(other){
  let difference=new mySet()
  let values=this.values()
  values.forEach(e=>{
    if(!other.has(e)){
      difference.add(e)
    }
  })
  return difference
}