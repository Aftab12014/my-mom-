document.querySelectorAll('.paper').forEach(paper => {
  paper.addEventListener('touchstart', function(e) {
      let touch = e.touches[0];
      let shiftX = touch.clientX - paper.getBoundingClientRect().left;
      let shiftY = touch.clientY - paper.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
          paper.style.left = pageX - shiftX + 'px';
          paper.style.top = pageY - shiftY + 'px';
      }

      function onTouchMove(event) {
          moveAt(event.touches[0].pageX, event.touches[0].pageY);
      }

      document.addEventListener('touchmove', onTouchMove);

      paper.ontouchend = function() {
          document.removeEventListener('touchmove', onTouchMove);
          paper.ontouchend = null;
      };
  });

  paper.ontouchstart = function() {
      return false;
  };
});
