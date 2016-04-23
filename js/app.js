$(document).ready(function() {
  $('#searchButton').click(function() {
     searchYouTube($('#userInput').val());
  });
});

function searchYouTube(queryValue) {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var options = {
    part: 'snippet',
    key: 'AIzaSyAvwQCheWdgHK1JMDD_IR4AbO6DRI-CJks',
    q: queryValue
  };
  
  $.getJSON(url, options, function(data){
    data.items.forEach(function(item){
      var thumbnailUrl = item.snippet.thumbnails.default.url;
      var html = '<li><image src="'+ thumbnailUrl +'"></li>';
      $('#displayResults').append(html);
    });
  });  
}