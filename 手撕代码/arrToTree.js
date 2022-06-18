//递归实现
const getChild=(data,result,pid)=>{
  for(const item of data){
    if(item.pid===pid){
      const newItem={...item,children:[]}
      result.push(newItem)
      getChild(data,newItem.children,item.id)
    }
  }
}
const arrayToTree=(data,pid)=>{
  const result=[]
  getChild(data,result,pid)
  return result
}