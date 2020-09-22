// const age = 29;

// if (age < 0) {
//   console.log('Error')
// } else if (age === 21) {
//   console.log('happy 21st birthday!!')
// } else if (Math.sign(age)) {
//   console.log('your age is odd!')
// }

// create secretNumber
// const secretNumber = 4;

// // ask user for guess
// const stringGuess = prompt('Guess a number');
// const guess = Number(stringGuess);
// alert(guess);

// //check guess
// if (guess === secretNumber) {
//   alert('Correct!!!!!!!!!!!')
// } else if (guess > secretNumber){
//   alert('Too high. Guess again!!!!!!!!!!!!!!!!!!!!!!');
// } else {
//   alert('Too Low. Guess again!!!!!!')
// }

//loops ------------------------>
// let num = -10;
// let evenNum = 10;
// let oddNum = 300;
// let divisble = 5;

// while (num <= 19) {
//   console.log (num)
//   num++
// }

// while (evenNum <= 40){
//   console.log(evenNum)
//   evenNum+=2
// }

// while (oddNum <= 333) {
//   if (oddNum % 2 !== 0){
//     console.log(oddNum)
//   }
//   oddNum+=1
// }

// while (divisble <= 50){
//   if (divisble % 5 === 0 && divisble % 3 === 0){
//     console.log(divisble);
//   }
//   divisble+=1
// }
console.log('print all numbers between -10 and 19')
for (let i = -10; i < 20; i++){
  console.log(i);
}

console.log('print all even numbers between 10 and 40');
for (let i = 10; i <= 40; i+=2){
  console.log(i);
}

console.log('print all odd numbers between 300 and 333')
for (let i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 5; i <=50; i++){
  if (i % 5 === 0 && i % 3 === 0){
    console.log(i)
  }
}