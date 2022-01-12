// https://juejin.cn/post/6856706569263677447
//axios有两种调用方式：
//axios.method()和axios(),这说明axios既是一个对象也是一个方法

//axios的请求和响应的拦截器
//在发送请求或接受响应时会先执行拦截器的代码，再真正发送请求(操作请求参数)或返回响应(操作response)
//同样，因为导出的是request方法，所以拦截器也要挂到request上
class InterceptorsManage {
  constructor() {
    this.handlers = [];
  }

  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected
    })
  }
}

class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorsManage,
      response: new InterceptorsManage
    }
  }

  request(config) {
    // 拦截器和请求组装队列
    let chain = [this.sendAjax.bind(this), undefined] // 成对出现的，失败回调暂时不处理

    // 请求拦截
    this.interceptors.request.handlers.forEach(interceptor => {
      chain.unshift(interceptor.fullfield, interceptor.rejected)
    })

    // 响应拦截
    this.interceptors.response.handlers.forEach(interceptor => {
      chain.push(interceptor.fullfield, interceptor.rejected)
    })

    // 执行队列，每次执行一对，并给promise赋最新的值
    let promise = Promise.resolve(config);
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise;
  }
  sendAjax() {
    return new Promise(resolve => {
      const { url = '', method = 'get', data = {} } = config;
      // 发送ajax请求
      console.log(config);
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
        console.log(xhr.responseText)
        resolve(xhr.responseText);
      };
      xhr.send(data);
    })
  }
}


//现在实现axios.method()式的调用，原理就是把method挂到axios的原型上
//但是在最后导出时，导出的是request方法，所以简单把方法挂到原型是不行的
//需要再把原型上的方法搬到request上
const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post'];
methodsArr.forEach(met => {
  Axios.prototype[met] = function () {
    console.log('执行' + met + '方法');
    // 处理单个方法
    if (['get', 'delete', 'head', 'options'].includes(met)) { // 2个参数(url[, config])
      return this.request({
        method: met,
        url: arguments[0],
        ...arguments[1] || {}
      })
    } else { // 3个参数(url[,data[,config]])
      return this.request({
        method: met,
        url: arguments[0],
        data: arguments[1] || {},
        ...arguments[2] || {}
      })
    }
  }
})

//这个工具对象把b的方法混入a中
const utils = {
  extend(a, b, context) {
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context);
        } else {
          a[key] = b[key]
        }
      }

    }
  }
}

//导出request方法
// 最终导出axios的方法，即实例的request方法
function CreateAxiosFn() {
  //创建一个对象并且把绑定后的request方法返回，实现axios()式的调用
  let axios = new Axios();
  let req = axios.request.bind(axios);
  //把原型上的方法搬到request上
  utils.extend(req, Axios.prototype, axios)
  utils.extend(req, axios)
  return req;
}

// 得到最后的全局变量axios
let axios = CreateAxiosFn();
