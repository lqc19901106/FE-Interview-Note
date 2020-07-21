# ES6 常见问题

## 1. let 和 const
- var声明存在变量提升；let、const不会。
- let和const声明只在块级作用域内部使用
- 同一作用域下let和const不能声明同名变量，而var可以
- var的声明会挂在到window上，let和const不会。
- 暂存死区

```js
var a = 100;
if(1){
    a = 10;
    //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，
    // 而这时，还未到声明时候，所以控制台Error:a is not defined
    let a = 1;
}
```
-  `const`对比`let`
    - 一旦声明必须赋值,不能使用null占位。
    - 声明后不能再修改
    - 如果声明的是复合类型数据，可以修改其属性

> 块级作用域（词法作用域）会在如下情况下创建：
> - 在一个函数内部
> - 在一个代码块（由一对花括号包裹）内部

```js
for (let i = 0; i < 10; i++) {
	process(items[i]);
}
// i 在此处不可访问，抛出错误
console.log(i);
```

## 2. 箭头函数和普通函数的区别
- 箭头函数是匿名函数，不能作为构造函数，不能使用new
- 箭头函数不绑定arguments，取而代之用rest参数...解决
- 箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值
- 箭头函数通过 call()  或   apply() 方法调用一个函数时，只传入了一个参数，对 this 并没有影响。

```js
let obj2 = {
    a: 10,
    b: function(n) {
        let f = (n) => n + this.a;
        return f(n);
    },
    c: function(n) {
        let f = (n) => n + this.a;
        let m = {
            a: 20
        };
        return f.call(m,n);
    }
};
console.log(obj2.b(1));  // 11
console.log(obj2.c(1));  // 11 调用了call函数也没有将this指向m对象
```
- 箭头函数没有原型属性
- 箭头函数不能当做Generator函数,不能使用yield关键字

> 箭头函数的 this 永远指向其上下文的  this ，任何方法都改变不了其指向，如 call() ,  bind() ,  apply() 

## 3. Promise

- **Promise.race()**   根据传入的多个Promise实例，只要有一个实例resolve或者reject，就只返回该结果，其他实例不再执行。
- **Promise.all()**  参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中 promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果
- **Promise.allSettled()**方法返回一个promise，该promise在所有给定的promise已被解析或被拒绝后解析，并且每个对象都描述每个promise的结果。

