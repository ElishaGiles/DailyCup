angular.module('tiara').service('currentWeatherSvc', function($http) {

this.getCurrentWeather = (zip) => {
  return $http({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + zip + '&APPID=b43bd17f3624f267832c89ee3b9d3667'
}).then(function(response) {
  console.log(response);

            var weatherObject = {};
            if (response.status === 200) {
                weatherObject.temp = response.data.main.temp;
                weatherObject.icon = response.data.weather[0].icon;
                weatherObject.desc = response.data.weather[0].description;
                weatherObject.hum = response.data.main.humidity;
                weatherObject.pressure = response.data.main.pressure;
                weatherObject.windSpeed = response.data.wind.speed;
                return weatherObject;
            }
            return "It's broken, sorry!";
        });


};
});
