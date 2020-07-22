// 函数防抖
export function debounce(func, delay) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, arguments);
        },delay);
    }
}

// 函数节流
export function throttle(func, threshold = 160){
    let timeout,
        start = new Date - 0;
    return function() {
        const context = this, 
              args = arguments,
              current = new Date - 0;
        clearTimeout(timeout);
        if(current - start >= threshold) {
            func.apply(context, args);
        }else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, threshold);
        }
    }
}