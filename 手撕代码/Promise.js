const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class Commitment {
  constructor(func) {
    this.status = PENDING
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    //执行异常的错误处理：promise执行器中抛出异常会直接将状态改为rejected
    try {
      func(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  //使用箭头函数来确保this指向的是该Promise实例，或者在执行器里调用时使用bind绑定，否则resolve被调用时this不是Promsie实例
  resolve = (result) => {
    //resolve和reject应该是下一轮微任务，因此这里用settimeout模拟
    setTimeout(() => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.result = result
        this.resolveCallbacks.forEach(cb => {
          cb(result)
        })
      }
    })
  }
  reject = (result) => {
    setTimeout(() => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.result = result
        this.rejectCallbacks.forEach(cb => {
          cb(result)
        })
      }
    })
  }
  then(onFULFILLED, onREJECTED) {
    return new Commitment((resolve, reject) => {
      //then中可能不传函数，因此要进行判断
      onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => { }
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { }
      if (this.status === FULFILLED) {
        setTimeout(() => {
          onFULFILLED(this.result)
        })
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          onREJECTED(this.result)
        })
      } else {
        //处理异步，状态为pending时调用then方法，此时resolve和reject都没有值，因此需要数组存储
        this.resolveCallbacks.push(onFULFILLED)
        this.rejectCallbacks.push(onREJECTED)
      }
    })
  }
}
console.log('1')
let commitment = new Commitment((resolve, reject) => {
  console.log('2')
  setTimeout(() => {
    resolve('fulfilled')
    reject('rejected')
    console.log('4')
  });
})
commitment.then(
  result => console.log(result),
  result => console.log(result.message)
).then(
  console.log("result"),
  result => console.log(result.message)
)
console.log('3')