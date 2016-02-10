$(document).ready(function() {

  function BlogPost (options) {
    this.title = options.title;
    this.category = options.category;
    this.author = options.author;
    this.publishedOn = options.publishedOn;
    this.body = options.body;
  }

  BlogPost.prototype.toHtml = function() {
    var template = $('#template').html();
    var compiledTemplate = Handlebars.compile(template);
    return compiledTemplate(this);
  };

  var importedBlogPosts = [];
  var blogPosts = [];

  $.getJSON('blogPosts.json', function(data) {
    importedBlogPosts = data;
    importedBlogPosts.forEach(function(post) {
      blogPosts.push(new BlogPost(post));
    });
    console.log(blogPosts);

    blogPosts.forEach(function(element) {
      var $blogPosts = $('#blogPosts');
      $blogPosts.append(element.toHtml());
    });
  });
});
