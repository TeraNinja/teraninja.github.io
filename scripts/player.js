
// fade in/out player icon
$('.valk-wrapper').click(function () {
    
    if ($(this).children(".valk-player").get(0).paused) {

        // fade out icon and start video
        $(this).children(".valk-player").get(0).play();
        $(this).children(".playpause").fadeOut();

        // fade in icon when video ended
        $(this).children(".valk-player").get(0).addEventListener('ended',function(){
            $('.valk-wrapper').children(".playpause").fadeIn();
        });

    } 
    
    else {
      
        // fade in icon when video paused
        $(this).children(".valk-player").get(0).pause();
        $(this).children(".playpause").fadeIn();

    }


});


