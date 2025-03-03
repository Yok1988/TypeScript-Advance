"use strict";
console.log("Hello Function Apps TypeScript");
console.log("==== 📌✅ (function)  ฟังก์ชั่น ============");
//1 ฟังก์ชันที่ไม่มีการรับและส่งค่า(void) 
//2 ฟังก์ชั่นที่มีการรับค่า(Parameter)
//3 ฟังก์ชั่นที่มีส่งค่า(Return)
//4 ฟังก์ชั่นที่มีการรับและส่งค่า (Parameter & Return)
// function ชื่อฟังก์ชั่น()void{
//     //คำสั่งต่างๆ
// }
//การเรียกใช้งานฟังก์ชั่น
//ชื่อฟังก์ชั่น()
console.log("==== 📌 (function) 1 ฟังก์ชันที่ไม่มีการรับและส่งค่า(void) ============");
function sayHi() {
    console.log("Hello TypeScript Void Function");
}
sayHi();
function sayHiVoid() {
    console.log("Hello TypeScript Void Function");
}
sayHiVoid();
console.log("==== 📌 (function) 2 ฟังก์ชั่นที่มีการรับค่า(Parameter) ============");
function sayHiFn(name) {
    console.log(`Hello ${name}`);
}
sayHiFn("🎯Yok Programmer");
sayHiFn("🎯Programmer IT");
console.log("==== 📌 (function)3 ฟังก์ชั่นที่มีส่งค่า(Return) ============");
function getDis() {
    return 500;
}
function getDiscount() {
    return 500;
}
console.log(getDiscount());
function getAddress() {
    return "กรุงเทพมหานคร";
}
console.log(getAddress());
console.log("==== 📌 (function)4 ฟังก์ชั่นที่มีการรับและส่งค่า (Parameter & Return) ============");
function checkNumber(num) {
    if (num % 2 === 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
}
console.log(checkNumber(10));
function total(a, b) {
    return a + b;
}
console.log(total(100, 20));
function total2(a, b) {
    return a + b;
}
console.log(total2(100, 999));
console.log("==== 📌 (function) ฟังก์ชั่นที่ arrow ============");
// const nameFunction = ( nameVar:number) => { }
//กด Alt + 9 + 6 จะได้ ` ` backtick 
//Auto Suggestionหรือเติมข้อความอัตโนมัติ  Alt + Spacebar
const checkNumber2 = (num) => {
    return num % 2 === 0 ? `${num} คือเลขคู่` : `${num} คือเลขคี่`;
};
console.log(checkNumber2(10));
console.log(checkNumber2(7));
console.log("==== 📌Default parameter ============");
function showEmployee(name, age, address = "Bangkok") {
    console.log(`ชื่อ ${name} อายุ ${age} ที่อยู่ ${address}`);
}
const showEmployee2 = (name, age, address = "Bangkok") => {
    console.log(`ชื่อ ${name} อายุ ${age} ที่อยู่ ${address}`);
};
showEmployee("Yok", 36, "Bangkok");
showEmployee("Mai", 35, "Saraburi");
showEmployee("Red", 30); //optional ใส่ก็ได้ไม่ใส่ก็ได้
showEmployee("Green", 35); //optional ใส่ก็ได้ไม่ใส่ก็ได้
showEmployee2("Yokkk", 36, "Bangkok");
showEmployee2("Maiii", 35, "Saraburi");
showEmployee2("Reddd", 30);
console.log("==== 🎯 สร้าง 📌object ============");
//property คือ ชื่อในการอ้างอิง
//value คือ ข้อมูลที่จัดเก็บใน property
//โครงสร้างคำสั่ง
/*
console ชื่อวัตถุ ={
    property : value,
}
 */
const person = {
    name: "Yok Pornthip",
    age: 36,
    positions: "IT",
    isWork: true
};
//const ชื่อ :{name:string,age:number} = { name:"Yok", age:36 }   
const person2 = {
    name: "Yok",
    age: 36
};
//โครงสร้าง object แบบระบุชนิดข้อมูล
// const ชื่อวัตถุ:{property:type} ={ ค่าเริ่มต้น}
const position = { x: 10, y: 20 };
const positionMap2 = { lat: 10, long: 20 };
console.log("==== 🎯ฟังก์ชั่นรับค่า object ============");
// โครงสร้างคำสั่ง
//   const ชื่อฟังก์ชั่น =(object):void{
//       คำสั่งต่างๆ
//   }
function showDetail(data) {
    console.log(`ชื่อ = ${data.name} อายุ = ${data.age}`);
}
showDetail(person);
showDetail(person2);
console.log("==== 🎯ฟังก์ชั่นส่งค่า object ============");
// โครงสร้างคำสั่งส่งค่า
//   const ชื่อฟังก์ชั่น =(object) => {
//       return object
//   }
const showDesc = (data) => {
    console.log(`Arrow ชื่อ = ${data.name} อายุ = ${data.age}`);
};
showDesc(person);
//รูปแบบ return Type call
//สร้างคำสั่ง ฟังก์ชั่นส่งค่า Object กลับออกมา
const positionMap = { lat: 10, long: 20 };
function ramdomPosition() {
    return {
        lat: Math.random(),
        long: Math.random()
    };
}
console.log(ramdomPosition());
///แปลงเป็น Arrow หรือรูปแบบ Arrow fucntion
//const name=():{var1:number,var2:number}=>{ return{..} }
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random()
    };
};
console.log(randomPosition());
