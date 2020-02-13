document.addEventListener('DOMContentLoaded', function(event) {
  var room = document.getElementById('room');
  var cellCount = 4;
  var selectedIndex = 0;

  function rotateRoom() {
    var angle = selectedIndex / cellCount * -360;
    room.style.transform = 'rotateY(' + angle + 'deg)';
  }

  var prevArrow = document.getElementById('arrow-left');
  prevArrow.addEventListener( 'click', function() {
    selectedIndex++;
    rotateRoom();
  });

  var nextArrow = document.getElementById('arrow-right');
  nextArrow.addEventListener( 'click', function() {
    selectedIndex--;
    rotateRoom();
  });

  var infoButton = document.getElementById('info-link');
  var infoWrapper = document.getElementById('info-wrapper');
  var body = document.getElementById('window');
  infoButton.addEventListener( 'click', function() {
    if (infoWrapper.classList.contains("hidden")) {
      infoWrapper.classList.remove("hidden");
    } else {
      infoWrapper.classList.add("hidden");
    }
  });
  body.addEventListener( 'click', function() {
    if (infoWrapper.classList.contains("hidden")) {
      return false;
    } else {
      infoWrapper.classList.add("hidden");
    }
  });
});