var articles = [];

function Article (options) {
  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('category', this.category);
  $newArticle.attr('data-category', this.category);
  //finds the anchor tag and updates it and gives it an hfref value. .text chained for less code
  $newArticle.find('a').attr('href', this.authorUrl).text(this.author);
  $newArticle.find('h1').text(this.title);//finds any h1 tag to change text whenever needed
  $newArticle.find('section').html(this.body);//finds the section and puts the body data in it that's stored as html
  $newArticle.find('time[pubdate]').attr('pubdate', this.publishedOn);//creates a new pubdate attr using the publishedOn data

  //Includes the pub date as a 'title'attr to show on hover
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  //Displays the date as a relative number of "days ago"
  $newArticle.find('time').html('about' + parseInt((new Data() - new Data(this.publishedOn))/60/60/24/1000) + 'days ago');

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');//removes template class because it is only an instance of the template being used

  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date( a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a) {
  $('articles').append(a.toHtml());
});



blog.rawData = [
  {
    title:       'Blog Post #1',
    category:    'Learning how to code',
    author:      'Rachel Burke',
    authorUrl:   '',
    publishedOn: '2016-01-11',
    body:        '<p>}',
  },
  {
    title:       'Blog Post #2',
    category:    'More learning how to code',
    author:      'Rachel Burke',
    authorUrl:   '',
    publishedOn: '',
    body:        '<p>}',
  },
  {
    title:       'Blog Post #3',
    category:    'More learning how to code',
    author:      'Rachel Burke',
    authorUrl:   '',
    publishedOn: '',
    body:        '<p>}',
  }

];
