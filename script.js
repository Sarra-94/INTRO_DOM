// import button click me
// let btn = document.getElementById("btn"); //
// queryselector
let btn = document.querySelectorAll(".btn");
console.log(btn);
// let title = document.querySelector("h1");

let quantity = document.querySelectorAll(".qte");
// event click=> alert

for (let i = 0; i <= btn.length - 1; i++) {
  btn[i].addEventListener("click", function () {
    //   console.log(+quantity.innerHTML + 1);
    //   quantity.innerHTML = +quantity.innerHTML + 1;
    quantity[i].innerHTML++;
  });
}

// ----------------------------------
// To change Color
//  btn.addEventListener("click", function () {
//   if(title.style.color=="red"){
// title.style.color=="black"
// }else{
// title.style.color="red"
// }
//  });
