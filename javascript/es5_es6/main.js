// ARRAY FUNCTION
var fruits = ['Apple', 'Banana'];
console.log('Size array = '+fruits.length);
console.log(fruits[0]);

// LOOP
fruits.forEach( function(item, index, array){
    console.log(item,index,array)
})

// PUSH  ส่งค่าเข้า array
fruits.push('Orange');
console.log(fruits);

//POP  ดึงตัวสุดท้ายออกจาก array หรือดึงมาเก็บ
//fruits.pop();
var result = fruits.pop();
console.log(fruits,result);

//fruits  เอาตัวข้างหน้าออก
fruits.shift();
console.log(fruits);

//UNSHIFT 
fruits.unshift('Strawberry');
console.log(fruits);

// INDEX  หาตำแหน่งข้อมูลใน array
console.log(fruits.indexOf('Banana'));

// REMOVE  remove ข้อมูลออกจาก array
var vegetables = ['Cabbage', 'Turnip', 'Radish' ,'Carrot'];
console.log(vegetables);
vegetables.splice(1,3);
console.log(vegetables);

//COPY
var copy = fruits.slice();
console.log(copy);

//MAP
var array1 = [1,4,9,16];
const map1 = array1.map( x => x * 2 ); // ส่งฟังก์ชั่นเข้า map
console.log(map1);
