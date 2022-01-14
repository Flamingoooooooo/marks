// test.js

const MyPromise = require('./myPromise')
const promise = new MyPromise((resolve, reject) => {

    resolve('success')

})

function other () {
  return new MyPromise((resolve, reject) =>{
    resolve('other')
  })
}
promise.then(value => {
  console.log(1)
  console.log('resolve', value)
  return 3
}).then(1).then(1).then(value => {
  console.log(2)
  console.log('resolve', value)
})


// 等待 2s 输出 resolve success
