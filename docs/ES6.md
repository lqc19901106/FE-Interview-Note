# ES6 常见问题

## 1. let 和 const

- var 声明存在变量提升；let、const 不会。
- let 和 const 声明只在块级作用域内部使用
- 同一作用域下 let 和 const 不能声明同名变量，而 var 可以
- var 的声明会挂在到 window 上，let 和 const 不会。
- 暂存死区

```js
var a = 100;
if (1) {
  a = 10;
  //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，
  // 而这时，还未到声明时候，所以控制台Error:a is not defined
  let a = 1;
}
```

- `const`对比`let`
  - 一旦声明必须赋值,不能使用 null 占位。
  - 声明后不能再修改
  - 如果声明的是复合类型数据，可以修改其属性

> 块级作用域（词法作用域）会在如下情况下创建：
>
> - 在一个函数内部
> - 在一个代码块（由一对花括号包裹）内部

```js
for (let i = 0; i < 10; i++) {
  process(items[i]);
}
// i 在此处不可访问，抛出错误
console.log(i);
```

## 2. 函数

- 箭头函数是匿名函数，不能作为构造函数，不能使用 new
- 箭头函数不绑定 arguments，取而代之用 rest 参数...解决
- 箭头函数不绑定 this，会捕获其所在的上下文的 this 值，作为自己的 this 值
- 箭头函数通过 call() 或 apply() 方法调用一个函数时，只传入了一个参数，对 this 并没有影响。

```js
let obj2 = {
  a: 10,
  b: function (n) {
    let f = (n) => n + this.a;
    return f(n);
  },
  c: function (n) {
    let f = (n) => n + this.a;
    let m = {
      a: 20,
    };
    return f.call(m, n);
  },
};
console.log(obj2.b(1)); // 11
console.log(obj2.c(1)); // 11 调用了call函数也没有将this指向m对象
```

- 箭头函数没有原型属性
- 箭头函数不能当做 Generator 函数,不能使用 yield 关键字

> 箭头函数的 this 永远指向其上下文的 this ，任何方法都改变不了其指向，如 call() , bind() , apply()

## 3. Promise

- **Promise.race()** 根据传入的多个 Promise 实例，只要有一个实例 resolve 或者 reject，就只返回该结果，其他实例不再执行。
- **Promise.all()** 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中 promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果
- **Promise.allSettled()**方法返回一个 promise，该 promise 在所有给定的 promise 已被解析或被拒绝后解析，并且每个对象都描述每个 promise 的结果。

## 4. async\await

## 5. generator

## 6. for...of.. 和 Iterator

## 7. Proxy 和 Reflect

## 8. Set、Map

## 9. decorator 装饰符

## 10. class


## 11. Symbol

- 新的数据类型 在原来 number、boolean、string，object，undefined, null
- 最大的用法是用来定义对象的唯一属性名。

> 注意点

- Object.keys, Object.getOwnPropertyNames,for...in,for...of 不会遍历到 Symbol 的属性
- 用 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。

```
Symbol('kk') === Symbol('kk')  //false
Symbol.for('kk') === Symbol('kk') // true

//Symbol.for 根据key生成Symbol对象
//Symbol.keyFor 根据Symbol对象查询key
let yellow1 = Symbol.for("Yellow");
Symbol.keyFor(yellow1);    // "Yellow"


//用法
let key = Symbol('key1');
let obj ={
  [key]: 'aa'
}
```

## 12. 对象扩展方法

```
//写法
let mouse() {}
const methods = {
    click() {},
    mouse
};

// 比较两个值是否严格相等
Object.is({},{});
//false

Object.is("foo","foo");
//true

// 对象的浅复制
Object.assign({}, methods);
//同样的属性后面的会覆盖前面的
//会忽略enumerable为false的属性

// 为对象添加属性
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}

// 为对象添加方法
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
  ···
};
SomeClass.prototype.anotherMethod = function () {
  ···
};


//获取对象属性属性的描述对象
Object.getOwnPropertyDescriptor(Object.prototype, 'toString');

//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }

// Object.entries 方法返回一个数组
// 成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
// 会过滤属性为Symbol的属性

var obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]


// Object.keys，Object.values
// 将对象的的 key/value 生成数组


// __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()；

Object.getPrototypeOf()   //获取对象的prototype
var obj = {
  method: function() { ... }
};
obj.__proto__ = someOtherObj;

// es5的写法
var obj = Object.create(someOtherObj);
obj.method = function() { ... };



对象是属性的写法

var s = 123;
var obj = {
    [s]: 'name'
}
```

## 13 数组方法

```
// Array.of 将所有参数生成数组
Array.of(1,2,3,4)  //[1,2,3,4]

// Array.from 将所有的可迭代对象转化为数组
Array.from([1,2,3,4]);
Array.from(new Set([1,2,3,4]));
Array.from(new Map([1,2,3,4]));

// .find
// .findIndex

// .fill  将一定范围索引的数组元素内容填充为单个指定的值

let arr = Array.of(1, 2, 3, 4);
// 参数1：用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)：被填充的结束索引，默认为数组末尾
console.log(arr.fill(0,1,2)); // [1, 0, 3, 4]

// .copyWithin 将一定范围的数组元素修改为此数组另一指定范围索引的元素
// 参数1：被修改的起始索引
// 参数2：被用来覆盖的数据的起始索引
// 参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾
console.log([1, 2, 3, 4].copyWithin(0,2,4)); // [3, 4, 3, 4]

// 参数1为负数表示倒数
console.log([1, 2, 3, 4].copyWithin(-2, 0)); // [1, 2, 1, 2]

console.log([1, 2, ,4].copyWithin(0, 2, 4)); // [, 4, , 4]

// .includes // 是否包含指定值
// .flat  //将多维数组转换成一维数组
// .flatMap  //先处理在进行flat方法

// .keys //返回数组的索引

// .values  // 返回数组的值

// .entries 遍历键值对。
for(let [key, value] of ['a', 'b'].entries()){
    console.log(key, value);
}
// 0 "a"
// 1 "b"
```

## 14.
