function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector(`#temperature`);
}

let apiKey = '82903b2bbd2tcf4oe06f2aa9495a97b0';
let city = 'New York';
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);