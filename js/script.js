'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i=0; i<2; i++){
    let a = prompt('Один из последних просмотренных фильмов?', '');
    while (a === '' || a === null || a.length > 50) {
        a = prompt('Один из последних просмотренных фильмов?', '');    
    }
    let b = prompt('На сколько оцените его?', '');
    while (b === '' || b === null || b.length > 50) {
        b = prompt('На сколько оцените его?', '');
    }
    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);