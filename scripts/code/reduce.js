// 
const reduce = (arr = [], callback, initvalue) {
    let hasInit = initvalue === undefined;
    let value = hasInit ? initvalue : arr[0];
    
    for (let index = hasInit ? 0 : 1; index < arr.length; index++) {
        value = callback(value, arr[index], index, arr);
    }
    return value;
}
export default reduce;