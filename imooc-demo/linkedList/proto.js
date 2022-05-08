const obj = {};
Object.prototype.x = "x"
const fun1 = () => {};
const arr = [];



// 原型链面试题
let foo = {};
let F= function () {};
Object.prototype.a = "value a"
Function.prototype.b = "value b"


console.log('%c 🍷 foo.a: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', foo.a);
console.log('%c 🥠 foo.b: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', foo.b);
console.log('%c 🥨 F.a: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', F.a);
console.log('%c 🍋 F.b: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', F.b);