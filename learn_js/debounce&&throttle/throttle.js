var counter2 = 1
var div2 = document.getElementById('container2')

function add() {
  div2.innerHTML = '<h1>' + counter2++ + '</h1>'
}

function throttle(func, delay) {
  //使用定时器
  let timeout
  return function () {
    if (!timeout) {
      timeout = setTimeout(() => { func.call(this, arguments), timeout = null }, delay)
    }
  }

  //使用时间戳
  /*let time = 0
  return function () {
    let _t = + new Date()
    let flag = (_t - time) >= delay
    if (flag) {
      func.call(this, arguments)
      time = _t
    }
  }*/

  //组合使用
  /*let timeout, _t = 0
  return function () {
    let now = + new Date();
    let flag = delay - (now - _t)
    if (flag <= 0 || flag > delay) {
      _t = now
      if (timeout) clearTimeout(timeout)
      timeout = null
      func.call(this, arguments)
    } else {
      if (!timeout) {
        timeout = setTimeout(
          () => {
            func.call(this, arguments)
            _t = + new Date()
            timeout = null
          },
          delay
        )
      }
    }
  }*/
}



div2.onmousemove = throttle(add, 1000)