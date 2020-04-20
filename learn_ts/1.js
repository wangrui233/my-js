// interface Person {
//     firstName: string;
//     lastName: string;
// };
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// };
// let user = {
//     firstName: 'Tony',
//     lastName: 'Stark'
// };
// console.log(greeter(user));
// class Student {
//     fullName: string;
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return 'Hello, ' + person.firstName + " " + person.lastName;
// }
// let user = new Student("Jane", "N.", "User");
// console.log(greeter(user))
// Tuple
// let x: [string, number];
// x = ["text", 10];
// console.log(x[0].substr(1));
//enum
// enum color { green = 10, yellow = 8, pink };
// let g: color = color.green;
// let y: color = color.yellow;
// let p: string = color[8];
// console.log(g, y, p);
//toFixed
// let notSure: number ;
// notSure = 3.256;
// console.log(notSure.toFixed(2));
//类型断言
// let someValue: any;
// someValue = '123fdgfdg';
// let val: number = (<string>someValue).length;
// console.log(val);
var setUpperCase = function (name) { return name.toUpperCase(); };
setUpperCase('string');
