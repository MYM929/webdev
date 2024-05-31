const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "44c43750738a8ef918eacc47661e5230";

weatherForm.addEventListener("submit", async event => {
  event.preventDefault();
  const city = cityInput.value;
  if(city){
    try{
      const weatherData = await getWeatherData(city);
      disPlayWeatherInfo(weatherData);
    }
    catch(error){
      console.error(error);
      displayError(error);
    }
  }
  else{
    displayError("Please enter a city");
  }
});

async function getWeatherData(city){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  // console.log(response);
  if(!response.ok){
    throw new Error("Could not fetch weather data");
  }
  return await response.json();
}
function disPlayWeatherInfo(data){
  // console.log(data);
  const {name: city, 
         main: {temp, humidity}, 
         weather: [{description, id}]} = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay     = document.createElement("h1");
  const tempDisplay     = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay     = document.createElement("p");
  const weatherEmoji    = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
  // tempDisplay.textContent = `${((temp-273.15)*9/5+32).toFixed(1)}°F`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
}
function getWeatherEmoji(weatherid){

}
function displayError(message){
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
