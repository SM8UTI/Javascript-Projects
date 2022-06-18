let count = 0;

const textValue = document.getElementById("value");
const btn = document.querySelectorAll(".btn");


btn.forEach(function(e){
    e.addEventListener("click",function(l){
        const styles = l.currentTarget.classList;
        if(styles.contains("increase")){
            count++;
        }
        else{
            count--;
        }

        if(count>0){
            textValue.style.color = "#76dd78";
        }
        else if(count<0){
            textValue.style.color = "#ff2233";
        }
        else{
            textValue.style.color = "#fff"
        }

        textValue.textContent = count;
    })
});