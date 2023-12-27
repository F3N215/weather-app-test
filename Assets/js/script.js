// const apiKey = "0ef465a588f6128c27d826989d773558";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris";

// async function checkWeather(){
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

// }

// checkWeather();