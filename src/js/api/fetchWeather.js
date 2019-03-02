export default (city) => {
    const apiKey = `c7eb6d72320feed6f49470cab2537dd6`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return fetch(url)
        .then(data => { return data.json() })
}
