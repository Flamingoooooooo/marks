# 块级盒子（block box）
## h,p
## 块级盒子的行为：
   * 在内联的方向上扩展并占据父容器在该方向上的所有空间，也就是说绝大部分情况下会和父级一样宽
   * 每个盒子都会换行
   * width和height属性起作用
   * 内边距（padding）外边距（margin）边框（border）会将其他元素从当前盒子周围推开
# 内联盒子（inline box）
## a.span，em，strong
## 内联盒子的行为：
   * 不会换行
   * width和height不起作用
   * 垂直方向上的内外边距和边框被应用但不会把其他内联盒子推开
   * 水平方向的内外边距和边框会被应用且会把其他内联盒子推开

# 通过设置display:inline/block设置盒子的外部显示类型
## 外部显示类型：决定盒子是块级还是内联
## 内部显示类型：决定盒子内部元素的布局

# 标准盒模型：margin,border,padding,content(由外向内)
# 替代盒模型：不加padding和border
# 速记属性：padding margin等：上右下左

# 改变盒子模型(实际上是改变盒子宽高的计算方式)：box-sizing
## content-box（标准盒模型）：盒子宽高是内容的宽高，不包括外部，也就是说，浏览器渲染的实际宽度将加上内边距和边框
## border-box（IE盒模型）：盒子宽高包括内容，内边距和边框

# 外边距折叠：两个外边距相接取较大值
## float和position：absolute的元素不会产生外边距折叠
# 特殊状态：display：inline-block
## 内联和块之间的状态，width和height会生效，且边框和内外边距会推开其他元素，但不会换行