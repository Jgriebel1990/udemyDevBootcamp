// click event vvv

// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//   const newColor = makeRandColor();
//   document.body.style.backgroundColor = newColor;
//   h1.innerText = newColor;
// })

// --------------------------------------------------

// Keyword This vvv

// const makeRandColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// const buttons = document.querySelectorAll('button')

// for( let button of buttons ) {
//   button.addEventListener('click', colorize)
// }

// const h1s = document.querySelectorAll('h1');

// for(let h1 of h1s){
//   h1.addEventListener('click', colorize)
// }

// function colorize(){
//   this.style.backgroundColor = makeRandColor();
//   this.style.color = makeRandColor();
// }

// --------------------------------------------------
//keyboard events vvv

// document.querySelector('button').addEventListener('click', function(evt){
//   console.log(evt)
// });

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(evt){
//   console.log(evt.key)
//   console.log(evt.code)
// })

// input.addEventListener('keyup', function(){
//   console.log('keydup')
// })

// window.addEventListener('keydown', function(e){
//     console.log(e.code)
// })

// const tweetForm = document.querySelector('#tweetForm')
// const tweetCon = document.querySelector('#tweet')
// tweetForm.addEventListener('submit', function(e){
//   e.preventDefault();
//   const usernameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet;
//   addTweet(usernameInput.value, tweetInput.value);
//   usernameInput.value = '';
//   tweetInput.value = ''; 
// })

// const addTweet = (username, tweet) => {
//   const newTweet = document.createElement('li');
//   const bTag = document.createElement('b');
//   bTag.append(username);
//   newTweet.append(bTag);
//   newTweet.append(` - ${tweet}`);
//   tweetCon.append(newTweet);
// }

// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// // input.addEventListener('change', function(e){
// //   console.log('ballelrlel')
// // })

// input.addEventListener('input', function(e){
//   h1.innerText = input.value
//   console.log(e);
// });

// const input = document.querySelector('input');
// const h1 = document.querySelector('h1')

// input.addEventListener('input', function(e){
//   if(input.value === ''){
//     h1.innerText = `Enter Your Username`
//   } else {
//     h1.innerText = `Welcome, ${input.value}`
//   }
// })