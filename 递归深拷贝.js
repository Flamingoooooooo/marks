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