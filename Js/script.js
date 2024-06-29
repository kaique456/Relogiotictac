let Hhand = document.querySelector(".Hhand");
let Mhand = document.querySelector(".Mhand");
let Shand = document.querySelector(".Shand");

setInterval(() => {
    let D = new Date();
    let H = D.getHours();
    let M = D.getMinutes();
    let S = D.getSeconds();

    let Hr = 30 * H + M / 2;
    let Mr = 6 * M;
    let Sr = 6 * S;

    Hhand.style.transform = `rotate(${Hr}deg)`;
    Mhand.style.transform = `rotate(${Mr}deg)`;
    Shand.style.transform = `rotate(${Sr}deg)`;
}, 1000);

const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

setInterval(() => {
    let date = new Date()
    let dHour = date.getHours()
    let dMinute = date.getMinutes()
    let dSec = date.getSeconds()

    hour.innerHTML = `${formatTime(dHour)}`
    min.innerHTML = `${formatTime(dMinute)}`
    sec.innerHTML = `${formatTime(dSec)}`

}, 1000)

function formatTime(time) {
    return time < 10 ? '0' + time : time
}