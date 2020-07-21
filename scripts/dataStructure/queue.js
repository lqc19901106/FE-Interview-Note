/**
 * 队列
 * 先进先出
 */
class Queue{
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeu() {
        return this.items.shift();
    }
    front() {
        return items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        return this.items.toString();
    }
}

const qu = new Queue();
qu.enqueue('sss');
console.log(qu.print());