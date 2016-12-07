angular.module('tiara').service('weekWeatherSvc', function($http) {

  this.getWeekWeather = function(zip) {
    return $http({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&q=' + zip + '&cnt=3&APPID=b43bd17f3624f267832c89ee3b9d3667'
  }).then(function(response) {
    console.log(response);

              var weekObject = {};
              if (response.status === 200) {
                  weekObject.temp1 = response.data.main[0].temp.day;
                  weekObject.humidity1 = response.data.main[0].humidity;
                  weekObject.windSpeed1 = response.data.main[0].speed;
                  weekObject.temp2 = response.data.main[1].temp.day;
                  weekObject.humidity2 = response.data.main[1].humidity;
                  weekObject.windSpeed2 = response.data.main[1].speed;
                  weekObject.temp3 = response.data.main[2].temp.day;
                  weekObject.humidity3 = response.data.main[2].humidity;
                  weekObject.windSpeed3 = response.data.main[2].speed;
                  return weekObject;
              }
              return "It's broken, sorry!";
          });
  };
});
