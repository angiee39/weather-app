const content = document.getElementById('content')
let fahrenheit = true

let city = ""
let temp = ""
let weather = ""

async function getWeatherInfo(location) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ab427a4ef316df912aa8a386e9ce3e86`)
  const weatherData = await response.json()
  
  console.log(weatherData.name)
  console.log(weatherData.main.temp)
  console.log(weatherData.weather[0].main)
  
  const absTemp = weatherData.main.temp
  city = weatherData.name
  temp = tempConvert(absTemp).toFixed(2)
  weather = weatherData.weather[0].main
  renderInfo()
}

function tempConvert(temp) {
  const metric = document.getElementById('metric').value
  let newTemp = 0
  if (metric === "c") {
    newTemp = temp - 273.15;
  } else {
    newTemp = (temp - 273.15) * 9/5 + 32;
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
  cityLabel.textContent = `City: ${city}`
  const tempLabel = document.getElementById('temp')
  tempLabel.textContent = `Temperature: ${temp}`
  const weatherLabel = document.getElementById('weather')
  weatherLabel.textContent = `Weather: ${weather}`
}



