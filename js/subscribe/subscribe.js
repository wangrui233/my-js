let _sub = function () {
  class Sub {
    constructor() {
      //创建事件池
      this.$pond = [];
    }
    //追加方法
    add(func) {
      let flag = this.$pond.some(item => { return item === func })
      !flag ? this.$pond.push(func) : null;
    }
    //移除方法
    remove(func) {
      let $pond = this.$pond;
      $pond.map((item, index) => {
        if (item === func) {
          $pond[index] = null;
          // $pond.splice(index, 1);
        }
      })
    }
    //启动执行
    fire(...args) {
      let $pond = this.$pond;
      for (var i = 0; i < $pond.length; i++) {
        if (typeof $pond[i] !== 'function') {
          $pond.splice(i, 1);
          i--;
          continue;
        }
        $pond[i].call(this, ...args);
      }
    }
  }
  return function subscribe() {
    return new Sub();
  }
}();