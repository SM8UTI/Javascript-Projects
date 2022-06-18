const btn = document.querySelector(".btn");
const colorText = document.querySelector(".hex-color");


const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener("click",function(){
//    let ran = randomNum();
   let hexColor = "#";
   for(let i = 0;i<6;i++){
        hexColor+=hex[randomNum()];
   }

   document.body.style.backgroundColor = hexColor;
   colorText.textContent = hexColor
});

function randomNum(){
    return Math.floor(Math.random()*hex.length);
}