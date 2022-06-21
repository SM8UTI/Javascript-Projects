const timeText = document.querySelector(".time");
const date = document.querySelector(".dateText");

setInterval(() => {
    let d = new Date();
    timeText.innerHTML = d.toLocaleTimeString();
    date.innerHTML = d.toDateString();

})