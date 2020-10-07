// const someObject = {
//   friends: [
//     {name: 'Malfoy'},
//     {name: 'Crabbe'},
//     {name: 'Goyle'},
//   ],
//   color: 'baby blue',
//   isEvil: true
// };

// console.log(someObjects.friends[0].name)

const movies = [
  {
    title: 'Lord of the Rings',
    hasWatched: true,
    rating: 9.5
  },
  {
    title: 'Blade Runner',
    hasWatched: true,
    rating: 10
  },
  {
    title: 'Avengers: Endgame',
    hasWatched: true,
    rating: 7
  },
  {
    title: 'Superman Vs. Batman',
    hasWatched: false,
    rating: 2
  }
]

// movies.forEach(function (movie){
//   let results = 'You have ';
//   if(movie.hasWatched){
//     results += 'watched ';
//   } else {
//     results += 'not watched '
//   }
//   results += "\"" + movie.title + "\" - ";
//   results += movie.rating + " stars" 
//   console.log(results)
// })

function buildString(movie){
  let results = 'You have ';
  if(movie.hasWatched){
    results += 'watched ';
  } else {
    results += 'not watched '
  }
  results += "\"" + movie.title + "\" - ";
  results += movie.rating + " stars"
  return results;
}

movies.forEach(function(movie) {
  console.log(buildString(movie))
})