// console.log('im script');
const numberofFilms=prompt('сколько филмов вы уже посмотрели ?','');
const personalMovieDB={
    count:numberofFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,

};
const a = prompt('один из последних просмотренных филмов ?',''),
    b = prompt('на сколько оцените его?',''),
    c = prompt('один из последних просмотренных филмов ?',''),
    d = prompt('на сколько оцените его?','');
    personalMovieDB.movies[a]=b;
    personalMovieDB.movies[c]=d;
    console.log(personalMovieDB);