import '../scss/main.scss';
import fetchWeather from './api/fetchWeather';
import "@babel/polyfill";

const convertToCelsius = (Kelvintemp) => Math.round((Kelvintemp) - 273.15);

let isOpen;
const dialog = document.getElementById('favDialog');
const cancelButton = document.getElementById('return');

document.getElementById('input_form').onkeyup = () => {
    filterCity();
}

const filterCity = () => {
    isOpen = false;
    const input = document.getElementById('input_form');
    const inputName = input && input.value && input.value.toLowerCase();

    const cities = document.getElementsByTagName('li');

    Array.from(cities).forEach(city => {

        const cityName = city.innerText;
        if (inputName === "" || inputName === undefined) {
            city.setAttribute("style", "display:block; cursor:default; animation:.5s alternate ease-out; animationPlayState: paused ;");
        } else if (cityName.toLowerCase().indexOf(inputName) != -1) {
            city.setAttribute("style", "display:block; cursor:pointer; animation: bounce .8s alternate infinite ease-out;");
            triggerModal(city);
        } else {
            city.setAttribute("style", "display:none;");
        }
    });
}


const triggerModal = (mycity) => {

    mycity.addEventListener('click', async () => {
        if (!isOpen) {
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
