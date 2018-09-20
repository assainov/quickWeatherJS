class UI {
    constructor() {
        this.location = document.querySelector('#city');
        this.icon = document.querySelector('#weather-icon');
        this.temperature = document.querySelector('#temperature');
        this.currentTime = document.querySelector('#current-time');
        this.wind = document.querySelector('#wind');
        this.humidity = document.querySelector('#humidity');
        this.sunrise = document.querySelector('#sunrise');
        this.sunset = document.querySelector('#sunset');
    }

    showWeather(city) {
        this.location.innerHTML = city.name;
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${city.weather[0].icon}.png`);
        this.temperature.innerHTML = (city.main.temp - 273.15).toFixed(1);
    }
    
    showTime(time) {
        const current = new Date(time.time);
        console.log(current.getHours());

        // this.sunrise.innerHTML = time.sunrise;
        // this.sunset.innerHTML = time.sunset;
        // this.currentTime.innerHTML = new Date(time.time);
    }
}