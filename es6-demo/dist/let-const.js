"use strict";

/**
 * let 和 const
 * 共同特点：
 * 1. 不允许重复声明
 * 2. 不存在变量提升
 * 3. 暂存死
 * 4. 只能在块级作用域内使用
 * 5. 声明后不能自动挂载到window上
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
var a = 10;
var b = 20;
console.log(a, b);