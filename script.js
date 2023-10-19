$(function(){

    const opVideo = $('#opv').get(0);
    $('#opv-wrap').fadeIn(1000);
  
    opVideo.addEventListener('loadedmetadata', function() {
      const playTime = opVideo.duration * 1000 - 1000;
  
      // 確認用
      console.log('動画の時間（長さ）： ' + opVideo.duration);
      console.log('動画の表示時間： ' + playTime);
  
      setTimeout(function(){
        $('#opv-wrap').fadeOut(1000, function(){
          $('main').fadeIn(1000);
        });
      }, playTime);
  
    });
  
  });