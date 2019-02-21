

//let city = document.getElementById('city').value;
//city.addEventListener("city", getData(city));

// function getData() {
//     // console.log(city);
//     // let city = document.getElementById('input_city').value;
//     let city = document.querySelector('input').value;
//     console.log(city);
//     if (city === "Athens") {
//         const http = new XMLHttpRequest();
//         const apiKey = 'c7eb6d72320feed6f49470cab2537dd6';
//         //const url = `api.openweathermap.org/data/2.5/weather?q=London`;
//         const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=c7eb6d72320feed6f49470cab2537dd6';
//         http.open("GET", url2);
//         http.send();
//         http.onreadystatechange = (e) => {
//             console.log(http.responseText);
//             console.log(e);
//         }
//     }

// }


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

// function getMetrics() {
//     const cities = document.getElementsByTagName('li');
//     Array.from(cities).forEach(element => {
//         if (element.style.display = 'block') {
//             console.log(element);

//         }
//     });
// }

function triggerModal(mycity,cityName) {
    const dialog = document.getElementById('favDialog');
    const cancelButton = document.getElementById('return');
    mycity.addEventListener('click', () => {
        dialog.showModal();
        getMetrics(cityName);
    });
    cancelButton.addEventListener('click', () => {
        dialog.close();
    });
}


function getCity(mycity) {
    const cityName = mycity.innerText;
    console.log(cityName);
    triggerModal(mycity,cityName);
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
            console.log(http.responseText);
        }
    }
}