//快排
function quickSort(arr){
  if(arr.length<=1){return arr}//递归到只有一个元素时返回
  let left=[];
  let right=[];
  let index=Math.floor(arr.length/2);//取一个基准并记下它的索引，大的存右边小的存左边
  let flag=arr.splice(index,1)[0];//要把基准从数组中取出来，不然它会参与排序，会乱套
  for(let i=0;i<arr.length;i++){
    if(arr[i]<flag){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(flag,quickSort(right))
}

function sort(arr){
  if(arr.length===1)return arr
  let left=[]
  let right=[]
  let index=Math.floor(arr.length/2)
  let flag=arr.splice(index,1)[0]
  for(let i=0;i<arr.length;i++){
    if(arr[i]<flag)left.push(arr[i])
    else right.push(arr[i])
  }
  return sort(left).concat(flag,sort(right))
}


//插入排序
function insertSort(arr){
  let index;
  for(let i=0;i<arr.length;i++){
    index=i;
    for(let j=i-1;j>=0;j--){
      if(arr[i]<arr[j]){
        index=j;//将arr[i]和之前的元素比较，找到比它小的值时退出循环，此时索引为找到的数的右边一个
      }
    }
    arr.splice(index,0,arr[i]);//用到splice的插入功能，在index后插入arr[i]
    arr.splice(i+1,1);//用到删除功能，因为在arr[i]之前插入，原先arr[i]向右移了一位，所以删除i+1处的一个值
  }
  return arr;
}
