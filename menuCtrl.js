angular.module("tiara").controller("menu-ctrl", function($scope) {

  function openNav2() {
      document.getElementById("practice-menu").style.width = "40vw";
  }

  function closeNav2() {
    document.getElementById("practice-menu").style.width = "0px";
  }

})
