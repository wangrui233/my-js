var counter = 1
var div = document.getElementById('container')

function add () {
  div.innerHTML = '<h1>' + counter++ + '</h1>'
  console.log(this)
};

function debounce (func, wait) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
};

div.onmousemove = debounce(add, 1000)
