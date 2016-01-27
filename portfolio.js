var contentView = {};

contentView.filterCategory = function() {
  $('#category-filter').on('change', function() {
    if($(this).val()) {
      $('#posts content').hide();
      $('#posts section[data-category="'+$(this).val()+'"]').parents().show();
    } else {
      $('#posts content').show();
    }
  });
};
$(function() {
  contentView.filterCategory();
});
