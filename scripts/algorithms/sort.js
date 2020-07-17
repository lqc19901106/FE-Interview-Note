/**
 * 冒泡排序
 * 插入排序
 * 
 * 归并排序
 * 快速排序
 * 拓扑排序
 * 
 * 堆排序
 * 桶排序
 */
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            //从小到大
            if(arr[j] > arr[j + 1] ) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const insertSort = () => {

}

const mergeSort = () => {

}

const quickSort = () => {

}

const topologicalSort = () => {

}

//堆排序
const heapSort = () => {

}

//桶排序
const bucketSort = () => {

}

