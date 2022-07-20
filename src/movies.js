const moviesCopy = [
  {
    title: "The Shawshank Redemption",
    year: 1974,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"], //array
    score: 9.3,
  },
  {
    title: "The Godfather",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
  {
    title: "The Dark Knight",
    year: 1974,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Thriller"],
    score: 9,
  },
  {
    title: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    duration: "2h 4min",
    genre: ["Adventure", "Drama", "Thriller"],
    score: 8,
  },
];

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}
let test = getAllDirectors(moviesCopy);
// console.log(test);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// filter the movies from Steven
// create a condition for only drama movies

function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let movieSteven = moviesArray
    .filter((movie) => movie.director === "Steven Spielberg")
    .filter((movie) => movie.genre.includes("Drama"));
  return movieSteven.length;
}

let test1 = howManyMovies(moviesCopy);

console.log(test1);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const score = moviesArray
    .map((movie) => movie.score)
    .reduce((totalScore, oneScore) => totalScore + oneScore);
  const averageScore = score / moviesArray.length;
  return averageScore.toFixed(2);
}

console.log(scoresAverage(moviesCopy));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovie = moviesArray.filter(
    (movie) => movie.genre.indexOf("Drama") > 0
  );
  const dramaScore = dramaMovie
    .map((movie) => movie.score)
    .reduce((totalScore, movieScore) => totalScore + movieScore);
  const averageDramaScore = dramaScore / dramaMovie.length;
  return averageDramaScore.toFixed(2);
}

console.log(dramaMoviesScore(moviesCopy));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const yearOrder = [...moviesArray].sort(function (a, b) {
    if (a.year === b.year) a.title - b.title;
    return a.year - b.year;
  });

  return yearOrder;
}

console.log(orderByYear(moviesCopy));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleOrder = [...moviesArray].map((movie) => movie.title).sort();
  if (titleOrder.length <= 20) return titleOrder;
  return titleOrder.slice(0, 20);
}

console.log(orderAlphabetically(moviesCopy));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
