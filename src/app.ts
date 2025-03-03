console.log("Hello Function Apps TypeScript")

console.log("==== 📌✅ (function)  ฟังก์ชั่น ============")
//1 ฟังก์ชันที่ไม่มีการรับและส่งค่า(void) 
//2 ฟังก์ชั่นที่มีการรับค่า(Parameter)
//3 ฟังก์ชั่นที่มีส่งค่า(Return)
//4 ฟังก์ชั่นที่มีการรับและส่งค่า (Parameter & Return)

// function ชื่อฟังก์ชั่น()void{
//     //คำสั่งต่างๆ
// }
//การเรียกใช้งานฟังก์ชั่น
//ชื่อฟังก์ชั่น()

console.log("==== 📌 (function) 1 ฟังก์ชันที่ไม่มีการรับและส่งค่า(void) ============")
function sayHi(){
    console.log("Hello TypeScript Void Function")
}
sayHi();

function sayHiVoid():void{
    console.log("Hello TypeScript Void Function")
}
sayHiVoid();

console.log("==== 📌 (function) 2 ฟังก์ชั่นที่มีการรับค่า(Parameter) ============")
function sayHiFn(name:string):void{
    console.log(`Hello ${name}`)
}
sayHiFn("🎯Yok Programmer");
sayHiFn("🎯Programmer IT");

console.log("==== 📌 (function)3 ฟังก์ชั่นที่มีส่งค่า(Return) ============")
function getDis():number{
    return 500 ;
}
function getDiscount():number{
    return 500 ;
}
function getAddress():string{
    return "";
}


