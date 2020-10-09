const h1 = document.querySelector('h1');
let blueText = false;

setInterval(function() {
  if(blueText) {
    h1.style.color = 'black';
  } else {
    h1.style.color = 'gold'
  }
  blueText = !blueText
}, 1900)

const body = document.querySelector('body');
let isBlue = false;

setInterval(function() {
  if(isBlue){
    body.style.background = 'gold'
  } else {
    body.style.background = 'black'
  }
  isBlue = !isBlue;
}, 1900)