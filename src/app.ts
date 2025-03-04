console.log("Hello Function Apps TypeScript")
//https://www.youtube.com/watch?v=ubAGnfHcYbo&t=14973s

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
console.log(getDiscount())

function getAddress():string{
    return "กรุงเทพมหานคร";
}
console.log(getAddress())

console.log("==== 📌 (function)4 ฟังก์ชั่นที่มีการรับและส่งค่า (Parameter & Return) ============")
function checkNumber(num:number):string{
    if(num % 2 === 0){
        return "เลขคู่";
    }
    else{
        return "เลขคี่";
    }    
}
console.log(checkNumber(10));

function total(a:number,b:number):number{
    return a+b ;
}
console.log(total(100,20));

function total2(a:number,b:number){
    return a+b ;
}
console.log(total2(100,999));

console.log("==== 📌 (function) ฟังก์ชั่นที่ arrow ============")
//  const nameFunction = ( nameVar:number) => { }
//  กด Alt + 9 + 6 จะได้ ` ` backtick 
//  Auto Suggestionหรือเติมข้อความอัตโนมัติ  Alt + Spacebar
const checkNumber2 = (num:number) => {
    return num % 2 === 0? `${num} คือเลขคู่` : `${num} คือเลขคี่` ;   
}
console.log(checkNumber2(10));
console.log(checkNumber2(7));


console.log("==== 📌Default parameter ============")
function showEmployee(name:string,age:number,address:string="Bangkok"){
    console.log(`ชื่อ ${name} อายุ ${age} ที่อยู่ ${address}`)
}

const showEmployee2 = (name:string,age:number,address:string="Bangkok")=> {//arrow
    console.log(`ชื่อ ${name} อายุ ${age} ที่อยู่ ${address}`)
}
showEmployee("Yok",36,"Bangkok");
showEmployee("Mai",35,"Saraburi");
showEmployee("Red",30); //optional ใส่ก็ได้ไม่ใส่ก็ได้
showEmployee("Green",35);//optional ใส่ก็ได้ไม่ใส่ก็ได้

showEmployee2("Yokkk",36,"Bangkok");
showEmployee2("Maiii",35,"Saraburi");
showEmployee2("Reddd",30);


console.log("==== 🎯 สร้าง 📌object ============")
//property คือ ชื่อในการอ้างอิง
//value คือ ข้อมูลที่จัดเก็บใน property

//โครงสร้างคำสั่ง
/* 
console ชื่อวัตถุ ={
    property : value,
}
 */
const person ={
    name:"Yok Pornthip",
    age:36,
    positions:"IT",
    isWork:true
}
//const ชื่อ :{name:string,age:number} = { name:"Yok", age:36 }   
const person2 :{name:string,age:number} = {
    name:"Yok",
    age:36
}

//โครงสร้าง object แบบระบุชนิดข้อมูล
// const ชื่อวัตถุ:{property:type} ={ ค่าเริ่มต้น}
const position :{x:number,y:number}={x:10,y:20}
const positionMap2 :{lat:number,long:number}={lat:10,long:20}  
console.log("==== 🎯ฟังก์ชั่นรับค่า object ============")
// โครงสร้างคำสั่ง
//   const ชื่อฟังก์ชั่น =(object):void{
//       คำสั่งต่างๆ
//   }
function showDetail(data:{name:string,age:number}){
    console.log(`ชื่อ = ${data.name} อายุ = ${data.age}`)
}
showDetail(person)
showDetail(person2)

console.log("==== 🎯ฟังก์ชั่นส่งค่า object ============")
//  โครงสร้างคำสั่งส่งค่า
//   const ชื่อฟังก์ชั่น =(object) => {
//       return object
//   }

const showDesc =(data:{name:string,age:number}):void => {
    console.log(`Arrow ชื่อ = ${data.name} อายุ = ${data.age}`)
}
showDesc(person)

//รูปแบบ return Type call
//สร้างคำสั่ง ฟังก์ชั่นส่งค่า Object กลับออกมา
const positionMap :{lat:number,long:number}={lat:10,long:20}  
function ramdomPosition():{lat:number,long:number} {
    return{
        lat:Math.random(),
        long:Math.random()
    }
}
console.log(ramdomPosition())
///แปลงเป็น Arrow หรือรูปแบบ Arrow fucntion
//const name=():{var1:number,var2:number}=>{ return{..} }
const randomPosition =(): {lat:number,long:number}=>{
    return{
        lat:Math.random(),
        long:Math.random()
    }
}
console.log(randomPosition())


