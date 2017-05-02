'use strict';

console.log('\'Allo \'Allo!');

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey) {
    var layout = document.getElementById('layout');
    if (layout.classList.contains('off')) {
      layout.classList.remove('off');
      layout.classList.add('on');
    } else {
      layout.classList.remove('on');
      layout.classList.add('off');
    }
  }
});

document.getElementById("showElementBackground").addEventListener("click", function (event) {
  var body = document.body;

  if (layout.classList.contains('ghost')) {
    layout.classList.remove('ghost');
  } else {
    layout.classList.add('ghost');
  }
}, false);

document.getElementById("showBaselineGrid").addEventListener("click", function (event) {
  var body = document.body;

  if (layout.classList.contains('grid')) {
    layout.classList.remove('grid');
  } else {
    layout.classList.add('grid');
  }
}, false);
//# sourceMappingURL=main.js.map
