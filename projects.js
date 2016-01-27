$(document).ready(function() {

  var projects = [];

  function Project (options) {
    this.title = options.title;
    this.category = options.category;
    this.author = options.author;
    this.publishedOn = options.publishedOn;
    this.body = options.body;
  }

  Project.prototype.toHtml = function() {
    var template = $('#template').html();
    var compiledTemplate = Handlebars.compiledTemplate;
    return compiledTemplate(this);
  };

  blogPosts.forEach(function(p) {
    projects.push(new blogPost(p));
  });

  projects.forEach(function(e) {
    $blogPosts = $('#blogPosts');
    $blogPosts.append(e.toHtml());
  });
});
