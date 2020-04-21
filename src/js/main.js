"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const buttonAdd = document.querySelector ('.glasswater__button--add-js')
const buttonRemove = document.querySelector ('.glasswater__button--remove-js')
const glasswater__counter = document.querySelector ('.glasswater__counter--js')



buttonAdd.addEventListener('click', (e) => {
  const glasswaterCounter = document.querySelector('.glasswater__counter--js');
  glasswaterCounter.innerHTML = parseInt(glasswater__counter.innerHTML) +1;
})

buttonRemove.addEventListener('click', (e) => {
  const glasswaterCounter = document.querySelector('.glasswater__counter--js');
  glasswaterCounter.innerHTML = parseInt(glasswater__counter.innerHTML) -1;
  if (glasswaterCounter.innerHTML < 0 ) {
    glasswaterCounter.innerHTML = 0
  }
})

