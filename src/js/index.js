import '../scss/main.scss';
import fetchWeather from './api/fetchWeather';

const convertToCelsius = (Kelvintemp) => Math.round((Kelvintemp) - 273.15);

let isOpen;
const dialog = document.getElementById('favDialog');
const cancelButton = document.getElementById('return');

document.getElementById('input_form').onkeyup = () => {
    filterCity();
}

const filterCity = () => {
    isOpen = false;
    const inputName = document.getElementById('input_form').value.toLowerCase();
    const cities = document.getElementsByTagName('li');

    Array.from(cities).forEach(city => {

        const cityName = city.innerText;
        if (inputName === "" || inputName === undefined) {
            city.style.display = 'block'
            city.style.cursor = 'default'
            city.style.animation = '.5s alternate ease-out';
            city.style.animationPlayState = "paused";
        } else if (cityName.toLowerCase().indexOf(inputName) != -1) {
            city.style.display = 'block';
            city.style.cursor = 'pointer';
            city.style.animation = 'bounce .8s alternate infinite ease-out';
            getCity(city);
        } else {
            city.style.display = 'none';
        }
    });
}


const triggerModal = (mycity) => {

    mycity.addEventListener('click', async () => {
        if (isOpen == false) {
            await showMetrics(fetchWeather(mycity.innerText));
            dialog.showModal();
            isOpen = true;
        }
    });
    cancelButton.addEventListener('click', () => {
        dialog.close();
        isOpen = false;
    });
}


const getCity = (mycity) => {
    triggerModal(mycity);
}

const showMetrics = async (asyncWeatherData) => {
    try {
        const { main } = await asyncWeatherData;
        const { temp_max, temp_min } = main || {};
        const tempMax = convertToCelsius(temp_max);
        const tempMin = convertToCelsius(temp_min);
        document.getElementById('max').innerHTML = `Temp Max:  ${tempMax} C`
        document.getElementById('min').innerHTML = `Temp Min:  ${tempMin} C`
    } catch (err) {
        console.warn(err);
    }
}
