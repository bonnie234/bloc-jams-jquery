.helper

$('#time-control input').on('input', function (event) {
  playPauseAndUpdate(album.songs.length);
});

  $('#time-control .total-time').text( totalTime );
