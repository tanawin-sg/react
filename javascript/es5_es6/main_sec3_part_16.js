// Default Parameters
function howareyou(mood = "Happy"){
  console.log(mood);
}
howareyou();
howareyou("sad");

let [x,y] = [1,2];
console.log('1|',x,y);

let [x1,y1] = [1];
console.log('2|',x1,y1);

let [x2,y2 = 3] = [1];
console.log('3|',x2,y2);

let [x3 = 4,y3 = 5] = [];
console.log('4|',x3,y3);

const [{ prop: x10 = 10 }] = [{prop: undefined}];
console.log(x10);

const [{ prop: x11 = 10} = {} ] = [];
console.log(x11);

