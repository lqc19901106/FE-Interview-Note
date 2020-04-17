/*
* 1.创建一个空对象
* 2.链接到原型
* 3.绑定this值
* 4.返回新对象
*/
function createNew(){
    var newObj = {};
    var constructor = [].shift.call(arguments)  
    newObj.__proto__ = constructor.prototype;
    var result = constructor.apply(newObj, arguments);
    return typeof result === 'object' ? result : obj;
}

function People(name,age) {
    this.name = name
    this.age = age
}

let peo = createNew(People,'Bob',22)

function _new(fn, ...args) {
    const object = Object.create(fn.prototype)
    const result = fn.call(object, ...args)
    return typeof result === 'object' && result !== null ? result : object
}