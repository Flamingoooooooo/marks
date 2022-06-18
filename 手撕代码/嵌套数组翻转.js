function solution(arr){
  //先扁平化
  arr=arr.flat(Infinity).reverse().slice(1)
  arr[arr.length-1]=[arr[arr.length-1],null]
  for(let i=arr.length-2;i>=0;i--){
    arr[i]=[arr[i],arr[i+1]]
  }
  return arr[0]
}
let arr=[1, [2, [3, [4, [5, [6, [7, [8, [9, [10, [11, null]]]]]]]]]]]
console.log(solution(arr))

function reverse(arr){
  let temp=[]
  function handle(arr){
    temp.push(arr[0])
    if(arr[1]){
      handle(arr[1])
    }
  }
  
  function res(arr){
    arr[0]=temp.pop()
    if(arr[1]){
      res(arr[1])
    }
  }
  handle(arr)
  res(arr)
  return arr
}