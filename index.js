const apiKey = "9b73df8ad320f587d05694720deacd27";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
    
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
  document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
  document.querySelector(".desc").innerHTML=data.weather[0].main;

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";
  }
  }


searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})