var url1 = 'http://www.baidu.com?s=1';
var url2 = 'http://www.baidu.com?s=1#hash?a=3';
var url3 = 'http://www.baidu.com#hash?a=3';

console.log(new URL(url2));
function parseQueryString(url) {
    var obj = {};
    var keyvalue = [];

    var key = "",
        value = "";

    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");

    for (var i in paraString) {
        keyvalue = paraString[i].split("=");
        key = keyvalue[0];
        value = keyvalue[1];
        obj[key] = value;
    }
    return obj;
}

console.log(parseQueryString(url1));
console.log(parseQueryString(url2));
console.log(parseQueryString(url3));