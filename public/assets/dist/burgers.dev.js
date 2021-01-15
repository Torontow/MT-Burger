"use strict";

document.addEventListener('DOMContentLoaded', function (event) {
  if (event) {
    console.info('DOM loaded');
  } // CREATE


  var createBurgerBtn = document.getElementById('create-form');

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', function (e) {
      e.preventDefault(); // Takes the value of the text area that goes by the name "burger-name"

      var newBurger = {
        name: document.getElementById('burger-name').value.trim()
      };
      console.log(newBurger); // Send POST request to create new burger

      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBurger)
      }).then(function () {
        // Empty the form
        document.getElementById('burger-name').value = ''; // Reload the page to see the new burger.

        console.log('Created a new burger!');
        location.reload();
      });
    });
  } // UPDATE


  var devourItBtn = document.querySelectorAll('.change-devoured');

  if (devourItBtn) {
    devourItBtn.forEach(function (button) {
      button.addEventListener('click', function (e) {
        var id = e.target.getAttribute('data-id');
        var newDevouredState = {
          devoured: true
        };
        fetch("/api/burgers/".concat(id), {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newDevouredState)
        }).then(function (response) {
          console.log(response);

          if (response.ok) {
            console.log("changed devoured to: ".concat(newDevouredState));
            location.reload('/');
          }
        });
      });
    });
  }
});