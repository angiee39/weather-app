const content = document.getElementById('content')
let fahrenheit = true

let city = ""
let temp = ""
let weather = ""
let sign = ""
let description = ""

async function getWeatherInfo(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ab427a4ef316df912aa8a386e9ce3e86`)
  const weatherData = await response.json()
  
  const absTemp = weatherData.main.temp
  city = weatherData.name
  temp = tempConvert(absTemp).toFixed(1)
  weather = weatherData.weather[0].main
  description = weatherData.weather[0].description
  renderInfo()
}

function tempConvert(temp) {
  const metric = document.getElementById('metric').value
  let newTemp = 0
  if (metric === "c") {
    newTemp = temp - 273.15;
    sign = "C"
  } else {
    newTemp = (temp - 273.15) * 9/5 + 32;
    sign = "F"
  }
  return newTemp
}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault();
  const location = document.getElementById('location').value
  getWeatherInfo(location)
})

function renderInfo() {
  const cityLabel = document.getElementById('city')
  cityLabel.textContent = city
  const tempLabel = document.getElementById('temp')
  tempLabel.textContent = temp + " " + sign
  const weatherLabel = document.getElementById('weather')
  weatherLabel.textContent = description
  const card = document.getElementById('card')
  card.classList.remove('hide')
  weatherIcon(weather)
}

const weatherIcon = (condition) => {
  const div = document.getElementById('weather-icon')
  div.innerHTML = ""
  const i = document.createElement('i')

  if (condition === "Clouds") {
    i.setAttribute('class', 'fas fa-cloud-sun fa-4x')
  } else if (condition === "Clear") {
    i.setAttribute('class', 'fas fa-sun fa-4x')
  } else if (condition === "Rain") {
    i.setAttribute('class', 'fas fa-cloud-rain fa-4x')
  }
  div.appendChild(i)
}

