console.log("Script is running in the background...");

const apiKey = "90f9c611ecace4ac676d49ce3ec330d9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(" .search input");
const searchBtn = document.querySelector(" .search button");
const weatherIcon=document.querySelector(".weather-icon");
async function weather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if(response.status==404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
    }
    else{
  var data = await response.json();


  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
  

  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/icons8-partly-cloudy-day-100.png"
  }
  else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/icons8-sun-100.png"
  }

  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/icons8-cloud-lightning-100.png"
  }

  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/icons8-drizzle-100.png"
  }

  else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/icons8-fog-100.png"
  }

  
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";
    }
}

searchBtn.addEventListener("click",()=>{
    weather(searchBox.value);
});

