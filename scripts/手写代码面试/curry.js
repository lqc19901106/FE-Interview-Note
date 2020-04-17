
// 函数柯里化
const curry = (fn) => {
    return (...args) => {
        if(args.length === fn.length) {
            return fn.apply(null, args);
        }
        return fn.bind(null, ...args)
    }
}

// 实现 add 方法让 add(1,2,3)\add(1)(2)(3)相同

const add = curry((a, b, c) => a + b + c);

add(1)(2)(3);