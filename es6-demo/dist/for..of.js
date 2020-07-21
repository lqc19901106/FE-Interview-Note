"use strict";

var obj1 = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd'
};
var arr = [{
  a: 'a'
}, {
  b: 'b'
}];

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var iterator = _arr[_i];
  console.log(iterator);
}