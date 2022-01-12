/**
 * 实现一个原生ajax
 * @param {*} params 
 */
function ajax(params) {
  params=params?params:{}
  params.data=paramas.data||{}
  //1.创建XMLHttpRequest对象
  let xhr
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest
  //兼容IE6
  else xhr = new ActiveXObject('Microsoft.XMLHTTP')

  //2.设置监听事件，在readyState改变时触发
  xhr.onreadystatechange = function () {
    //readyState有五个值
    //0.请求未初始化
    //1.服务器连接已建立
    //2.请求已接收
    //3.请求处理中
    //4.请求已完成，响应已就绪
    if (this.readyState === 4) {
      //status为响应的状态码
      if (this.status >= 200 && this.status < 300 || this.status === 304) {
        //判断接受的数据类型
        let response
        let type = xhr.getResponseHeader('Content-Type')
        if (type.indexOf('xml') === -1 && xhr.responseXML) {
          //Documet对象响应
          response = xhr.responseXML
        } else if (type = 'application/json') {
          //JSON格式
          response = JSON.parse(xhr.responseText)
        } else {
          //文本、字符串
          response = xhr.responseText
        }
        //执行成功的回调函数
        params.success(response)
      } else {
        //失败的回调
        params.error(this.status)
      }
    }
  }
  //连接和传输数据
  if(params.type=='GET'){
    //三个参数：方法，路径，是否异步，一般都是异步，其实还有两个:name&password,服务器需要时填
    xhr.open(paramas.type,params.url,params.async)
    xhr.send(null)
  }else{
    //post方法
    xhr.open(paramas.type,params.url,params.async)
    //设置请求头,application/json接收
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
    xhr.send(paramas.data)
  }
}