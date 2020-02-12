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
});