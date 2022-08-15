// Уровень 0
const startSeconds = document.getElementById("timer");
let startTimer = +(startSeconds.textContent);

function countdown() {
    startTimer -= 1;
    if (startTimer === -1) {
        clearInterval(timer);
        return alert('Вы победили в конкурсе!');
    }
    return startSeconds.textContent = startTimer;
}

const timer = setInterval(countdown, 1000);

// Уровень 1 и 2
const time = document.getElementById("timer2");
let startTimer2 = (time.textContent);
let startTimerArr = startTimer2.split(':');
let hours = +startTimerArr[0];
let minutes = +startTimerArr[1];
let seconds = +startTimerArr[2];

function countdown2(hh, mm, ss) {
    seconds = ss - 1;

    formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;    

    if (ss === 60) {
        minutes = mm - 1;  
    }
    if (ss === 1) {
        seconds = 60;  
    }
    if (mm === 0 && ss === 60) {
        minutes = 59;
        hours = hh - 1;
    }
    if (hh === 0 && mm === 0 && ss === 60) {
        clearInterval(timer2);
        location = 'http://ajoq.ru/upload/beautiful_day.zip';
        return alert('Вы победили в конкурсе!');
    }

    formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    formatHours = hours < 10 ? `0${hours}` : `${hours}`;        

    return time.textContent = `${formatHours}:${formatMinutes}:${formatSeconds}`;
}

const timer2 = setInterval(() => countdown2(hours, minutes, seconds), 1000);