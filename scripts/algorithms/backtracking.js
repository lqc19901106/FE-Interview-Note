/**
 * 回溯
 * 回溯算法是一步一步的向前试探，对每一步的探测结果进行评估，可以避免走弯路
 * 
 * 出现非法的情况时，可以退到之前的场景，可以返回一步或者多步
 * 再去尝试别的路径和办法
*/
function fn(n){
    // 1. 判断输入或者状态是否合法
    if(input/state is invalid) {
        return；
    }

    // 2. 判断递归是否应当结束
    if(match condition) {
        return some value;
    }

    //遍历所有可能出现的情况
    for(all possible cases) {
        //3. 尝试下一步的可能性
        solution.push(case);
        //递归
        result = fn(m);
        //4.  回溯到上一步
        solution.pop(case);
    }
}

// N 皇后问题
