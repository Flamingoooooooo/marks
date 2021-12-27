# 常见的浏览器API
1. 操作文档的API：DOM
2. 从服务器获取数据的API：XMLHttpRequest、Fetch
3. 绘制和操作图形：Canvas和WebGL
4. 客户端存储：Web Storage(localStorage,SessionStorage)
5. 设备、视频等
## 它们基于对象
## 它们会受到和JavaScript、其他Web技术同样的安全考虑，例如同源策略，有时它们会有额外的安全机制，例如仅支持HTTPS，因为他们传输敏感数据
## Ajax：XHR和Fetch
* XHR：new,open,responseType,onload,send五步
```JavaScript
//XHR
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';

request.onload = function() {
  poemDisplay.textContent = request.response;
};

request.send();
```
* Fetch基本是XHR的现代替代品
```JavaScript
//与XHR等价
fetch(url)//将url传递给fetch方法，相当于XHR的open方法,另外不需要等效的send方法
.then(function(response) {
  //fetch返回一个promise，这里用.then运行之后的代码，相当于XHR的onload
  response.text().then(function(text) {
    //当fetch返回的promise被解析时，这个函数会自动将响应从服务器传递给参数
    //这里获取响应并且调用text()方法，这基本上将响应作为原始文本返回，相当于XHR的responseType='text'
    poemDisplay.textContent = text;
  });
});
```
