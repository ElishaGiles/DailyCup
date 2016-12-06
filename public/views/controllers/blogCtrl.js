angular.module('tiara').controller('blog-ctrl', function($scope) {

  $scope.blogPostNew = true;
  $scope.publishBlogPost = true;

  $scope.createPost = function() {
    $scope.blogPostNew = false;
    $scope.publishBlogPost = false;
  }

})
