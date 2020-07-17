## ES6

### 1. let 和 const

- var的声明会挂在到window上，let和const不会。
- var声明存在变量提升；let、const不会。
- let和const声明形成块作用域
- 同一作用域下let和const不能声明同名变量，而var可以
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

- const
    - 一旦声明必须赋值,不能使用null占位。
    - 声明后不能再修改
    - 如果声明的是复合类型数据，可以修改其属性

### 2. 箭头函数和普通函数的区别
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

### 3. Promise



