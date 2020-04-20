前言
WebSocket被广泛用于web的实时消息通信系统中。
 
它实现了浏览器与服务器全双工通信，将会替代基于http的ajax长轮询的拉取消息模式。
 
双向通信如何实现
先介绍下，TCP/IP参考模型

 
TCP是一个，相对可靠确保信息送达、按照顺序送达的中层信息传输协议，但性能比UDP较差。它负责两端主机建立会话。
我们的websocket处于应用层，也是基于TCP实现的。
TCP连接
采用TCP协议，在真正的读写操作之前，server与client之间必须建立一个连接。读写完成后，双方不再需要这个连接时，就可以释放这个连接。
TCP短连接
流程：client向server发起TCP连接请求，client向server发送消息，server回应client，然后一次读写就完成了。这时候client会发起close操作，连接关闭。
短连接的优点是：
管理起来比较简单，连接都是有用的连接，不需要额外的控制手段
HTTP1.0就是基于此实现的，他是是无状态的。浏览器和服务器每一次HTTP操作，就建立一次连接，但任务结束就中断连接。
TCP长连接：
流程：client向server发起连接，server接受client连接。双方建立连接，Client与server完成一次读写之后，它们之间的连接并不会主动关闭，用心跳保活。后续的读写操作会继续使用这个连接。
 
WebSocket就是基于TCP连接建立通讯的。
一旦WebSocket连接建立后，后续数据都以帧序列的形式传输。在客户端或Server端中断连接前，不需要客户端和服务端重新发起连接请求。
WebSocket建立连接
websocket与http同样建立于tcp传输协议之上，通过tcp传输层进行数据传输。
我们要使用websocket协议进行通信则首先要建立起websocket连接，这个连接的建立依赖于http。
 
发起握手：
每个WebSocket连接都始于一个HTTP请求。
具体来说，WebSocket协议在第一次握手连接时，通过HTTP协议在传送数据，但是比普通HTTP请求相比多了一些字段。
        GET /chat HTTP/1.1
        Host: server.example.com
        Upgrade: websocket
        Connection: Upgrade
        Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
        Origin: http://example.com
        Sec-WebSocket-Protocol: chat, superchat
        Sec-WebSocket-Version: 13
 
服务器响应：
根据特殊的请求头进行了特殊响应，首先101返回码表明本次连接的通信协议经过了转换并成功握手成功建立起了通信。
connection字段和upgrade字段则表明本次通信协议进行了升级转换，转换的是websocket协议。
服务器响应头如下
        HTTP/1.1 101 Switching Protocols
        Upgrade: websocket
        Connection: Upgrade
        Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
        Sec-WebSocket-Protocol: chat
 
建立了websocket连接后，只要客户端和服务器端任意一端不主动断开连接前，通信行为都是在一个持久连接上发起，后续数据与请求都通过帧序列的形式进行传输。
总结
HTTP 1.1也支持了长连接（PersistentConnection），在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，但仍然还是无状态的。
WebSocket设计上天生为HTTP增强通信，将会在即时IM通讯，游戏等领域会得到更广泛的利用
————————————————
版权声明：本文为CSDN博主「liuxiaoyi216」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/liuxiaoyi216/article/details/79630294