"use strict";
const API = "acdd22f174f2ca7b8ca3bf281708a2d7";
navigator.geolocation.getCurrentPosition(async (pos) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    document.querySelector('h3').innerText = `${data.name} | ${data.weather[0].main}, ${Math.round(data.main.temp)}ºC`;
}, null);
function getClock() {
    const date = new Date();
    let hour_24 = date.getHours();
    let ampm = hour_24 < 12 ? "AM" : "PM";
    let hour_12 = hour_24 % 12;
    if (hour_12 === 0) {
        hour_12 = 12;
    }
    const hour = String(hour_12).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    document.querySelector('h2').innerText = `${hour}:${min} ${ampm}`;
    setTimeout(getClock, 1000);
}
// setTimeout()이 setInterval()보다 예외처리 관련해서 안정성이 더 좋다..?
getClock();
