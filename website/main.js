

$( ".content-img img" ).on( "click", function(event) {
  $(".overlay").show(); 
  var imageUrl = $(event.currentTarget).attr('src');

  $('.image-full').css('background-image', 'url(' + imageUrl + ')')
});

$( "h3" ).on( "click", function() {
  $(".overlay").hide(); 
});

