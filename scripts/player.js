
// play pause button
$('.valk-design').parent().click(function () {
    if($(this).children(".valk-design").get(0).paused){
        $(this).children(".valk-design").get(0).play();
        $(this).children(".playpause").fadeOut();
      }else{
        $(this).children(".valk-design").get(0).pause();
        $(this).children(".playpause").fadeIn();
      }
});