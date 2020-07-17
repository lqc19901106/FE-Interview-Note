function CreateXHR(){
    if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }else if (window.ActiveXObject) {
        var versions = ['MSXML2.XMLHttp','Microsoft.XMLHTTP'];
        for (var i = 0,len = versions.length; i<len; i++) {
            try {
                return new ActiveXObject(version[i]);
                break;
            } catch (e) {
                //跳过
            }  
        }
    }else {
        throw new Error('不支持');
    }
}
export const ajax = (options) => {
    const xhr = CreateXHR();
    xhr.ontimeout  = options.ontimeout;
    xhr.open(options.method, options.url);
    return new Promise(function(reslove, reject){
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                reslove(xhr.responseText);
            }
        }
        xhr.onerror = function(data){
            reject(data);
        }
        if(options.method === 'POST') {
            xhr.send();
        }else{
            xhr.send(null);
        }
    })
}