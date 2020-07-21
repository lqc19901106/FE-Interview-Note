// function* helloWorldGenerator() {
//   yield "hello";
//   yield "world";
//   return "ending";
// }

// let hw = helloWorldGenerator();

// console.log(hw.next());

// console.log(hw.next());

// console.log(hw.next());

// console.log(hw.next());

function* fun() {
  for (var i = 0; i < 10; i++) {
    var sss = yield i;
    console.log(sss);
  }
}

var f = fun("ddddd");

console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
