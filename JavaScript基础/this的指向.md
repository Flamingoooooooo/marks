# 如何正确判断this指向
* 简单来说，谁调用它，this就指向谁
* 规则：
  1. 全局环境中的this：浏览器环境下指向window，node环境指向空对象{}；无论是否在严格模式下
	1. new绑定的this：
    * 构造函数中没有返回function或object，则this指向新对象
		* 若构造函数返回的是funct或object，this就指向构造函数中返回的对象
	3. 显式绑定（用bind，call，apply）：this指向绑定的对象
		* 特殊情况：传入的第一个参数为undefined或null。则：
			* 非严格模式下：this指向window（浏览器环境）或global（node环境）
			* 严格模式：this为传入的值（undefined或null）
	4. 隐式绑定：函数的调用是在某个对象上触发的，即调用位置上存在上下文对象，典型为xxx.fn()
	5. 默认绑定：不能应用其他绑定规则时的默认规则，通常是独立函数调用
						非严格模式：global/window；严格模式：undefined
	6.箭头函数：没有自己的this，继承外层上下文的this