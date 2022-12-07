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
};

const registerEventHandlers = (event) => {
  console.log('in registerEventHandlers:', event);
  const addTempButton = document.querySelector('#increaseTemp');
  const minusTempButton = document.querySelector('#decreaseTemp');
  addTempButton.addEventListener('click', addTemp);
  minusTempButton.addEventListener('click', minusTemp);
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
