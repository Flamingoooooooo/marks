客户使用https url访问服务器，则要求web 服务器建立ssl链接。

web服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。

客户端和web服务器端开始协商SSL链接的安全等级，也就是加密等级。

客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。

web服务器通过自己的私钥解密出会话密钥。

web服务器通过会话密钥加密与客户端之间的通信。



* http的传输：浏览器明文传输到浏览器。在中间路由会被监听者获取到传输的信息，可能会被篡改，不安全
* 于是，内容需要加密，如果有密钥给数据加密，就可以只让浏览器和服务器得到正确的数据，不会被监听者拿到原文，
* 但是问题在于，如何确定这把钥匙，在没有密钥的情况下，需要把密钥通知到双方而不被监听者获取，因为对数据加密需要同一把钥匙，而二者的首次同心必定是明文的，于是对称加密行不通
* 非对称加密：浏览器生成通信密钥，并且使用服务器的公钥加密，然后传给服务器，服务器用自己的公钥解密得到通信密钥，二者通过该通信密钥进行通信，只有首次是非对称加密，之后直接对称加密，效率很高
* 但是！公钥可能会被篡改：服务器把公钥传输给浏览器时，中间者拦截这个公钥，然后把自己的公钥给浏览器，浏览器实际上拿到的的是中间者的公钥，然后用该公钥加密密钥，结果中间者用自己的私钥拿到了密钥，于是可以对数据篡改
* 于是！引入ca机构，ca机构会把服务器的一系列数据做成数字证书，制作完成后，ca会用自己的私钥加密然后发给服务器，浏览器访问时，服务器会把这个加密了的证书给浏览器，浏览器用ca的公钥解密，得到证书，证书里当然有服务器的公钥。
* 当存在中间人时，浏览器解密出来的证书会和自己请求的域名对不上，保证了数据安全
