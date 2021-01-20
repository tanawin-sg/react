import { add } from "./math.3"

console.log("1 |", add(1,2));

//ถ้า run เลย node ยังไม่รู้จักคำสั่ง import ของ javascript version ใหม่ 
//ให้ใช้ babel แปลงเป็น version ที่ node/browser รู้จัก
//npm init -y
// save-dev ติดตั้งโหมด dev
//npm install --save-dev babel-cli babel-core babel-preset-env
//เมื่อติดตั้งเสร็จไปที่ package.json ใน script ให้เพิ่ม "build": "babel src -d build"
// สั่งให้ babel ไปหาโฟเดอร์ src และแปลง js ไปเก็บใน build
// ที่ es5_es6 ใช้คำสั่ง npm run build  คือการรันคำสั่งใน package.json