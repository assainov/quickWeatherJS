//Init weather object
const weather = new Weather;
//Init UI object
const ui = new UI;
//Init LocalTime object
const localTime = new LocalTime;

window.addEventListener('load', init);

function init() {
    weather.getNew('Dubai')
        .then(city => {
            if(city.message !== 'city not found') {
                ui.showWeather(city);

                //fetch sunrise, sunset and current time
                localTime.getTime(city.coord.lat, city.coord.lon)
                .then(time => {
                    ui.showTime(time);
                })
                .catch(error => console.log(error));
            } else {
                console.log('City not found!!!!')
            }
        })
        .catch(error => console.log(error));
}

document.querySelector('#get-weather').addEventListener('click', (e) => {
    const city = document.querySelector('#city-input').value;

    if (city !== '') {
        weather.getNew(city)
        .then(city => {
            if(city.message !== 'city not found') {
                ui.showWeather(city);
                
                //fetch sunrise, sunset and current time
                console.log(city);
            } else {
                console.log('City not found!!!!')
            }
        })
        .catch(error => console.log(error));
    } else {
        console.log('Enter correct city');
    }


});