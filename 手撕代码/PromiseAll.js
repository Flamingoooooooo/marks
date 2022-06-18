Promise.myAll=function(promises){
  return new Promise((resolve,reject)=>{
    let count=0
    let result=[]
    const len=promises.length
    if(len===0){
      return resolve(result)
    }

    promises.forEach((p,index) => {
      Promise.resolve(p).then(res=>{
        count++
        result[index]=res
        if(count===len){
          resolve(result)
        }
      }).catch(reject)
    });
  })
}

Promise.myRace=function(promises){
  return new Promise((resolve,reject)=>{
    promises.forEach(p=>{
      Promise.resolve(p).then(resolve).catch(reject)
    })
  })
}