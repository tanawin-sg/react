// Destructuring Assignment   ดึงค่าใน Array หรือ Propperty ของ obj มาเก็บไว้ในตัวแต่ตัวเดี่ยว
// Array Destructuring
const arr = [1,2];
const a = arr[0];
const b = arr[1];

const [c,d] = arr;
console.log(c,d);

const oneToFive = [1,2,3,4,5];
const [a1,b1,c1,,e1] = oneToFive; //ดึงมาแต่ 3 ตัวหรือเว้น
console.log(a1,b1,c1,e1);

//rest parameter
const [a2,b2,...rest] = oneToFive; // 1 2 เก็บใน a2 b2 ค่าที่เหลือเก็บใน rest
console.log(rest);