# 1.外链文件位置的相关细节：
## 外链css放在头部：
外链css在何处不影响html解析，但影响html渲染
* 放在尾部，html会先显示，但阻塞行内css渲染
* 放在头部，css下载解析和html解析同步进行，在尾部会有额外时间解析css，会先渲染出一个没有样式的页面，css加载完再渲染一个有样式的
## script为什么放在尾部
浏览器解析到script会立即下载执行，中断html的解析(这时因为dom还没加载完成，而js可能会操作dom)，把网页渲染的控制权交给js引擎，若标签引用外部脚本，就下载脚本，否则直接执行，执行完毕后把控制权交给渲染引擎，继续解析html
## defer和async的异同：
* 都仅对外部脚本有效，对内置和动态生成的不起作用
### 不同：
* async一旦加载完成就执行，defer会再dom加载完成([DOMContentLoaded]事件)时执行
* 若有多个脚本文件，async不保证执行顺序，defer会按照顺序，因此脚本间有依赖关系时，用defer，无关用async，两个一起用defer会无效，浏览器行为由async决定
### 解析过程
浏览器开始解析html->发现带有defer/async标签的script->继续解析，并行下载脚本
async->暂停html的解析，开始执行下载的脚本->执行完毕继续解析html
defer->继续解析，html->html解析完毕，执行脚本
## 带有defer/async的script标签和外链css有要求吗
js的执行依赖于css，css样式全部下载完成才执行js，所以没有要求
## DOMContentLoaded和window.onload的区别
前者在html被完全加载时触发，后者在页面全部加载完成时触发，包括依赖的样式，图片，异步js等
