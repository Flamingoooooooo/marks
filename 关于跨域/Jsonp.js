function jsonp({url,params,callback}){
  return new Promise((resolve,reject)=>{
    let script=document.createElement('script')
    //给window加上callback这个函数
    window[callback]=function(data){
      resolve(data)
      document.removeChild(script)
    }
    //处理参数
    params={...params,callback}
    let arr=[]
    for(let key in params){
      arr.push(`${key}=${params[key]}`)
    }
    //访问url
    script.src=`${url}?${arr.join('&')}`
    document.appendChild('script')
  })
}

//调用jsonp
jsonp({
  url:'xxxxx',
  params:{xx:'xxx'},
  callback:'functionName'
}).then(data=>{
  //返回的是`${callback}(data)`，然后再前台执行挂在window上的callback函数
  console.log(data)
})