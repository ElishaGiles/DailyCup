angular.module('tiara').controller('currentWeatherCtrl', function($scope, currentWeatherSvc) {

  currentWeatherSvc.getCurrentWeather().then(function(weatherObject) {
    $scope.weatherTemp = weatherObject.temp;
  })
  // $scope.test = "testing";

})
