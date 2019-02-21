

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
    // document.getElementsByTagName('li')[0].innerText; paizei ayti i malakia

    for (let i = 0; i < cities.length; i++) {
        const title = cities[i].innerText;
        if (filter == "" || filter == null) {
            cities[i].style.animation = '.5s alternate ease-out';
            cities[i].style.animationPlayState = "paused";
        }
        else if (title.toLowerCase().indexOf(filter) != -1) {
            cities[i].style.display = 'block';
            cities[i].style.cursor = 'pointer';
            cities[i].style.animation = 'bounce .5s alternate infinite ease-out';

        }
        else {
            cities[i].style.display = 'none';
        }
    }

}