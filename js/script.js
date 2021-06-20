'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    writeYourGenres: function() {
        for (let i=1; i<=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre === null) {
                console.log('Вы ввели неккоректные данные или не ввели их вовсе');
                i--;
            } else {
            personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i} - это ${personalMovieDB.genres[i]}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};