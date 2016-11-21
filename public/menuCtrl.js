angular.module("tiara").controller("menu-ctrl", function($scope) {

  $scope.function openNav2() {
      document.getElementById("practice-menu").style.width = "40vw";
  }

  $scope.function closeNav2() {
    document.getElementById("practice-menu").style.width = "0px";
  }

})
