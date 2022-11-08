// console.log('im script');
// const numberofFilms=prompt('сколько филмов вы уже посмотрели ?','');
// const personalMovieDB={
//     count:numberofFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false,

// };
// const a = prompt('один из последних просмотренных филмов ?',''),
//     b = prompt('на сколько оцените его?',''),
//     c = prompt('один из последних просмотренных филмов ?',''),
//     d = prompt('на сколько оцените его?','');
//     personalMovieDB.movies[a]=b;
//     personalMovieDB.movies[c]=d;

    // for(let i=0;i<2;i++){
    //     const a = prompt('один из последних просмотренных филмов ?',''),
    //           b = prompt('на сколько оцените его?','');
              
    //     if(a != null && b !== null && a !=='' && b !='' && a.length<50){
    //         personalMovieDB.movies[a]=b;
    //         console.log('done');
    //     }else{
    //         console.log('error');
    //         i--;
    //     }
    // }
    // if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    //     console.log('Посмотрено довоьно мало филмов');
    // }else if(personalMovieDB.count){
    //     console.log('вы классический зрител');
    // }else if (personalMovieDB.count >= 30){
    //     console.log('вы киноман');
    // }else{
    //     console.log('призашло ошибка');
    // }
    // console.log(personalMovieDB);

    // function first(){
    //     setTimeout(function(){
    //         console.log(1);
    //     },500);
    // }
    
    // function second(){
    //     console.log(2);
    // }
    // first();
    // second();

    // function learnJS(lang,callback){
    //     console.log(`i am learning ${lang}`);
    //     callback();
    // }

    // function done(){
    //     console.log('ive done course');
    // }

    // // function learnJS(lang,callback){
    // //     console.log(`i am learning ${lang}`);
    // // }
    // // learnJS('JavaScript',function(){
    // //     console.log('i`ve begaining course');
    // // });

    // learnJS('JavaScript', done);
    
    // const obj = new Object();

    const options ={
        name:'test',
        width:1024,
        height:1024,
        colors:{
            boder:'black',
            bg:'red',
        },
        makeTest: function(){
            console.log('test');

        }
    };
    // console.log(options.name);
    // delete options.name;
    // console.log(options);

    // let counter = 0;
    // for(let key in options){
    //     if(typeof(options[key])==='object'){
    //         for(let i in options[key]){
    //             console.log(`key is ${i} value is ${options[key][i]}`);
    //             counter++;
    //         }

    //     }else{
    //         console.log(`key is ${key} value is ${options[key]}`);
    //         counter++;
    //     }
    // }
    // console.log(counter);
    options.makeTest();
    // console.log(Object.keys(options).length);
    const{boder ,bg}= options.colors;
    console.log(boder);
