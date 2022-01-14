//https://juejin.cn/post/6945319439772434469
//定义三种状态
const PENDING = 'pending'
const FULFILLED = 'resolved'
const REJECTED = 'rejected'

class myPromise {
  constructor(excutor) {
    //excutor是执行器，进入会立即执行
    excutor(this.resolve, this.reject)
  }
  //状态初始为pending
  status = PENDING
  //保存resolve和reject的值
  value = null
  reason = null
  //为了实现异步逻辑，要把回调存起来，then方法可以调用多次，所以回调应该是一个队列
  onFulfilledCallbacks = []
  onRejectedCallbacks = []
  //使用箭头函数是为了避免this指向window
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      //判断是否有回调，有就调用
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value)
      }

    }
  }
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason)
      }
    }
  }
  //then方法
  then(onFulfilled, onRejected) {
    //为了实现then的链式调用，直接把这些代码用promise包起来返回
    const promise = new myPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        console.log(this)
        const x = onFulfilled(this.value)
        resolvePromise(x, resolve, reject)
      } else if (this.status === REJECTED) {
        onRejected(this.reason)
      } else {
        this.onFulfilledCallback.push(onFulfilled)
        this.onRejectedCallback.push(onRejected)
      }
    })
    return promise
  }
}
function resolvePromise(x, resolve, reject){
  //判断x是不是myPromise的实例
  if (x instanceof myPromise) {
    //执行x，调用then方法，目的是将其状态改为fulfilled或rejected
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}
//对外暴露类
module.exports = myPromise