// Importação do objeto (array data.js) para a aplicação.

const moviesArray = require('./data.js')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map(pointer => pointer.director);
}

// Bonus 1.1: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getUniqueDirectors(moviesArray) {
    return [...new Set(moviesArray.map(m => m.director))];
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filtersDrama = moviesArray.filter(pointer => pointer.genre.includes("Drama") && pointer.director === "Steven Spielberg").length;
    return filtersDrama;
}
//console.log (`Spielberg fez ${howManyMovies(moviesArray)} de Drama!`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {return 0};
    const totalsAll = moviesArray.reduce((accum, pointer) => {return (pointer.score || 0) + accum },0);
    return parseFloat((totalsAll / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return scoresAverage(moviesArray.filter(pointer => pointer.genre.includes("Drama"))); // Usando a função da Interation 3.
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArrayYear = [...moviesArray].sort((m1, m2) => {
        if (m1.year > m2.year) return 1; 
        if (m1.year < m2.year) return -1;
        if (m1.title > m2.title) return 1;
        if (m1.title < m2.title) return -1;
    }) 
     console.log(newArrayYear.map(m => m.year + " : " + m.title));   
      return newArrayYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(m => m.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newTimeArry = [];
    for (const listMovie of moviesArray) {
        const duration = listMovie.duration;
        let hours = 0;
        let minutes = 0;
        if (duration.includes("h")) {hours = parseInt(duration.split(" ")[0].replace("h", "")) * 60;}
        if (duration.includes("min")) {minutes = parseInt(duration.split(" ")[1].replace("min", ""));}
        let newMovieTime = {...listMovie}
        newMovieTime.duration = hours + minutes;
        newTimeArry.push(newMovieTime);
    }
    return newTimeArry;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;
    const uniqueYears = [];
    return uniqueYears = Xmas.getYear(moviesArray.map(m => m.year));   
    // Não consegui terminar..
}

// Publica as funções

if (typeof module !== 'undefined') {
    module.exports = {getAllDirectors, howManyMovies, scoresAverage, dramaMoviesScore, orderByYear, orderAlphabetically, turnHoursToMinutes, bestYearAvg,
    };
  };

  // ok
