// Spread Operator

function add(x,y,z){
  return x + y +z;
}
const sum1 = add(1,2,3);
console.log('1|',sum1);

const numbers =[2,4,6];
const sum2 = add(numbers[0],numbers[1],numbers[2]);
const sum3 = add(...numbers); // ฝั่งส่งเรียก spread operator ฝั่งรับเรียก rest parameter

console.log('sum2|',sum2);
console.log('sum3|',sum3);

const arr = [4,5,6];
const append = [1,2,3,arr];
console.log('append|',append);
const append2 = [1,2,3,...arr];
console.log('append2|',append2);

//Spread Object
var obj1 = { foo : "bar" , x : 42 }
var obj2 = { foo : "baz" , y : 13 }

var cloneObj = {...obj1}; //เอาค่าใน Obj1 การจายออกมาและสร้างเป็น obj ตัวใหม่ให้กับ cloneObj
var cloneObj2 = {...obj1, ...obj2}; // merg obj
console.log('cloneObj|',cloneObj2);

var {foo, x, y} = obj1;
console.log(foo, x, y);

var {foo: foo2 ,x: x2, y:y2} = obj1; //ตั้งชื่อใหม่ได้
console.log(foo2,x2,y2);