// 
const reduce = (arr = [], callback, initvalue = 0) {
    let index = 0;
    while(index < arr.length){
        callback(arr[index], index, initvalue)
        index++
    }

}
export default reduce;