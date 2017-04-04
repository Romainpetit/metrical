console.log('\'Allo \'Allo!');

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        // open helgp widget
          var layout = document.getElementById('layout')
          if (layout.classList.contains('off')) {
            // The box that we clicked has a class of bad so let's remove it and add the good class
           layout.classList.remove('off');
           layout.classList.add('on');
          } else {
            // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
            layout.classList.remove('on');
            layout.classList.add('off');
          }
    }
});
