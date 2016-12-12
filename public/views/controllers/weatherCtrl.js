angular.module('tiara').controller('weatherCtrl', function($scope, currentWeatherSvc, weekWeatherSvc) {

  $scope.getCurrentWeather = (zip) => {currentWeatherSvc.getCurrentWeather(zip).then(function(weatherObject) {
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

$scope.getWeekWeather = (zip) => {weekWeatherSvc.getWeekWeather(zip).then(function(weekObject) {
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

  $scope.alertWorkout = (zip) => {currentWeatherSvc.getCurrentWeather(zip).then(function(weatherObject) {
    if(weatherObject.temp < 40) {
      swal({
        title: "Do an at home workout. No need to freeze outside.",
        text: "I recommend Beachbody on Demand!",
        imageUrl: './images/snowflake.png'
      });
    }
    else if(weatherObject.temp >= 40 && weatherObject.temp < 80) {
      swal({
        title: "Get on outside!",
        text: "How about a hike or a run?",
        imageUrl: "./images/thumb-up-sun.jpg"
      })
    }
    else {
      swal({
        title: "Head on to the gym or stay home.",
        text: "It's way to hot to be outside.",
        imageUrl: "./images/too_hot.jpg"
      })
    }
  });

  };

});
