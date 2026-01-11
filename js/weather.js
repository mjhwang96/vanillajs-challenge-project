// weather.js: 날씨와 위치를 화면에 표시

const API_KEY = "f4b11f46c63b7751b2fba3704481930f";

navigator.geolocation.getCurrentPosition(
    (position) => {
        const latitude = position.coords.latitude; // 위도
        const longitude = position.coords.longitude; // 경도

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const citySpan = document.querySelector("#weather-div span:first-child");
                const weatherSpan = document.querySelector("#weather-div span:last-child");

                citySpan.innerText = data.name;
                // 가독성 향상을 위히여 온도를 반올림
                const temp = Math.round(data.main.temp);
                weatherSpan.innerText = ` · ${data.weather[0].main} ${temp}°C`;
            })
    },
    (error) => {
        console.log(`Error: ${error}`);
    }
)