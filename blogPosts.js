

var blogPosts = [];

function blogPost (options) {
  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
}

blogPost.prototype.toHtml = function() {
  $newblogPost = $('blogPost.template').clone();
  $newblogPost.removeClass('template');
  $newblogPost.find('#about-me').text(this.title);
  $newblogPost.find('time').text(this.publishedOn);
  $newblogPost.find('.blogBody').attr('data-category', this.category);
  $newblogPost.find('.blogBody').html(this.body);

  return $newblogPost;
};

blogPostData.forEach(function(p) {
  blogPosts.push(new blogPost(p));
});

blogPosts.forEach(function(e) {
  $blogPosts = $('#blogPosts');
  $blogPosts.append(e.toHtml());
});
