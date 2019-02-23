import '../scss/main.scss';

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
        if( inputName === "" || inputName === undefined) {
            city.style.display = 'block'
            city.style.cursor = 'default'
            city.style.animation = '.5s alternate ease-out';
            city.style.animationPlayState = "paused";
        } else if ( cityName.toLowerCase().indexOf(inputName) != -1) {
            city.style.display = 'block';
            city.style.cursor = 'pointer';
            city.style.animation = 'bounce .8s alternate infinite ease-out';
            triggerModal(city)
        } else {
            city.style.display = 'none';
        }
    });

}


const triggerModal = (mycity) => {

    mycity.addEventListener('click', () => {
        if (isOpen == false) {
            getMetrics(mycity.innerText);
            dialog.showModal();
            isOpen = true;
        }
    });
    cancelButton.addEventListener('click', () => {
        dialog.close();
        isOpen = !isOpen;
    });
}

const getMetrics = (city) => {

    const apiKey = `c7eb6d72320feed6f49470cab2537dd6`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
        .then ( data => { return data.json()})
        .then ( res => { 
            console.log(res)
            const temp_max = Math.round((res.main.temp_max) - 273.15);
            const temp_min = Math.round((res.main.temp_min) - 273.15);
            document.getElementById('max').innerHTML = `Temp Max:  ${temp_max} C`
            document.getElementById('min').innerHTML = `Temp Min:  ${temp_min} C`})
        .catch ( err => { console.log(err)})
}