console.log("==== 🎯 Excess ProPerties Check ============")
//  ชื่อฟังก์ชั่น (parameter object)
//  ชื่อฟังก์ชั่น ( {parameter object} )
function showdetailData( data:{name:string,age:number} ){
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`)
}
const personYok ={
    name : "Yok",
    age:36,
    address:"กรุงเทพมหานคร"
}
showdetailData(personYok); //showdetailData({name : "Yok",age:36,address:"กรุงเทพมหานคร"}); //เพิ่ม {} เช็ค
showdetailData({name : "Yok",age:36});


console.log("==== 🎯 Type Aliases ============")
// โครงสร้าง
// Type NameTypeAliases ={
//     property:type,
//     ....
// }
type Employee ={
    name:string,
    salary:number
}
console.log("🎯")
console.log("🎯")

console.log("==== 🎯การใช้งาน Type Aliases ============")
// let ชื่อตัวแปร : ชื่อTypeAliases = { property:value , property :value}
let emp1:Employee = {name:"Pornthip",salary:70000}
emp1.name = "หยก"
emp1.salary = 100000
console.log(emp1)

type EmpTable={//โครงสร่้าง
    id:number,
    name:string,
    salary:number,
    phone:string
}
let Empl1 :EmpTable={id:1,name:"Yok",salary:100000,phone:"061-111-9999"}
let Empl2 :EmpTable={id:2,name:"Mai",salary:40000,phone:"061-888-9999"}
let Empl3 :EmpTable={id:3,name:"Red",salary:50000,phone:"069-999-9999"}
Empl1.id = 99999  //สามารถเปลี่ยนได้
Empl1.name = "Pornthip" //สามารถเปลี่ยนได้
console.log(Empl1)
console.log(Empl2)
console.log(Empl3)

console.log("     🔰")
console.log("     🔰")
console.log("     🔰")
console.log("==== 🎯 Type Aliases (Optinal Properties) ============")
console.log("type NameTypeAliases={ property ?: typeof, }")
// โครงสร้างคำสั่ง
// type NameTypeAliases={
//     property ?: typeof,
// }
type EmpTable2={//โครงสร่้าง
    readonly id:number,
    name:string,
    readonly salary ?:number,
    phone ?: string
}
let employee1 :EmpTable2={id:101,name:"Yok",salary:100000}
let employee2 :EmpTable2={id:102,name:"Yok",salary:80000,phone:"069-999-9999"}
console.log(employee1)
console.log(employee2)

console.log("     ")
console.log("     ")
console.log("🔰 Type Aliases (Readonly Modifier) 🔰 ")
console.log("type NameTypeAliases={ readonly property: typeof, }")
let employee3 :EmpTable2={id:103,name:"Yok",salary:90000,phone:"069-999-9999"}
employee3.name="Yok Yok"
//employee3.salary = 70000
console.log(employee3)

console.log("     ")
console.log("     ")
console.log("______________ 🔰 array 🔰 ___________")
console.log("   การสร้าง Array   ")
console.log(" const ชื่อตัวแปร : ชนิดข้อมูล []=[] ;   ไม่กำหนดค่าเริ่มต้น")
//const ชื่อตัวแปร : ชนิดข้อมูล []=[] ; ไม่กำหนดค่าเริ่มต้น
console.log(" const ชื่อตัวแปร : ชนิดข้อมูล []=[element,...] ;  กำหนดค่าเริ่มต้น")
//const ชื่อตัวแปร : ชนิดข้อมูล []=[element,...] ; กำหนดค่าเริ่มต้น
//แบบปกติ
const user1:string ="Yok"
const user2:string= "Mai"
//แบบอาเรย์ array
const users :string[] = []; //array ไม่กำหนดค่าเริ่มต้น
users.push("หยก")  //ใส่ค่าในตัวแปร array 0
users.push("ใหม่")  //ใส่ค่าในตัวแปร array 1
users.push("แดง")  //ใส่ค่าในตัวแปร array 2
users.push("เขียว")  //ใส่ค่าในตัวแปร array 3
console.log(users)
const age:number[]=[30,32,35,36] //array กำหนดค่าเริ่มต้น
const users2 :string[] = ["หยก","ใหม่"]; //array กำหนดค่าเริ่มต้น
console.log(age)

console.log("     ")
console.log("     ")
console.log("______________ 🔰 การเข้าถึงสมาชิก array 🔰 ___________")
//1 ใช้ อ้างอิงผ่าน index 
//2 ใช้ For Loop ร่วมกับ  length
//3 ใช้ ForEach 
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users.length);

users[1] ="ปีใหม่" //เปลี่ยนค่า

console.log("_______ 🔰ใช้ For Loop ร่วมกับ  length เข้าถึงสมาชิก array 🔰 ______")
for(let i = 0 ; i < users.length ; i++){
    console.log(`ลำดับที่ ${i} คือ ${users[i]}` );
}
console.log("_______ 🔰ใช้ ForEach เข้าถึงสมาชิก array 🔰 ______")
users.forEach(element => {
        console.log(element)
    }
)
age.forEach(Element=>{console.log(Element)})


console.log("     ")
console.log("     ")
console.log("______________ 🔰 array & TypeAliases 🔰 ___________") 
// step 1 create
type Employee_TypeAliases ={
    name:string,
    salary:number,
    department ?:string
}
// step 2 use
const employees :Employee_TypeAliases[]=[]
// step 3 input
employees.push({name:"หยก",salary:70000,department:"โปรแกรมเมอร์"})
employees.push({name:"ใหม่",salary:50000,department:"พนักงานเลเซอร์"})
employees.push({name:"ปีใหม่",salary:30000})
// step 4 output 
console.log(employees)
employees.forEach(element =>{
    console.log(element);
    }
)
for(let person of employees){
    console.log(person)
}


console.log("     ")
console.log("     ")
console.log("______________ 🔰 Function Overloading 🔰 ___________") 
//การสร้างฟังก์ชั่นที่มีชื่อเหมือนกันแต่สามารถรับค่า Parameter จำนวนต่างกันพร้อมคืนค่าที่แตกต่างกันได้
//  function sayHi():string
//  function sayHi(name:string):string
//  function sayHi(name?:unknown):unknown
console.log("🔰 Function Overloading 🔰  function sayHi():string ") 
console.log("🔰 Function Overloading 🔰  function sayHi(name:string):string ") 
console.log("🔰 Function Overloading 🔰  function sayHi(name?:unknown):unknown ") 

//function ชื่อฟังก์ชั่น(รับค่า:ชนิดข้อมูล):string คือ return
//แบบเดิมชื่อซ้ำไม่ได้
// function sayHello():string {
//      return "Hello TypeScript💚"
// }
// console.log(sayHello())

//รูปแบบหน้าตาของ Function Overloading
function sayHello():string
function sayHello(name:string):string;
function sayHello(name ?: unknown):unknown{
    if(!name){
        return `Hello TypeScript`
    }
    if(typeof name === "string"){
        return `Hello ${name}`
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");    
}
console.log(sayHello("Hello Yok")) //Output
console.log(sayHello("Hello Bangkok Thailand")) //Output

//แบบปกติ
// function totalAmount(a:number,b:number):number{
//     return a+b;
// }
function totalAmount(a:string,b:string):string{
    return (parseInt(a)+parseInt(b)).toString();
}
console.log(totalAmount("100","200"))


//รูปแบบ Function Overloading 
function totalAmt(a:number,b:number):number
function totalAmt(a:string,b:string):string;
function totalAmt(a:unknown,b:unknown):unknown{
    if(typeof a === "string" && typeof b === "string"){
        return parseInt(a)+parseInt(b)
    }
    if(typeof a === "number" && typeof b === "number"){
        return a+b
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง")
}
console.log(totalAmt(100,300))
console.log(totalAmt("100","500"))


console.log("     ")
console.log("     ")
console.log("______________ 🔰 Spread Operator 🔰 ___________") 
//Spread Operator เป็นรูปแบบการกระจายสมาชิกในอาร์เรย์ออกมาใช้งานโดยเติมเครื่องหมาย ... ด้านตัวแปรอาร์เรย์