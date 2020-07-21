Function.prototype.customCall = (context, ...args) {
    context = (typeof context === 'object' ? context : window)
    // 防止覆盖掉原有属性
    const key = Symbol()
    // 这里的this为需要执行的方法
    context[key] = this
    // 方法执行
    context[key](...args)
    delete context[key]
}

Function.prototype.customApply = (context, args) {
    context = (typeof context === 'object' ? context : window)
    // 防止覆盖掉原有属性
    const key = Symbol();
    // 这里的this为需要执行的方法
    context[key] = this
    // 方法执行
    context[key](...args)
    delete context[key]    
}

Function.prototype.customBind = (context ) {
    context = (typeof context === 'object' ? context : window)

    return (...args)=>{
        this.call(context, ...args)
    }
}