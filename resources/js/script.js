// $(document).ready(function() {
//     $("h1").click(function(){
//         $(this).css("color","#3b5998");
//     });
// });
$(document).ready(function () {
  // code using waypoints to make navbar sticky
  $(".js--about-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").removeClass("sticky-nav");
    }
  });
  //get the quote button
  $(".js--scroll-to-contact").click(function () {
    $('html, body').animate({scrollTop:$('.js--contact').offset().top}, 1000)
  });
  
  $(".js--about-section").waypoint(function (direction) {
      $(".js--about-box").addClass("animate__animated animate__fadeIn");
  }, {
    offset:'50%'
  });
  $(".js--services-section").waypoint(function (direction) {
      $(".js--service-box").addClass("animate__animated animate__zoomIn");
  }, {
    offset:'50%'
  });
  // give pulse animation to only enterprise box 
  $(".js--packages-section").waypoint(function (direction) {
      $(".js--enterprise").addClass("animate__animated animate__pulse");
  });
});
