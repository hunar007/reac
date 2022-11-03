// console.log('im all');
// console.log('wtf');
// if(4==9){
//     console.log('ok');
// }else{
//     console.log('error');
// }
// const num=50;
// if(num<49){
//     console.log('error');
// }else if(num>100){
//     console.log('mnogo');
// }else{
//     console.log('ok!');
// }
// (num===50)? console.log('ok!'):console.log('erroe');
// switch(num){
//     case 49:
//         console.log('no');
//         break;
//     case 100:
//         console.log('no1');
//         break;
//     case 50:
//         console.log('yeah');
//         break;
//     default:
//         console.log('not this round');
//         break;

// }
// const hamburger=true;
// const fries=true;
// if(hamburger&&fries){
//     console.log('я сыт!');
// }
// console.log((hamburger&&fries));

// const hamburger=2;
// const fries=1;
// const cola= 2;
// const nuggest=3;
// if(hamburger === 3 && fries && cola===2 && nuggest===3){
//     console.log('all сыт!');
// }else{
//     console.log('go out ');
// }

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num<55);

// for(let i=1;i<num;i++){
//     console.log(i);
// }

// for(i=1;i<10;i++){
//    if(i===6){
//         // break;
//         continue;
//    }
//    console.log(i);
// }
// for(let i=0;i<3;i++){
//     console.log(i);
//     for(let j=0;j<3;j++){
//         console.log(j);
//     }
// }
// let result='';
// const length=7;

// for(let i=1;i<length;i++){
//     for(let j=0;j<i;j++){
//         result+='*';
//     }
//     result+='\n';
// }


// console.log(result);

// first:for(let i=0;i<3;i++){
//     console.log(`First level:${i}`);
//     for(let j=0;j<3;j++){
//         console.log(`Second level:${j}`);
//         for(let k=0;k<3;k++){
//             if(k===2)continue first; //break
//             console.log(`Third level:${k}`);
    
//         }

//     }
// }

// for(let i=20;i > 10; i--){
//     if(i===13){
//         break;
//     }
//     console.log(i);
// }
// for(let i=2;i<=10;i++){
//     if (i % 2 == 0) {
//         console.log(i);
//      }
     
//  }

// const arrayOfNumbers = [];
// let i=0;
// for(let j=5;j<=10;j++){
//     arrayOfNumbers[i++]=j;
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for(let i=0;i<arr.length;i++){
//     // console.log( arr[i]);
//     result.push(arr[i])
    
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];


//     for(let i=0;i<data.length;i++){
        
//         if(typeof(data[i]) !='string'){
//             data[i]=data[i]*2;
//         }else{
//             data[i]=data[i]+'-done';
//         }
//     }
//     console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let j=0;
// // Пишем решение вот тут
// console.log(data.length);
// for(let i=data.length-1;i<data.length;i--){
//     console.log(data[i]);
//     if(i<=-1)break;result[j++]=data[i];
 
// }
// console.log(result);
    
// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


// function showFirstMessage(text){
//     console.log(text);
// }
// showFirstMessage('Hello World!');

// function calc(a,b){
//     return a+b;
// }
// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

// const looger=function(){
//     console.log('hello');
// };
// looger();

// const calc=(a , b)=>{
//     console.log('1');
//     return a+b ;
// };

// const usdCurr = 28;
// const eurCurr = 32 ;
// const discount=0.9;

// function convert(amount,Curr){
//     return Curr*amount;
// }
// function promition(result){
//     console.log(result*discount);
// }
// const res =convert(500,usdCurr);
// promition(res);
// promition(convert(500,usdCurr));

// function test(){
//     for (let i=0 ;i<5; i++){
//         console.log(i);
//         if(i===3)return;
//     }
//     console.log('done');
// }
// test();
// function doNothing(){}
//     console.log(doNothing===undefined);

// convert(500,usdCurr);
// convert(500,eurCurr);

// Место для первой задачи

// function sayHello(a,b,c) {
//       return a+b+c;
     
//  }
//  console.log(sayHello('Привет',',','Антон!'));
//  sayHello();

// const str='test';
// const arr=[1,2,3];
// console.log(str.length,arr.length );

let num=12.4;
console.log(Math.round(num));