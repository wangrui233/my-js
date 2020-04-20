/* eslint-disable no-proto */
// const recast = require('recast')
// const log = console.log.bind(console)
// ES 5
// function P (x, y) {
//   this.x = x
//   this.y = y
// }
// P.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')'
// }
// var a = new P(1, 2)
// const res = a.toString()
// log(res)

// ES 6 class
// class P {
//   constructor(a, b, c, d, e, f, g) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;
//   }
//   toString() {
//     return '(' + this.a + ', ' + this.b + ')';
//   }
//   add() {
//     return this.c * this.d;
//   }
// }
// let a = new P(1, 2, 4, 6);
// console.log(a.add());

// ES 6 symbol
// let s = Symbol;
// class p {
//   constructor() {
//     this[s] = [];
//   }
//   push(element) {
//     return this[s].push(element);
//   }
// }
// let a = new p;
// console.log(a.push(3));

// call
// class person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   say() {
//     console.log('name: ' + name + ', age: ' + age);
//   }
// };
// function person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// function student(a, b, lesson) {
//   person.apply(this, arguments);
//   this.lesson = lesson;
// }
// let jack = new student('tom', 21, 'IT');

// this 指向
// var a = 7;
// var obj = {
//   a: 8,
//   b: "fps"
// };
// var f1 = {
//   a: 10,
//   b: {
//     a: 12,
//     fn: function () {
//       log("a", this.a)
//       log("this", this)
//     }
//   }
// };
// var f = f1.b.fn;
// f.bind(obj)();

// var point = {
//   x: 0,
//   y: 0,
//   moveTo: {
// var that = this;
// moveX: function (x) {
// this.x = x;
// console.log(this);
// },
// moveY: function (y) {
// this.y = y;
// console.log(this);
// }
// }
// }
// point.moveTo.moveX(3);
// point.moveTo.moveY(5);
// log(point.moveTo.x, point.moveTo.y);

// 构造函数的写法
// function Point (x, y) {
//   log(this)
//   this.x = x
//   this.y = y
//   this.moveTo = function (x, y) {
//     this.x = x
//     this.y = y
//     log(this.x)
//     log(this.y)
//   }
// };
// var p1 = new Point(3, 5)
// var p2 = {
//   x: 0,
//   y: 0
// }
// p1.moveTo.apply(p2, [1, 1])

// promise

// 1、异步
// class _p {
//   output() {
//     console.log("---模拟发送请求获取年龄---")
//     setTimeout(() => {
//       this.logRes({ age: 24 })
//     }, 4000);
//     console.log("---模拟接收到年龄---")
//   }
//   logRes(data) {
//     console.log(data)
//   }
// }
// let getAge = new _p;
// getAge.output();

// setTimeout(
//   () => {
//     console.log("1s");
//     setTimeout(() => {
//       console.log("2s")
//     }, 1000)
//   }, 1000
// )
// var wait1000 = new Promise(
//   function (resolve, reject) {
//     setTimeout(resolve, 1000);
//   }
// )
// function f1() {
//   console.log(4)
// }
// wait1000.then(
//   () => { console.log(2) }
// )
// wait1000.then(function () {
//   console.log('1s');
//   return wait1000;
// }).then(function () {
//   console.log('2s')
// })

// super
// function Point(x, y) {
//   this.x = x
//   this.y = y
// }
// Point.prototype.toString = function () {
//   log(this.x, this.y)
//   return '(' + this.x + '),(' + this.y + ')'
// }

// const x = new Point(3, 5)
// const res = x.toString()
// console.log(res)
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   toString() {
//     return '(' + this.x + '),(' + this.y + ')'
//   }
// }

// 闭包
// function outer () {
//   var a = 0
//   function inner (b) {
//     log('a+b:', a + b, 'a:', a, 'b:', b)
//     log('a:', a, '++a', ++a)
//   }
//   return inner
// }
// const closure1 = outer()
// const closure2 = outer()
// closure1(2)
// closure1(3)
// closure2(1)

// 简写
// var sayHello = name => console.log(`你好${name}！`)
// sayHello('jack')

// var volumn = (l, w = 3, h = 4) => (l * w * h)
// log(volumn(1, 2))

// const person = {
//   name: 'json',
//   age: 24,
//   class: 'english'
// }
// const { age, lesson, name } = person
// log(name, age, lesson)

// var mandatory = () => { throw new Error('Missing parameter!....') }
// var foo = (bar = mandatory()) => bar
// log(foo(11))

// AST
// var code =
//   `function add(a,b){
//     return a + b
//   }`
// const ast = recast.parse(code)
// const add = ast.program.body[0].type
// log(add)
// const add = ast.program.body.BlockStatement.body[0]
// log(add)

// const { variableDeclaration, variableDeclarator, functionExpression } = recast.types.builders
// ast.program.body[0] = variableDeclaration('const', [
//   variableDeclarator(add.id, functionExpression(
//     null, //Anonymize the function expression
//     add.params,
//     add.body
//   ))
// ])
// const output = recast.prettyPrint(ast, { tabWidth: 2 }).code
// log(output)
// log(output(1, 3))
// recast.run(function (ast, printSource) {
//   printSource(ast)
// })

// 函数参数是按值传递的
// function setName (obj) {
//   obj.name = 'wr'
// }
// var person = {}
// setName(person)
// log('person', person)

// function setName2 (obj) {
//   obj.name = 'wr'
//   obj = {}
//   obj.name = 'qop'
// }
// var person2 = {}
// setName2(person2)
// log('person2', person2)

// arguments是一个对象，是调用函数时，所有给函数传递的参数，可以在函数内用arguments直接获取
// function getParams (a, b) {
//   log(typeof arguments, arguments, a, b)
//   arguments[2] = {}
// }
// const obj = { name: 'jack' }
// getParams(2, false, obj, 'defa', null, undefined)
// log(obj)
// var obj2 = {
//   num: 123,
//   set: () => {
//     log(this.num)
//   }
//   // set: function () {
//   //   log(this.num)
//   // }
// }
// obj2.set()

// const http = require('http')
// http.createServer(function (req, res) {
//   res.writeHeader(200, { 'Content-Type': 'text/plain' })
//   res.write('Hello World')
//   res.end()
// }).listen(8080)

// const name = Symbol('a symbol string')
// log(typeof name)

// const F1 = function () {
//   this.a = 1
//   this.b = 2
// }

// function People (name, age) {
//   this.age = age
//   this.name = name
//   this.power = function () {
//     return this.age * 2
//   }
// }
// class SuperPeople extends People {
//   constructor (name, age) {
//     super(name, age)
//     this.age = age + 1
//   }

//   power () {
//     return this.age * 200
//   }
// }
// var nancy = new People('Nancy', 24)
// var monkey = new SuperPeople('monkey', 26)

// console.log(nancy)
// console.log(monkey)
