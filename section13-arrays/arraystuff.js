const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const num = [1, 2, 4];
const letter = ['a', 'b', 'c']
console.log(alphabet.length);

function printReverse(arr){
  for (let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i])
  }
}

printReverse(['a', 'b', 'c', 'd'])
// for (let i = 0; i <= alphabet.length; i--){
//   console.log(i[alphabet])
// }

function isUniform(arr){
  let first = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] !== first){
      return false
    }
  }
  return true
}

//sumArray()

function sumArray(arr) {
  let total = 0;
  arr.forEach(function(element) {
    total += element
  });
  return total;
}

// max()

function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++){
    if( arr[i] > max){
      max = arr[i]
    }
  }
  return max;
}