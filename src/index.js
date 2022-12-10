const state = {
  totalCount: 0,
};

const addTemp = (event) => {
  const newAddition = document.createElement('span');
  const temperatureContainer = document.querySelector('#temperatureContainer');
  temperatureContainer.appendChild(newAddition);
  state.totalCount += 1;
  const tempCountCounter = document.querySelector('#totalCount');
  tempCountCounter.textContent = `Temp Count: ${state.totalCount}`;
  updateTempColor(state.totalCount);
};

const minusTemp = (event) => {
  const newSubtraction = document.createElement('span');
  const temperatureContainer = document.querySelector('#temperatureContainer');
  temperatureContainer.appendChild(newSubtraction);
  state.totalCount -= 1;
  const tempCountCounter = document.querySelector('#totalCount');
  tempCountCounter.textContent = `Temp Count: ${state.totalCount}`;
  updateTempColor(state.totalCount);
};

const resetCity = (event) => {
  const reset = document.createElement('span');
  const cityNameContainer = document.querySelector('#cityNameContainer');
  cityNameContainer.appendChild(reset);
  const resetButton = document.querySelector('#Reset');
  userInput.textContent = `For the lovely city of Seattle`;
};

const input = document.querySelector('input');
const userInput = document.getElementById('userInput');

input.addEventListener('change', updateValue);
// location = updateValue(userInput);

function updateValue(e) {
  userInput.textContent = `For the lovely city of ${e.target.value}`;
  const promise = axios.get('http://127.0.0.1:5000/location', {
    params: {
      q: e.target.value,
    },
  });
  const dataPromise = promise.then((response) => {
    // console.log(result.data[0].lat);
    console.log(response.data[0]);
    response.data[0];
    // let lat = result.data[0].lat;
    // let lon = result.data[0].lon;
    // console.log(`${e.target.value} lat: ${lat} lon: ${lon}`);
  });
  return dataPromise.catch((error) => {
    console.log(error);
  });
  // const city = e.target.value;
  // console.log(city);
}
const currentTemp = (event) => {
  const currentTemperature = document.createElement('span');
  const temperatureCurrentContainer = document.querySelector(
    '#temperatureContainer'
  );
  temperatureCurrentContainer.appendChild(currentTemperature);
  axios
    .updateValue()
    .get('http://127.0.0.1:5000/weather', {
      params: {
        lat: response.lat,
        lon: response.lon,
      },
    })
    .then((result) => {
      console.log(result);
      let math = ((result[main][temp] - 273.15) * 9) / 5 + 32;
      state.totalCount = math;
      console.log(math);
    })

    .catch((error) => {
      console.log(error);
    });
  // const city = e.target.value;
  // console.log(city);
};

const registerEventHandlers = (event) => {
  console.log('in registerEventHandlers:', event);
  const addTempButton = document.querySelector('#increaseTemp');
  const minusTempButton = document.querySelector('#decreaseTemp');
  addTempButton.addEventListener('click', addTemp);
  minusTempButton.addEventListener('click', minusTemp);
  const userInput = document.querySelector('#userInput');
  const resetButton = document.querySelector('#Reset');
  resetButton.addEventListener('click', resetCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

const updateTempColor = (totalCount) => {
  if (totalCount > 80) {
    document.getElementById('totalCount').style.color = 'red';
    document.getElementById('tempEmoticon').textContent =
      '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (totalCount >= 70 && totalCount <= 79) {
    document.getElementById('totalCount').style.color = 'orange';
    document.getElementById('tempEmoticon').textContent =
      '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (totalCount >= 60 && totalCount <= 69) {
    document.getElementById('totalCount').style.color = 'yellow';
    document.getElementById('tempEmoticon').textContent =
      '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (totalCount >= 50 && totalCount <= 59) {
    document.getElementById('totalCount').style.color = 'green';
    document.getElementById('tempEmoticon').textContent =
      '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (totalCount <= 49) {
    document.getElementById('totalCount').style.color = 'teal';
    document.getElementById('tempEmoticon').textContent =
      '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};

const selectElement = document.querySelector('.skyDropdown');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  if (event.target.value === 'snowy') {
    result.textContent = `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`;
  } else if (event.target.value === 'rainy') {
    result.textContent = `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`;
  } else if (event.target.value === 'cloudy') {
    result.textContent = `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`;
  } else if (event.target.value === 'sunny') {
    result.textContent = `☁️ ☁️ ☁️ ☀️ ☁️ ☁️`;
  }
});

// const axios = require('axios');

// const getCityLoc = () => {
//   // console.log(location);
//   axios
//     .get('http://127.0.0.1:5000/location', {
//       params: {
//         q: 'Seattle',
//       },
//     })
//     .then((result) => {
//       // console.log(result.data[0].lat);
//       let lat = result.data[0].lat;
//       let lon = result.data[0].lon;
//       console.log(`Seattle lat: ${lat} lon: ${lon}`);
//     })

//     .catch((error) => {
//       console.log(error);
//     });
// };

// console.log(getCityLoc('Seattle'));
