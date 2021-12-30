# cookie
* HTTP 是无状态的协议（对于事务处理没有记忆能力，每次客户端和服务端会话完成时，服务端不会保存任何会话信息）
* 所以服务器与浏览器为了进行会话跟踪，就必须主动的去维护一个状态，这个状态用于告知服务端前后两个请求是否来自同一浏览器。而这个状态需要通过 cookie 或者 session 去实现。
* 不可跨域
## cookie的一些属性
1. name=value：键值对，设置名称和相应值
2. domian：域名
3. path：cookie在那个路径(路由)生效，默认/
4. maxAge
5. expires
6. secure：是否安全，默认false，为true时仅在https有效
7. httpOnly：设置该属性无法通过js读取，但能通过application手动修改，只能一定程度上防止xss

# session
* session 是另一种记录服务器和客户端会话状态的机制
* session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的cookie 中
* 认证的流程：
  1. 用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 Session
  2. 请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器
  3. 浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名
  4. 当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。

# cookie和session区别
* 安全性：Session 比 Cookie 安全，Session 是存储在服务器端的，Cookie 是存储在客户端的
* 存取值：Cookie 只支持存字符串数据，想要设置其他类型的数据，需要将其转换成字符串，Session 可以存任意数据类型
* 有效期：Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭（默认情况下）或者 Session 超时都会失效
* 存储容量：单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie

# Token
Token 是令牌，访问资源接口（API）时所需要的资源凭证
* 身份验证流程：
  1. 客户端使用用户名跟密码请求登录
  2. 服务端收到请求，验证用户名与密码
  3. 验证成功后，签发一个 token 并发送给客户端
  4. 客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里
  5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 token(放在header中)
  6. 服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据

# Token和session的区别
* Token 使服务端无状态化，不会存储会话信息。
* session认证只是把用户信息放到session里，而token提供的是认证授权，认证针对用户，授权针对app，目的是让app有权访问用户信息，token唯一，不可转移，如果用户数据和第三方共享，就用token

# JWT
JSON web token

# jwt和token异同
* 相同：
  1. 都是访问资源的令牌
  2. 都可以记录用户的信息
  3. 都是使服务端无状态化
  4. 都是只有验证成功后，客户端才能访问服务端上受保护的资源
* 不同：
  * Token：服务端验证客户端发送过来的 Token 时，还需要查询数据库获取用户信息，然后验证 Token 是否有效
  *  将 Token 和 Payload 加密后存储于客户端，服务端只需要使用密钥解密进行校验（校验也是 JWT 自己实现的）即可，不需要查询或者减少查询数据库，因为 JWT 自包含了用户信息和加密的数据

# 一些问题和应用场景
## cookie
* 因为存储在客户端，容易被客户端篡改，使用前需要验证合法性，不要存敏感数据
* 使用 httpOnly 在一定程度上提高安全性
* 减少 cookie 的体积
* cookie 无法跨域
* 移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token
## session
* 将 session 存储在服务器里面，当用户同时在线量比较多时，这些 session 会占据较多的内存，需要在服务端定期的去清理过期的 session
* 当网站采用集群部署的时候，多台 web 服务器之间如何做 session 共享的问题。session由单个服务器创建，但处理用户请求的服务器不一定是那个创建 session 的服务器，那么该服务器就无法拿到之前已经放入到 session 中的登录凭证之类的信息了
* 多应用共享时，需要在各个应用做好跨域处理
* session基于cookie，若浏览器禁止cookie，可以吧sessionID放在url后面
* 和cookie一样，移动端支持不好
## token
* 如果认为数据库存储 token 导致查询时间太长，可以选择放在内存当中
* token 完全由应用管理，所以它可以避开同源策略
* token 可以避免 CSRF 攻击(因为不需要 cookie 了)
* 移动端
* token和session并不冲突，如果需要存储会话信息可以一块用
## jwt
* 最大的优势是服务器不再需要存储 Session，使得服务器认证鉴权业务可以方便扩展。但这也是 JWT 最大的缺点：由于服务器不需要存储 Session 状态，因此使用过程中无法废弃某个 Token 或者更改 Token 的权限。也就是说一旦 JWT 签发了，到期之前就会始终有效，除非服务器部署额外的逻辑
* 包含认证信息，泄露后就获得了令牌的所有权限，因此有效期设置比较短，重要权限需要再次认证
* 适合一次性的命令认证，颁发一个有效期极短的 JWT，即使暴露了危险也很小，由于每次操作都会生成新的 JWT，因此也没必要保存 JWT，真正实现无状态
* 应该使用https

