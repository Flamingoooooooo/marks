# DOM的location对象
* 属性：
  1. href URL
  2. host 主机（域名）
  3. port 端口号
  4. pathname 路径
  5. search 参数
  6. hash 返回片段
  7. protocol 协议
* 方法：
  1. location.assign()跟href一样，用于重定向
	2. location.replace()替换当前页面，但不记录历史没法回退
	3. location.reload()重新加载页面，相当于按刷新，若参数为true，强制刷新
# DOM常见的操作方式
1. 查询
   * document.getElementsBy方法
2. 创建和插入
   * document.createElement创建元素节点
   * document.createAttribute创建属性节点
   * document.createTextNode创建文本节点
   * document.createComment创建注释节点
   * document.createDocumentFragment创建文档片段节点
   * parent.appendChild向节点的最后一个子节点后插入新节点
   * parent.insertBefore（new，old）向old之前插入
   * 还可以复制节点参数中true表示深拷贝
3. 更新
   * parentNode.replaceChild(new,old)替换节点
   * element.setAttribute修改属性
   * 还可以设置样式
4. 删除
   * parentNode.removeChild()删除子节点并返回
   * element.removeAttribute删除属性
   * element.removeAttributeNode删除并返回