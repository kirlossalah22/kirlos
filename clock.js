const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');

const monthName = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const clock = setInterval(function time() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    day.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.textContent = h < 10 ? '0' + h : h;
    minute.innerText = min < 10 ? '0' + min : min;
    second.innerText = sec < 10 ? '0' + sec : sec;
}, 1000);
