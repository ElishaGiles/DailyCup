angular.module('tiara').controller('currentWeatherCtrl', function($scope, currentWeatherSvc) {

  $scope.getCurrentWeather = function(zip) {currentWeatherSvc.getCurrentWeather(zip).then(function(weatherObject) {
    $scope.weatherTemp = weatherObject.temp;
    $scope.weatherIcon = weatherObject.icon;
    $scope.weatherDesc = weatherObject.desc;
    $scope.weatherHum = weatherObject.hum;
    $scope.weatherPressure = weatherObject.pressure;
    $scope.weatherWindSpeed = weatherObject.windSpeed;
    $scope.degrees = "degrees Fahrenheit";
    $scope.percent = "%";
    $scope.speed = "mph";
  })
}

})
