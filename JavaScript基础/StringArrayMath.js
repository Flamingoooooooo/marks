let obj;
//String的常用方法
//1.返回指定索引处的单个字符
obj.charAt(n);
//2.返回某个字符在字符串中首次出现的索引
obj.indexOf(str,start);//start可选，开始检索的位置
//3.把字符串分割为数组并返回
obj.split(separator,limit);//separator表示在哪分割，limit可选，为分割的次数
//4.提取两个索引之间的内容
obj.substring(start,end);//end可选，不填直接到结尾
//5.抽取从指定索引开始的指定长度内容
obj.substr(start,length);//length可选，不填直接到结尾
//6.将指定字符替换成另一字符，不改变原有字符串，返回新的字符串
obj.replace(oldstr,newstr);

//Math的常用方法
//1.向上取整
Math.ceil(n);
//2.向下取整
Math.floor(n);
//3.四舍五入
Math.round(n);
//4.随机
Math.random();
//5.max和min；
Math.max(x1,x2,xn);//若参数中有NaN或不能转换成数字的值，就返回NaN

//Array的常用方法
//1.连接两个及以上数组
obj.concat(arr,arr)
//2.把数组中的所有元素放入一个字符串,不改变原数组
obj.join(str);//str可选，为指定的分隔符，默认为逗号
//3.倒序，会改变原有数组
obj.reverse();
//4.返回两个索引值之间的子数组
obj.slice(start,end);//end可选，默认为末尾，如果end为负数，那么它规定的是从数组尾部开始算起的元素
//5.排序
obj.sort(fn);//fn可选，默认按编码顺序排序
//fn返回的值为负数或0时，不调换顺序，大于0调换顺序
//6.添加删除
obj.splice(index,length,x1,x2,xn);//删除从index开始的length个元素，并用x1...xn替换
//7.遍历
obj.map(fn,thisValue);//按照顺序依次使用fn处理数组内的元素并返回处理后的新数组，不改变原数组
//thisValue可选，回调时作为this的值
//fn的三个参数：currentValue：当前元素值 index：可选，当前索引 arr:可选，当前元素属于的数组
//8.调用每个元素并传递给回调函数
obj.forEach(fn);//fn同map
//9.reduce,用一个函数作为累加器，把数组从头开始最终缩减为一个值
obj.reduce(fn,initialValue);
//fn四个参数：上次调用回调返回的值（或initialValue）、当前处理的值，当前的索引，调用的数组
//若不设置initialValue，会把数组第一个值当做初始值往后操作（有的话时初始值和第一个值开始往后）
//10.过滤
obj.filter(fn,thisValue);//遍历数组过滤掉不符合fn条件的元素，不会改变原数组，返回新数组

