angular.module('tiara').service('aBlogSvc', function($http) {

  this.publishBlog = function(author, text) {
    console.log('SVC', author, text);
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

  this.get_blogPosts = function() {
    return $http ({
      method: 'GET',
      url: "/API/blogPosts"
    }).then(function(response) {
      console.log(response);
      return response.data;
    });
  };

  this.get_user = function() {
    return $http ({
      method: 'GET',
      url: '/me'
    }).then(function(response) {
      // console.log(response);
      return response.data;
    });
  };

});
