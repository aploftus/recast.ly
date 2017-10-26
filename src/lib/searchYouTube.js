var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    type: 'GET', 
    data: options,
    success: function(data) {
      callback(data); 
      
    }, 
    error: function(data) {
      console.error('Recast: failed to get data', data);
    }
  });
};

window.searchYouTube = searchYouTube;
