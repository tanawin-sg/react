// Object
//const doBark = "bark";
const doBark = "bark2";
const dog = {
  
  //doBark => [doBark] การทำให้ Propperty เปลี่ยนตามตัวแปล 
  //[doBark] => ["bark"+"2"] ทำได้ใน ES6
  name: "Doggy" ,age: 2 ,[doBark]:function(){ 
    console.log("hong");
  }
}
//dog.dobark();
dog.bark2();