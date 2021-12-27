# 块级元素和内联元素
* 块级元素相对前面的内容会出现在新的一行，其后的内容会被挤到下一行
* 以block形式展现的块级元素不会被嵌套进内联元素，但可以嵌套在其他块级元素内
# html的头部
* 元数据meta：
    name指定元素类型，content指定内容
    link>元素经常位于文档的头部。这个link元素有2个属性，rel="stylesheet"表这是文档的样式表，而 href包含了样式表文件的路径：
    
    script 部分没必要非要放在文档头部；实际上，把它放在文档的尾部（/body标签之前）是一个更好的选择，这样可以确保在加载脚本之前浏览器已经解析了HTML内容（如果脚本加载某个不存在的元素，浏览器会报错）