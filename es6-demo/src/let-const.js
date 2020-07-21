/**
 * let 和 const
 * 共同特点：
 * 1. 不允许重复声明
 * 2. 不存在变量提升
 * 3. 暂存死
 * 4. 只能在块级作用域内使用
 * 5. 声明后不能自动挂载到window上
 *
 * const特点
 * 1. 一旦声明不可改变
 * 2. 声明必须有值，不能为undefined
 * 3. 声明为引用类型时，属性的值可以改变
 */

// let a = "m";
// let a = "m";
// SyntaxError: Identifier 'a' has already been declared

/* 

//暂存死区
if (true) {
  a = 5;
  let a;
}

//只能在块级作用域内使用
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); //ReferenceError: i is not defined
*/

/*
let a = 10;
const b = 20;
b = 30; //TypeError: Assignment to constant variable.
console.log(a, b);
*/

//const c;  //SyntaxError: Missing initializer in const declaration
//let c; //undefined

const d = {};
d.cc = "cc";
