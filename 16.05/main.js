// --------------- hello
const greeting = "hello";
console.log(greeting);

// ------------------ nhap a va b, tinh a*b
const dup = (a, b) => a * b;
console.log(dup(2, 3));

// ------------------ nhap i, kiem tra so chan le
const i = (i) => {
  if (i % 2 == 0) {
    console.log("i =" + i + "là số chẵn");
  } else {
    console.log(i + " là số lẻ");
  }
};
i(5);

// ------------------ nhap name, xin chao name
const namee = (a) => {
  console.log("Xin chao " + a);
};
namee("cong nam");

// ------------------ nhap name age, xin chao name age tui
const tt = (a, b) => {
  console.log(`Xin chao ${a} ${b} tủi`);
};
tt("nam", 18);

// ------------------ nhap diem, xet thanh tich
const x = (x) => {
  if (x < 5){
      document.writeln("không đạt");
  }
  if (x >= 5 && x < 6.5){
    document.writeln("đạt");
  }
  if (x >= 6.5 && x < 8){
    document.writeln("khá");
  } 
  if (x >= 8 && x <= 10) {
    document.writeln("giỏi");
  }
  if(x > 10){
    document.writeln("bạn xạo quá");
  }
};
x(12);

// ------------------- nhap i, in ra day so tu 0 den i
const dayi= i=>{
    for(let j = 0; j <=i; j++){
        console.log(j)
    }
}
dayi(5);

// ------------------- vong lap tinh tong cac so tu 1 den 100
let tong100 = 0;
    for(let i = 1; i<=100;i++){
        tong100 = tong100 +i;
    }
    console.log(tong100);

// ------------------- bang cuu chuong 9 bang vong lap
for(let i = 1; i<=10;i++){
    console.log("9 x " + i+ " = " + 9*i);
}

// ------------------- bang cuu chuong tu 2 den 9
console.log("bang cuu chuong tu 2 den 9");
for(let i = 2; i<=9;i++){
    for(let j =1;j<=10;j++){
        console.log(i +" x "+ j +" = " + i*j );
    }
}
//---------------------- tao the p va them thuoc tinh
document.getElementsByClassName("introduce")[1].style.color = "red";
const pa = document.createElement("p");
pa.innerHTML= 'ahihi';
pa.style.margin = 0;
pa.style.color = "blue";

document.body.appendChild(pa);

//-------------------------------
// const nnn = (even) => {
//   even.innerHTML = "zozozozo";
//   document.getElementById("demo").innerHTML = "zzzzz";
//   document.getElementById("cl").style.color = "green";
// }
function nnn(){
  document.getElementById("demo").innerHTML = "zzz";
}

function myfunction(){
  var x = document.getElementById("fname").value;
  let tm = document.createElement("p");
  tm.innerHTML = x;
  document.body.appendChild(tm);
}
function myfunction2(){
  var x = document.getElementById("mySelect").value;
  document.getElementById("xe").innerHTML= "your car is " + x;
}
//----------------- Array
var student = ["david truong", "peter phu", "alex nam","nhat anh", "vy","Quynh anh", "khuong"];
console.log("chieu dai cua array student la " + student.length);
const vitri = student.findIndex((v)=> v=== "nhat anh");

console.log(vitri);
//---------- lay ra phan tu dau tien
student.shift();
//---------- lay ra phan tu cuoi cung
console.log(student.pop());
console.log(student);

//------------- tao string moi noi phan tu trong mang bang dau gach
let fullName = student.join("-");
console.log(fullName);
//-------------- xoa quynh anh
const vitriqa = student.indexOf("Quynh anh");
student.splice(vitriqa, 1);
console.log(student);


//------------ noi student2 voi student, concat cung dc
const student2 = ["tom", "jerry"];

student = [...student,...student2]

console.log(student);

let ran = Math.floor(Math.random()*100) +1;
console.log("random "+ran);
//------------ Object
const person = {
  firstname : {fName:"david"},
  lastname: "truong",
  age: 23,
  eyecolor: "blue"
};
console.log(Object.keys(person));
console.log(Object.values(person));
//------------ bai tap lan 1
let txt = "Lop hoc web cua KITS";

console.log(txt.length);

//-------lay chu web trong txt
console.log(txt.slice(8,11));
//------------ doi dau cach = ,
console.log(txt.replaceAll(" ", ","));
//------------- tim co chu dev trong txt khong
const kt = dev =>{
  if(txt.indexOf(dev) == -1){
    return "k tim thay";
  }else{
    return "co"+dev+ "nha";
  }
}
console.log(kt("Dev"));
//---------- bai tap lan 2
//-------------- kiem tra xem co phai so nguyen to k
const ktsnt = n =>{

    for(let i = 2; i<= Math.sqrt(n); i++){
      if(n%i == 0){
        return n+" khong phai la so nguyen to";
      }else{
        return n+ " la so nguyen to";
      }
    }
  }

console.log(ktsnt(2));
//-------------- nhap n < 0 tinh theo vi du sau: expres= 1/n + 2/n +... + n/n

const expres = n =>{
  
  if(n<0){
    return "cook";
  }else{
    let tong = 0;
    for(let i = 1; i<=n; i++){
      tong += i/n;
    }
    return tong;
  }
}
console.log(expres(5));


//--------------- kiem tra co phai la email hay k
const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const ktemail= e =>{
  if(regex1.test(e)){
    return "chinh la email";
  }else{
    return "k phai email";
  }
}
console.log(ktemail("nam23z@gmail.com"));

//--------------- doi background qua mau khac
document.getElementById("div1").style.backgroundColor = "red";
document.getElementById("div2").style.backgroundColor = "green";

//--------------- tao button de show & hidden the div tren
function show1(){
  var x = document.getElementById("div1");
  if(x.style.display === "none"){
    x.style.display = "inline-block";
  }else{
    x.style.display = "none"
  }
}