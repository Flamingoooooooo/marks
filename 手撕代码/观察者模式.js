//被观察者
class Subject{
  constructor(){
    //观察者队列
    this.observers=[]
  }
  //添加观察者
  add(observer){
    this.observers.push(observer)
  }
  //删除观察者
  remove(observer){
    let index=this.observers.findIndex(i=>i===observer)
    index>-1&&this.observers.splice(index,1)
  }
  //通知观察者
  notify(){
    for(let observer of this.observers){
      observer.update()
    }
  }
}

class Observer{
  constructor(name){
    this.name=name
  }
  update(){
    console.log("我被通知更新了，我是"+this.name)
  }
}
let subject=new Subject()
let obv1=new Observer('1')
let obv2=new Observer('2')
subject.add(obv1)
subject.add(obv2)
subject.notify()
