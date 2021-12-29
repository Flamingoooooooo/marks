# http1.0和http1.1的区别
* 缓存处理：1.0用expires和if-modified-since，1.1中有etag，last-modified，cache-control的max-age等等缓存策略
* 1.1支持长连接，默认开启keep-alive
* 新增状态码，如410永久删除
* 带宽优化，允许请求资源的某个部分而不是整体，返回码206
* host头：
  * 在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名
  * 但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）
# http2.0
* 新的二进制格式，http1解析基于文本
* 多路复用，即连接共享，request带有id，一个连接会有多个request，tongguoid再归属到不同的服务单请求
* 服务端推送
* header压缩：header带有大量信息，而且重复发送，HTTP2.0使用encoder减少header大小，通讯双方各自cache一份header fields表，避免重复header的传输，又减小了需要传输的大小。
# http1.0
* 无状态：不跟踪和记录请求过的状态
* 无连接：每次请求都要创建连接