class UI {
    constructor() {
        //Get all the UI elements
        this.location = document.querySelector('#city');
        this.icon = document.querySelector('#weather-icon');
        this.temperature = document.querySelector('#temperature');
        this.currentTime = document.querySelector('#current-time');
        this.wind = document.querySelector('#wind');
        this.humidity = document.querySelector('#humidity');
        this.sunrise = document.querySelector('#sunrise');
        this.sunset = document.querySelector('#sunset');
    }
    //Show weather conditions only
    showWeather(city) {
        this.location.innerHTML = city.name;
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${city.weather[0].icon}.png`);
        this.temperature.innerHTML = (city.main.temp - 273.15).toFixed(1);
        this.wind.innerHTML = `${ui.decodeSpeed(city.wind.speed)}, ${ui.decodeWindDir(city.wind.deg)}`;
        this.humidity.innerHTML = city.main.humidity + ' %';
    }
    
    //Show all times here
    showTime(time) {
        const current = new Date(time.time);

        const currentMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][current.getMonth()];
        const currentDay = current.getDate();
        const currentYear = current.getFullYear();

        const curTime = ui.formatTime(current);


        this.sunrise.innerHTML = ui.formatTime(new Date(time.sunrise));
        this.sunset.innerHTML = ui.formatTime(new Date(time.sunset));
        this.currentTime.innerHTML = `${curTime}, ${currentMonth} ${currentDay}, ${currentYear}`;
    }
    //Function takes a date object and returns the time in HH:MM PM format
    formatTime(date) {
        let hr = date.getHours();
        let min = date.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        let ampm = "am";
        if( hr > 12 ) {
            hr = hr - 12;
            ampm = "pm";
        } else if (hr == 12) {
            ampm = "pm"
        }

        return `${hr}:${min} ${ampm.toUpperCase()}`;
    }

    //function takes the speed of wind and returns a clearer name for wind
    decodeSpeed(speed) {
        if (speed < 0.5) {
            return `Calm, ${speed} m/s`;
        } else if (speed >= 0.5 && speed < 1.5) {
            return `Light air, ${speed} m/s`;
        } else if (speed >= 1.5 && speed < 3.3) {
            return `Light breeze, ${speed} m/s`;
        } else if (speed >= 3.3 && speed < 5.5) {
            return `Gentle breeze, ${speed} m/s`;
        } else if (speed >= 5.5 && speed < 7.9) {
            return `Moderate breeze, ${speed} m/s`;
        } else if (speed >= 7.9 && speed < 10.7) {
            return `Fresh breeze, ${speed} m/s`;
        } else if (speed >= 10.7 && speed < 13.8) {
            return `Strong breeze, ${speed} m/s`;
        } else if (speed >= 13.8 && speed < 17.1) {
            return `High wind, moderate gale, ${speed} m/s`;
        } else if (speed >= 17.1 && speed < 20.7) {
            return `Gale, fresh gale, ${speed} m/s`;
        } else if (speed >= 20.7 && speed < 24.4) {
            return `Strong/severe gale, ${speed} m/s`;
        } else if (speed >= 24.4 && speed < 28.4) {
            return `Storm, whole gale, ${speed} m/s`;
        } else if (speed >= 28.4 && speed < 32.6) {
            return `Violent storm, ${speed} m/s`;
        } else if (speed >= 32.6) {
            return `Hurricane force, ${speed} m/s`;
        }
    }

    // Function takes wind angle and returns a word representation of the direction
    decodeWindDir(degrees) {
        if (degrees > 350 && degrees <= 10) {
            return 'North'+' ('+ degrees +')';
        } else if (degrees > 10 && degrees <= 30) {
            return 'North-northeast'+' ('+ degrees +')';
        } else if (degrees > 35 && degrees <= 55) {
            return 'North-east'+' ('+ degrees +')';
        } else if (degrees > 55 && degrees <= 80) {
            return 'Northeast - east'+' ('+ degrees +')';
        } else if (degrees > 80 && degrees <= 100) {
            return 'East'+' ('+ degrees +')';
        } else if (degrees > 100 && degrees <= 125) {
            return 'East-southeast'+' ('+ degrees +')';
        } else if (degrees > 125 && degrees <= 145) {
            return 'South-east'+' ('+ degrees +')';
        } else if (degrees > 130 && degrees <= 150) {
            return 'South-southeast'+' ('+ degrees +')';
        } else if (degrees > 170 && degrees <= 190) {
            return 'South'+' ('+ degrees +')';
        } else if (degrees > 190 && degrees <= 215) {
            return 'South-southwest'+' ('+ degrees +')';
        } else if (degrees > 215 && degrees <= 235) {
            return 'South-west'+' ('+ degrees +')';
        } else if (degrees > 235 && degrees <= 230) {
            return 'West-southwest'+' ('+ degrees +')';
        } else if (degrees > 260 && degrees <= 280) {
            return 'West'+' ('+ degrees +')';
        } else if (degrees > 280 && degrees <= 305) {
            return 'West-northwest'+' ('+ degrees +')';
        } else if (degrees > 305 && degrees <= 325) {
            return 'North-west'+' ('+ degrees +')';
        } else if (degrees > 325 && degrees <= 350) {
            return 'North-northwest'+' ('+ degrees +')';
        }
    }

    //Function takes message and creates DOM alert element under input
    showAlert(message) {

        //Insert the alert under the input in Modal
        const form = document.querySelector('.city-form');
        const alert = document.createElement('div');
        alert.className = 'no-city-alert';
        alert.appendChild(document.createTextNode(message));

        //Make the alert color red
        alert.style.color = 'red';
        alert.style.marginTop = '1em';
        alert.style.marginLeft = '0.5em';

        form.appendChild(alert);
    }

    //Function removes the DOM alert
    removeAlert() {
        const alert = document.querySelector('.no-city-alert');
        const form = document.querySelector('.city-form');

        form.removeChild(alert);
    }
}