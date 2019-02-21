
function filterCity() {

    //const list = document.getElementById('list-cities');
    const input = document.getElementById('input_city');
    const filter = input.value.toLowerCase();
    const cities = document.getElementsByTagName('li')

    for (let i = 0; i < cities.length; i++) {
        const title = cities[i].innerText;
        if (filter == "" || filter == undefined) {
            cities[i].style.display = 'block';
            cities[i].style.cursor = 'default';
            cities[i].style.animation = '.5s alternate ease-out';
            cities[i].style.animationPlayState = "paused";
        }
        else if (title.toLowerCase().indexOf(filter) != -1) {
            cities[i].style.display = 'block';
            cities[i].style.cursor = 'pointer';
            cities[i].style.animation = 'bounce .8s alternate infinite ease-out';
            if (filter.toLowerCase() === title.toLowerCase()) {
                getCity(cities[i]);

            }
        }
        else {
            cities[i].style.display = 'none';
        }
    }
}


function triggerModal(mycity, cityName) {
    const dialog = document.getElementById('favDialog');
    // const metrics = document.getElementsByTagName('metrics');
    const cancelButton = document.getElementById('return');
    mycity.addEventListener('click', () => {
        getMetrics(cityName);
        dialog.showModal();
    });
    cancelButton.addEventListener('click', () => {
        dialog.close();
    });
}


function getCity(mycity) {
    const cityName = mycity.innerText;
    console.log(cityName);
    triggerModal(mycity, cityName);

}

function getMetrics(city) {
    console.log("fernw kairo");
    const http = new XMLHttpRequest();
    const apiKey = 'c7eb6d72320feed6f49470cab2537dd6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        if (http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.responseText));
            const res = JSON.parse(http.responseText);
            const temp_max = res.main.temp_max;
            const temp_min = res.main.temp_min;
            document.getElementById('max').innerHTML = `Temp Max: ${temp_max} F`
            document.getElementById('min').innerHTML = `Temp Min: ${temp_min} F`

        }
    }
}