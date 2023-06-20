const  minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const add = document.querySelector(".add");

let a = 1;
add.addEventListener ("click", () => {
a++;
a = (a < 10 )? "0" + a: a;
num.innerHTML = a;
});
minus.addEventListener("click", () => {
if(a>1){
    a--; 
    a = (a < 10) ? "0" + a : a;
    num.innerHTML = a;
}
});
