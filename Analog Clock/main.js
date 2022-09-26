const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let now = new Date();
    let hrDegree = now.getHours() * 30;
    let minDegree = now .getMinutes() * deg;
    let secDegree = now.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hrDegree) + (minDegree/12)}deg)`;
    mn.style.transform = `rotateZ(${minDegree}deg)`;
    sc.style.transform = `rotateZ(${secDegree}deg)`;
}) 