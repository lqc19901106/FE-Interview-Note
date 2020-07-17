https://www.jianshu.com/p/2975c25e4d71

//函数柯里化

/*
// 实现一个add方法
add(1,2,3) = 6;
add(1)(2)(3) = 6;
add(1,2,3)(4) = 10
*/

//  主要作用

//  参数复用
//  提前返回 - 返回接受余下的参数且返回结果的新函数
//  延迟执行 - 返回新函数,等待执行.


function curry(fn) {
    return function() {
        if (arguments.length === fn.length) {
            return curry.call(this, arguments);
        }else{
            return curry(arguments);
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

const multi = curry(add);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);


const curry = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])

let curryTest=curry((a,b,c,d)=>a+b+c+d)
curryTest(1,2,3)(4) //返回10
curryTest(1,2)(4)(3) //返回10
curryTest(1,2)(3,4) //返回10

```

