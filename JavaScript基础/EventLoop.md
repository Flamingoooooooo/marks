# 宏任务和微任务
JavaScript中的任务被分为宏任务和微任务
## 宏任务
script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering
## 微任务
Process.nextTick（Node独有）、Promise、Object.observe(废弃)、MutationObserver
# 浏览器中的EventLoop
Javascript 有一个 main thread 主线程和 call-stack 调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行
## 同步任务和异步任务
Javascript单线程任务被分为同步任务和异步任务，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。
# 事件循环的进程模型
* 一开始整个脚本作为一个宏任务执行
* 执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
* 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完
* 执行浏览器UI线程的渲染工作
* 检查是否有Web Worker任务，有则执行
* 执行完本轮的宏任务，回到2，依此循环，直到宏任务和微任务队列都为空


