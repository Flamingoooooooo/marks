class PubSub{
  constructor(){
    this.list={}
  }
  //订阅
  subscribe(type,fn){
    if(!this.list[type]){
      //如果没有该类型事件，就添加该类型
      this.list[type]=[]
    }
    //有就直接加入队列
    this.list[type].push(fn)
  }
  //发布
  pulish(type,...args){
    let fns=this.list[type]
    if(!fns||fns.length===0){
      //若没有该类型的事件
      return false
    }
    //有则全部执行
    fns.forEach(fn=>{
      fn.apply(this,args)
    })
  }
  //取消订阅
  unsubscribe(type,fn){
    let fns=this.list[type]
    if(!fns)return false
    if(!fn){
      //没有传入fn，则把list中对应类型清空，即全部取消订阅
      fns && (fns.length=0)
    }else{
      fns.forEach((cb,index)=>{
        if(cb===fn)fns.splice(index,1)
      })
    }
  }
}
let event=new PubSub()
function cat() {
  console.log('一起喵喵喵');
}
function dog() {
  console.log('一起旺旺旺');
}

event.subscribe('pet', data => {
  console.log('接收数据');
  console.log(data);
});
event.subscribe('pet', cat);
event.subscribe('pet', dog);
// 取消dog方法的订阅
// event.unsubscribe('pet', dog);
// 发布
event.pulish('pet', ['二哈', '波斯猫']);
