
// 等待 2s 输出 resolve success
function Ctor(x) {
  this.x = x
}
Ctor.prototype.x = '12345'
const a = new Ctor(4)
a.x = undefined
console.log(a.x)
const b = new Ctor(5)
delete b.x
console.log(b.x)

new Promise(resolve => {
  console.log(1)
  setTimeout(() => {
    resolve()
  }, 0)
})
  .then(() => {
    console.log(4)
  })
  .then(() => {
    console.log(5)
  })
setTimeout(() => {
  console.log(2)
}, 0);
console.log(3)

var length = 10;
function fn() {
  return this.length + 1
};
var obj = {
  length: 5,
  test1() {
    return fn()
  }
}
console.log(obj.test1())
obj1.test2 = fn
console.log(obj.test1() === obj.test2())


const PENDING = 'PENDING'
const FULFILLED = 'FULFILLEDD'
const REJECTED = 'REJECTED'
class Commitment {
  constructor(func) {
    this.state = PENDING
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    try {
      func(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  resolve = (result) => {
    setTimeout(() => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.result = result
        this.resolveCallbacks.forEach(cb => {
          cb(this.result)
        })
      }
    })
  }
  reject = (result) => {
    setTimeout(() => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.result = result
        this.rejectCallbacks.forEach(cb => {
          cb(this.result)
        })
      }
    });

  }
  then(onFULFILLED, onREJECTED) {
    return new Commitment((resolve, reject) => {
      onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => { }
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { }
      if (this.state === FULFILLED) {
        setTimeout(() => {
          onFULFILLED(this.result)
        })

      }
      else if (this.state === REJECTED) {
        setTimeout(() => {
          onREJECTED(this.result)
        })
      } else {
        this.resolveCallbacks.push(onFULFILLED)
        this.rejectCallbacks.push(onREJECTED)
      }
    })
  }
}
