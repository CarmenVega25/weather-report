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

function updateValue(e) {
  userInput.textContent = `For the lovely city of ${e.target.value}`;
}

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

// add api key

const getCityLoc = () => {
  axios
    .get(API, {
      params: {
        key: apiKey,
        q: 'Seattle',
        limit: 1,
        format: 'json',
      },
      headers: {
        'Accept-Encoding': 'application/json',
      },
    })
    .then((result) => {
      // console.log(result);
      const lat = result.data[0].lat;
      const lon = result.data[0].lon;
      console.log(`Seattle lat: ${lat} lon: ${lon}`);
    })

    .catch((error) => {
      console.log(error);
    });
};

console.log(getCityLoc());
