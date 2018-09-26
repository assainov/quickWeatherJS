//Init weather object
const weather = new Weather;
//Init UI object
const ui = new UI;
//Init LocalTime object
const localTime = new LocalTime;

// Fetch a default city upon window load
window.addEventListener('load', init);


//Default city
function init() {
    //Fetch weather from default city
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
                //For internal use because the default city should always be correct
                console.log('City not found!!!!');
            }
        })
        .catch(error => console.log(error));
}

//Fetch city when the input is submitted
document.querySelector('#get-weather').addEventListener('click', (e) => {
    const city = document.querySelector('#city-input').value;

    if (city !== '') {

        //Fetch weather
        weather.getNew(city)
        .then(city => {
            if(city.message !== 'city not found') {
                //show weather in the ui
                ui.showWeather(city);
                
                //fetch sunrise, sunset and current time
                localTime.getTime(city.coord.lat, city.coord.lon)
                .then(time => {
                    ui.showTime(time);
                })
                .catch(error => console.log(error));
                $('#chooseCity').modal('hide');
            } else {
                //Show an alert message when city is not correct and hide it after 2 seconds
                ui.showAlert('The city you entered was not found. Try something else.');
                setTimeout(ui.removeAlert, 2000);
            }
        })
        .catch(error => console.log(error));
    } else {
        //Show an alert message when city is not correct and hide it after 2 seconds
        ui.showAlert('Enter the correct city.');
        setTimeout(ui.removeAlert, 2000);
    }
    //Clear the input
    document.querySelector('#city-input').value = '';

});