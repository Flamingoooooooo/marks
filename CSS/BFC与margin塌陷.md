# 块级格式化上下文BFC
简单来说就是，BFC是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用BFC呢，BFC可以看做是一个CSS元素属性
## 如何触发BFC
* overflow: hidden
* display: inline-block
* position: absolute
* position: fixed
* display: table-cell
* display: flex
## BFC的规则
* BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列
* BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
* 垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
* 计算BFC的高度时，浮动元素也参与计算
## [BFC的用途](https://juejin.cn/post/6950082193632788493)
* float脱离文档流
  1.  父容器包裹的子元素使用float脱离文档流导致父元素没有被撑开，此时可以给父元素设置BFC属性
  2.  使用float的双栏布局，侧边栏使用float脱离文档流导致另一侧实际宽度=预定-侧边栏，可以把另一侧设置为BFC
* margin塌陷，合并
  * 塌陷：父子嵌套的元素垂直方向margin取最大值
  * 合并：兄弟相邻元素margin取最大值
## 其他解决margin塌陷的方法
* 一个设置margin，另一个用padding
* 直接计算好margin
