
const imgBtn = document.querySelector(".imgOnOFF")
const btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    if(btn.textContent == "ON"){
        btn.textContent = "OFF";
        // imgBtn.src="image/Images/ON.png";
        imgBtn.src="Images/extra.png";
    }
    else{
        btn.textContent = "ON";
        imgBtn.src="Images/OFF.png";
    }
});


