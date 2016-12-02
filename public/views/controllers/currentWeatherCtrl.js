angular.module('tiara').controller('currentWeatherCtrl', function($scope, currentWeatherSvc) {

  $scope.getCurrentWeather = function() {currentWeatherSvc.getCurrentWeather().then(function(weatherObject) {
    $scope.weatherTemp = weatherObject.temp;
    $scope.weatherIcon = weatherObject.icon;
    $scope.weatherDesc = weatherObject.desc;
    $scope.weatherHum = weatherObject.hum;
    $scope.weatherPressure = weatherObject.pressure;
    $scope.weatherWindSpeed = weatherObject.windSpeed;
  })
}
})
