var blogPosts = [];

function blogPost (options) {
  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
}

blogPost.prototype.toHtml = function() {
  var $newblogPost = $('blogPost.template').clone();
  $newblogPost.removeClass('template');
  if (!this.publishedOn) {
    $newblogPost.addClass('draft');
  }

  $newblogPost.attr('data-category', this.category);


  $newblogPost.find('.byline a').html(this.author);
  $newblogPost.find('h1:first').html(this.title);
  $newblogPost.find('blogPost-body').html(this.body);
  $newblogPost.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newblogPost.find('time[pubdate]').attr('title', this.publishedOn);
  $newblogPost.find('time').html('about ' + parseInt((new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newblogPost.appendd('<hr>');
  return $newblogPost;
};

blogPosts.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

blogPost.forEach(function(ele) {
  blogPosts.push(new Article(ele));
});

blogPosts.forEach(function(a) {
  $('#blogPosts').append(a.toHtml());
});
