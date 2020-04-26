var counter1 = 1
var div1 = document.getElementById('container1')

function add() {
  div1.innerHTML = '<h1>' + counter1++ + '</h1>'
}

function debounce(func, delay, immediate = false) {
  let timeout, num = 10;
  return function () {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      if (!timeout) func.call(this, arguments)
      timeout = setTimeout(() => { timeout = null }, delay)
    } else {
      timeout = setTimeout(() => { func.call(this, arguments) }, delay)
    }
  }
}

div1.onmousemove = debounce(add, 1000, true)

