// clock.js: 실시간 시계 구현

const clockText = document.querySelector("#clock-div h1");

// 1,2,3 등 한자리 숫자 -> 앞에 0을 padding해서 01,02,03으로 표현
function padZero(num) {
    return num.toString().padStart(2, '0');
}

// 현재 시간 구하기 (1초마다 실행하는 함수)
function getClock() {
    const today = new Date();
    
    const hour = padZero(today.getHours());
    const minute = padZero(today.getMinutes());
    const second = padZero(today.getSeconds());

    clockText.innerHTML = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);