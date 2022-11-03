// console.log('im script');
const numberofFilms=prompt('сколько филмов вы уже посмотрели ?','');
const personalMovieDB={
    count:numberofFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,

};
// const a = prompt('один из последних просмотренных филмов ?',''),
//     b = prompt('на сколько оцените его?',''),
//     c = prompt('один из последних просмотренных филмов ?',''),
//     d = prompt('на сколько оцените его?','');
//     personalMovieDB.movies[a]=b;
//     personalMovieDB.movies[c]=d;

    for(let i=0;i<2;i++){
        const a = prompt('один из последних просмотренных филмов ?',''),
              b = prompt('на сколько оцените его?','');
              
        if(a != null && b !== null && a !=='' && b !='' && a.length<50){
            personalMovieDB.movies[a]=b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    }
    if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('Посмотрено довоьно мало филмов');
    }else if(personalMovieDB.count){
        console.log('вы классический зрител');
    }else if (personalMovieDB.count >= 30){
        console.log('вы киноман');
    }else{
        console.log('призашло ошибка');
    }
    console.log(personalMovieDB);