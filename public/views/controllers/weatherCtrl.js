angular.module('tiara').controller('weatherCtrl', function($scope, currentWeatherSvc, weekWeatherSvc) {

  $scope.getCurrentWeather = function(zip) {currentWeatherSvc.getCurrentWeather(zip).then(function(weatherObject) {
    $scope.weatherTemp = weatherObject.temp;
    $scope.weatherIcon = weatherObject.icon;
    $scope.weatherDesc = weatherObject.desc;
    $scope.weatherHum = weatherObject.hum;
    $scope.weatherPressure = weatherObject.pressure;
    $scope.weatherWindSpeed = weatherObject.windSpeed;
    $scope.degrees = "°";
    $scope.percent = "%";
    $scope.speed = "mph";
  });
};

$scope.getWeekWeather = function(zip) {weekWeatherSvc.getWeekWeather(zip).then(function(weekObject) {
    $scope.day1Temp = weekObject.temp1;
    $scope.day1hum = weekObject.humidity1;
    $scope.day1speed = weekObject.windSpeed1;
    $scope.day2Temp = weekObject.temp2;
    $scope.day2hum = weekObject.humidity2;
    $scope.day2speed = weekObject.windSpeed2;
    $scope.day3Temp = weekObject.temp3;
    $scope.day3hum = weekObject.humidity3;
    $scope.day3speed = weekObject.windSpeed3;
  });
};

  $scope.alertWorkout = function(zip) {currentWeatherSvc.getCurrentWeather(zip).then(function(weatherObject) {
    if(weatherObject.temp < 40) {
      alert("Do an at home workout! No need to freeze outside");
    }
    else if(weatherObject.temp >= 40 && weatherObject.temp < 80) {
      alert("Get on outside! It's wonderful weather for working out!");
    }
    else {
      alert("Head on to the gym. It's a little warm to be outside!");
    }
  });

  };

});
