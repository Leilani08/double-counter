let num1=document.getElementById("num1");
let num2=document.getElementById("num2");

function decrease1(){
   num1.innerHTML-=1;
}
function reset1(){
    num1.innerHTML =100;
}
function increase1(){
    let currentNum=parseInt(num1.innerHTML);
    num1.innerHTML= currentNum + 1;
}


function decrease2(){
   num2.innerHTML-=1;
}
function reset2(){
    num2.innerHTML =200;
}
function increase2(){
    let currentNum2=parseInt(num2.innerHTML);
    num2.innerHTML= currentNum2 + 1;
}