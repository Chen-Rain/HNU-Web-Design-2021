const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const currentYear = new Date().getFullYear();
const examTime = new Date(`January 10 ${currentYear + 1} 10:30:00`);

//  Set background year
//  year.innerText = currentYear + 1;
display.innerText = "English";

function forbtn4() {
    window.location.href="https://sso.sflep.com/cas/login?service=http%3a%2f%2fcourse.sflep.com%2fuser%2floginredirect.aspx";
}

function jumpBack() {
    window.location.href = "index.html";
}

//  Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = examTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60/ 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    //  Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

//  Show spinner before countdown
setTimeout(
    () => {
        loading.remove();
        countdown.style.display = "flex";
    }, 1000
)

//  Run every second
setInterval(updateCountdown, 1000);
