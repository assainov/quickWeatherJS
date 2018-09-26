// Weather object fetches the weather with an API
class Weather {
    constructor() {
        this.APIkey = 'dd958a4aeeb73ff8cba589c22f19d901';
    }

    // Calls Open Weather Map API to get weather by city
    async getNew(city) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.APIkey}`);

        const weatherResponse = await response.json();
        return weatherResponse;
    }

}

//Local time uses Geonames to fetch current time, sunrise and sunset of the city
class LocalTime {
    constructor() {
        // username to access API
        this.username = 'assainov';
    }
    async getTime(lat, long) {
        const response = await fetch(`http://api.geonames.org/timezoneJSON?formatted=true&lat=${lat}&lng=${long}&username=${this.username}&style=full`);

        const timeData = await response.json();
        return timeData;
    }
}