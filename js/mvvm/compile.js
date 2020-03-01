class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    if (this.el) {
      //第一步 将节点放入内存中处理
      let fragment = this.node2fragment(this.el)
      //第二步 编译
      this.compile(fragment)
      //第三步 将节点放回页面上
      this.el.appendChild(fragment)
    }
  }

  /* 辅助方法 */

  //判断是不是dom节点
  isElementNode(node) {
    return node.nodeType === 1;
  }

  //判断一个属性是不是带指令的属性
  isDirective(name) {
    return name.startsWith('v-');
  }



  /* 核心方法 */

  //节点转成文档碎片
  node2fragment(el) {
    var fragment = document.createDocumentFragment();
    let firstChild;
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment;
  }

  //编译前进行分离，归类处理
  compile(fragment) {
    let childNodes = fragment.childNodes;
    Array.from(childNodes).forEach(node => {
      if (this.isElementNode(node)) {
        this.compileElement(node)
        this.compile(node)
      } else {
        this.compileText(node)
      }
    })
  }

  //编译元素
  compileElement(node) {
    let attrs = node.attributes;
    Array.from(attrs).forEach(attr => {
      let name = attr.name;
      if (this.isDirective(name)) {
        let expr = attr.value;
        let [, type] = name.split('-');
        CompileUtil[type](node, this.vm, expr);
      }
    })
  }

  //编译文本
  compileText(node) {
    let text = node.textContent;
    let reg = /\{\{([^}]+)\}\}/g;
    if (reg.test(text)) {
      CompileUtil['text'](node, this.vm, text);
    }
  }

}

//编译工具
CompileUtil = {
  getVal(vm, expr) {
    expr = expr.split('.');
    return expr.reduce((prev, next) => {
      return prev[next];
    }, vm.$data)
  },
  getTextVal(vm, expr) {
    return expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
      return this.getVal(vm, arguments[1])
    })
  },
  text(node, vm, expr) {
    let uT = this.updater['updateText'];
    let value = this.getTextVal(vm, expr);
    expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
      new Watcher(vm, arguments[1], () => {
        uT && uT(node, this.getTextVal(vm, expr));
      })
    })
    uT && uT(node, value);

  },
  setVal(vm, expr, value) {
    expr = expr.split('.')
    return expr.reduce((prev, next, currentIndex) => {
      if (currentIndex == expr.length - 1) {
        prev[next] = value;
      }
      return prev[next]
    }, vm.$data)
  },
  model(node, vm, expr) {
    let uM = this.updater['updateModel']
    new Watcher(vm, expr, () => {
      uM && uM(node, this.getVal(vm, expr))
    })
    node.addEventListener('input', (e) => {
      let newValue = e.target.value;
      this.setVal(vm, expr, newValue)
    })
    uM && uM(node, this.getVal(vm, expr))
  },
  updater: {
    updateText(node, value) {
      node.textContent = value;
    },
    updateModel(node, value) {
      node.value = value
    }
  }
}