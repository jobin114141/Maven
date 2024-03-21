// ------- PRELOADER -------//
$(window).load(function () {
  $('.preloader').fadeOut("slow"); // set duration in brackets    
});
// ----- GOOGLE MAP ----- //
var map = '';
var center;

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(25.243660, 55.347439),
    scrollwheel: false
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  google.maps.event.addDomListener(map, 'idle', function () {
    calculateCenter();
  });

  google.maps.event.addDomListener(window, 'resize', function () {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
  document.body.appendChild(script);
}

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {

  // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
  //$('.navbar-collapse a').click(function () {
    //$(".navbar-collapse").collapse();
  //});

  // --------- PORTFOLIO IMAGE ----- //
  $('#portfolio a').nivoLightbox({
    effect: 'fadeScale',
  });

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
    {
      mobile: false
    });
  wow.init();

  // ------- GOOGLE MAP ----- //
  loadGoogleMap();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

});

function sendEmail() {
  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Constructing the mailto link with subject, body, and recipient
  var recipient = 'info@mavenconsults.com';
  var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);

  // Open user's default email client with pre-filled details
  window.location.href = mailtoLink;
}