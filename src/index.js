const state = {
  temperature: 0,
  city: 'Seattle',
};

const cityNameField = document.getElementById('cityNameField');
const cityNameDisplay = document.getElementById('cityNameDisplay');
const temperatureContainer = document.getElementById('temperature');
const addTempButton = document.getElementById('increaseTemp');
const minusTempButton = document.getElementById('decreaseTemp');
const resetButton = document.getElementById('Reset');
const currentTemperatureButton = document.getElementById('currentTemp');
const skyDropdown = document.querySelector('.skyDropdown');

const updateTemperature = (value) => {
  state.temperature = value;
  temperatureContainer.textContent = state.temperature;
  updateTempColor(state.temperature);
};

const addTemp = () => {
  updateTemperature(state.temperature + 1);
};

const minusTemp = () => {
  updateTemperature(state.temperature - 1);
};

const resetCity = (event) => {
  state.city = 'Seattle';
  cityNameDisplay.textContent = 'Seattle';
  getCityLoc('Seattle');
  cityNameField.value = null;
};

const updateCity = () => {
  state.city = cityNameField.value;
  cityNameDisplay.textContent = cityNameField.value;
  getCityLoc(cityNameField.value);
};

addTempButton.addEventListener('click', addTemp);
minusTempButton.addEventListener('click', minusTemp);
resetButton.addEventListener('click', resetCity);
cityNameField.addEventListener('change', updateCity);
currentTemperatureButton.addEventListener('click', updateCity);

const pageInitialLoad = (event) => {
  getCityLoc('Seattle');
};

document.addEventListener('DOMContentLoaded', pageInitialLoad);

const updateTempColor = (temperature) => {
  if (temperature > 80) {
    document.getElementById('temperature').style.color = 'red';
    document.getElementById('tempEmoticon').textContent =
      '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temperature >= 70 && temperature <= 79) {
    document.getElementById('temperature').style.color = 'orange';
    document.getElementById('tempEmoticon').textContent =
      '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temperature >= 60 && temperature <= 69) {
    document.getElementById('temperature').style.color = 'yellow';
    document.getElementById('tempEmoticon').textContent =
      '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temperature >= 50 && temperature <= 59) {
    document.getElementById('temperature').style.color = 'green';
    document.getElementById('tempEmoticon').textContent =
      '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (temperature <= 49) {
    document.getElementById('temperature').style.color = 'teal';
    document.getElementById('tempEmoticon').textContent =
      '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};

skyDropdown.addEventListener('change', (event) => {
  const emojiContainer = document.querySelector('.emojiContainer');
  if (event.target.value === 'snowy') {
    emojiContainer.textContent = `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`;
  } else if (event.target.value === 'rainy') {
    emojiContainer.textContent = `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`;
  } else if (event.target.value === 'cloudy') {
    emojiContainer.textContent = `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`;
  } else if (event.target.value === 'sunny') {
    emojiContainer.textContent = `☁️ ☁️ ☁️ ☀️ ☁️ ☁️`;
  }
});

const getCityLoc = (cityName) => {
  // console.log(location);
  axios
    .get('http://127.0.0.1:5000/location', {
      params: {
        q: cityName,
      },
    })
    .then((result) => {
      // console.log(result.data[0].lat);
      let lat = result.data[0].lat;
      let lon = result.data[0].lon;
      console.log(`Seattle lat: ${lat} lon: ${lon}`);
      getCityTemp(lat, lon);
    })

    .catch((error) => {
      console.log(error);
    });
};

const getCityTemp = (lat, lon) => {
  axios
    .get('http://127.0.0.1:5000/weather', {
      params: {
        lat: lat,
        lon: lon,
      },
    })
    .then((result) => {
      // console.log(result);
      let temp = result.data.main.temp;
      let temperatureFahrenheit = convertKelvinToFahrenheit(temp);
      console.log(temp);
      console.log(temperatureFahrenheit);
      updateTemperature(temperatureFahrenheit);
      // console.log(temp);
      console.log('blahåå');
    })
    .catch((error) => {
      console.log(error);
    });
};

const convertKelvinToFahrenheit = (tempKelvin) => {
  return Math.round(((tempKelvin - 273.15) * 9) / 5 + 32);
};
