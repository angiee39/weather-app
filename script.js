const content = document.getElementById('content')

const form = document.createElement('form')
const i 





async function getWeatherInfo() {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ab427a4ef316df912aa8a386e9ce3e86')
  const weatherData = await response.json()
  // content.innerHTML = weatherData
  console.log(weatherData.name)
  console.log(weatherData.main.temp)
  console.log(weatherData.weather[0].main)
}
getWeatherInfo()