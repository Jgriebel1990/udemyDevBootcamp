const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const colors = ['red', 'blue', 'purple', 'green'];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
colors.forEach(function(colors) {
  console.log(colors);
});

numbers.forEach(function(number) {
  if (number % 3 === 0){
    console.log(number)
  }
});