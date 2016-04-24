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
      var videoUrl = 'https://www.youtube.com/watch?v=' + item.id.videoId;
      var html = '<li><a href="'+ videoUrl +'"><image src="'+ thumbnailUrl +'"></a></li>';
      $('#displayResults').append(html);
    });
  });  
}


