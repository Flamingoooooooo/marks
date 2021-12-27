# 先了解一下socket：
## 网络中的两个应用程序需要全双工通信（即双方可以同时向对方发送消息），用到的就是socket，它能够提供端对端通信，步骤：
* 客户端创建socket实例并且提供服务端的ip和端口，服务端创建另一个socket并绑定本地端口进行监听，然后客户端连接服务端，成功后双方就建立了一个端对端的tcp连接，实现了双向通信，此时就没有客户端服务端之分了
* socket其实不是一个新的协议，只是对tcp/ip通信机制的一种封装
# WebSockets
## 一种技术，用于浏览器和服务器间打开交互式通信会话
## 它借鉴了socket的思想，专门为web的客户端和服务端提供了全双工通信机制
## 同时 它是一种新的应用层协议，但依赖于http：
   * 双方建立连接时，也需要tcp握手，然后将http协议升级为websocket
   * 它颠覆了web开发的请求响应模式，实现了全双工，适合实时数据交互应用开发
### 即时通讯的其他方法：
   1. 定期轮询：客户端以时间间隔不断发出请求，浪费流量且给服务端很大压力
   2. sse(server-sent event)它允许服务端向客户端推送数据，和websocket功能差不多
   3. comet技术：
      * 基于长轮询的服务端推送技术：服务端收到请求后阻塞响应，直到数据更新才返回响应
      * 基于流式数据传输的长连接：通常是在页面中嵌入一个隐藏的iframe，src指向服务端地址，将页面上的数据更新操作封装为一个函数，把这个函数当做参数传递到服务端，在服务端。每当数据更新就返回对这个数据更新函数的调用，服务端就会再调用一次这个函数，使数据更新
## 使用它可以向服务器发送和接受数据，无需通过轮询服务器的方式获得响应
# WebSocket是一个构造函数，用来创建WebSocket对象
## 该对象用于创建和管理WebSocket连接，以及通过该连接发送和接受数据的API
* 常量:对应WebSocket对象的状态
   * WebSocket.CONNECTING=0
   * WebSocket.OPEN=1
   * WebSocket.CLOSING=2
   * WebSocket.CLOSED=3
* 属性（部分）：
   * WebSocket.onclose/onerror/onessage/onopen 分别用于指定连接的关闭/失败/接收到消息/成功 后的回调函数
   * WebSocket.protocol 服务器选择的下属协议
   * WebSocket.readyState 当前连接状态
   * WebSocket.url WebSocket的绝对路径

  
