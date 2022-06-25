'use strict';
(function () {
        var toggle = document.getElementsByClassName('dropdown__toggle')[1];
        var dropdown = toggle.parentElement;
        var drawer = document.getElementsByClassName('dropdown__drawer')[1];
        var height = drawer.scrollHeight;

        toggle.addEventListener('click', function (e) {
          e.preventDefault();
          dropdown.classList.toggle('is-open');
          if (dropdown.classList.contains('is-open')) {
            drawer.style.setProperty('height', height + 'px');
          } else {
            drawer.style.setProperty('height', '0');
          }
        });
      }());