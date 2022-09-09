const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

const launchDate = '1 jan 2023';

const countdown = () =>{
    const launch = new Date(launchDate);
    const currentDate = new Date();
    
    const totalSeconds = (launch - currentDate)/1000;

    const day = Math.floor(totalSeconds/3600/24)
    const hour = Math.floor(totalSeconds/3600%24)
    const minute = Math.floor(totalSeconds/60%60)
    const second = Math.floor(totalSeconds%60)

    days.innerText = formatTime(day);
    hours.innerText = formatTime(hour);
    minutes.innerText = formatTime(minute);
    seconds.innerText = formatTime(second);
}

const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown,1000)