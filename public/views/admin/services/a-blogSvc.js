angular.module('tiara').service('aBlogSvc', function($http) {

  this.publishBlog = function(author, text) {
    return $http ({
      method: 'POST',
      url: "/API/blog",
      data: {
        author_id: author,
        publish_date: new Date(),
        post_title: "",
        blog_post: text,
        post_likes: 0
      }
    }).then(function(response) {
      console.log(response);
    });
  };

  this.get_user = function() {
    return $http ({
      method: 'GET',
      url: '/API/get_user'
    }).then(function(response) {
      console.log(response);
    });
  };

});
