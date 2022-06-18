function deepCopy(obj){
  let newObj={};
  for(key in obj){
    if(typeof obj[key]=='object'){
      newObj[key]=deepCopy(key);
    }else{
      newObj[key]=obj[key];
    }
  }
  return newObj;
}

//乞丐版
JSON.parse(JSON.stringify(obj))
//完整版,
//1、数组会被拷贝成对象
//2.函数本质上来说，不应该有深拷贝的
//3.forin会遍历原型上的属性，应该用hasownproperty区分
function deepClone(obj){
  if(obj instanceof Object){
    let res=obj instanceof Array?[]:{}
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        res[key]=deepClone(obj[key])
      }
    }
    return res
  }else{
    return obj
  }
}
