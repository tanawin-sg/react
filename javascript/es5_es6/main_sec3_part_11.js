let name1 = "Win";

if(true){
  let name1= "win2";
  console.log(name1);
}
// var ตัวแปลภายนอกจะถูกทับตัวแปลภายใน
// let จะไม่ถูกทับจากตัวแปลภายใน
console.log(name1);

const fruit = "Banana"; // constant ประกาศไปแล้วไม่สามารถเปลี่ยนค่าได้
//fruit = "aa"

const person ={}; //ประกาศเป็น Onject
//person = {name:win};
person.name = "win2";  // กำหนดแบบอ้อมได้ โดยใช้ชื่อตัวแปล . propperty
console.log(person);