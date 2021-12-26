function ajaxPromise(){
  let promise=new Promise((resolve,reject)=>{
    let xhr;//第一步：创建XMLHttpRequest对象
    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded")//设置请求头
    if(window.XMLHttpRequest){ 
      //IE7+,Chrome,Firefox,Safari,Opera执行此代码 
      xhr=new XMLHttpRequest;
    }else{
      //IE5,IE6执行该代码
      xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open('get','url',true);//第二步：创建http请求
    xhr.onreadystatechange=()=>{//第三步：设置响应http请求状态变化的函数
      if(xhr.readyState===4){
        if(xhr.status>=200&&xhr.status<300||xhr.status===304){
          resolve(xhr.responseURL);//第五步，获取异步调用返回的数据
        }else{
          reject(new Error(xhr.statusText));
        }
      }
    }
    xhr.send(null);//第四步：发送http请求
  });
  return promise;
}

//调用：例子
const button=document.getElementById('a');
const image=document.getElementById('img');
button.addEventLinsenner('click',()=>{
  ajaxPromise()
  .then(responseURL=>{
    image.src=responseURL;//第六步，使用JavaScript和DOM实现局部刷新
  })
  .catch(statusText=>{
    console.log(statusText);
  })
})
// 注意点：
// 第一步：xhr是一个构造函数
// 第二步：open函数的五个参数：1.method：请求方式
//                           2.url：文件在服务器上的位置，相对或绝对
//                           3.async：同步或异步（true），一般使用异步防止阻塞，除非测试网页
//         异步时，脚本会在send方法之后继续执行，而不等待来自服务器的响应
//                           4&5.name和password：服务器需要时填
// 第三步：五种请求状态：0.请求未初始化
//                     1.服务器连接已建立
//                     2.请求已接收
//                     3.请求处理中
//                     4.请求已完成，响应已就绪
//         status响应状态码：200.OK
//                          304：该资源在上次请求之后没有修改，说明在浏览器缓存里有
//                          403：（禁止）服务器拒绝请求
//                          404：（未找到）服务器找不到请求的网页
//                          408：请求超时
//                          500：服务器内部错误
// 第四步：send方法post请求时才使用字符串参数，否则不带参数
//       另外，post请求要设置请求头的格式内容。