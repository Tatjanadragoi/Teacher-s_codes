


// const schoolRank = [1,2,3,5];
// const zavodSalaries = [3,4,32,423,5,34,5,345,2];
// const kroliki = [3,4,24,23,432,2];


// function calculateAverageFromArray (arr) { // arr = schoolRank
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }

//     console.log(sum/arr.length);
// }

// calculateAverageFromArray(schoolRank);
// calculateAverageFromArray(zavodSalaries);
// calculateAverageFromArray(kroliki);

// const vashaHataKluch = [1,2,3,5];

// // const arr = [...schoolRank];
// let dublikatKlucha = vashaHataKluch;

// // dublikatKlucha = null;

// dublikatKlucha[0] = 'NALIL KRASKI';

// console.log(vashaHataKluch);

// function foo (dublikatKlucha) { // let arr = vashaHataKluch
   
//      dublikatKlucha[0] = 'KRASKA';

//     dublikatKlucha = null;

//     // console.log(dublikatKlucha);
//     // dublikatKlucha = null;
// }

// foo(vashaHataKluch);

// console.log(vashaHataKluch);


// const person = {
//     userName: 'John',
//     age: 23
// };

// const { city } = person;

// console.log(city);

// function sum ({age, userName = 'Anna'} = {age: 51, userName: 'Peter'}, num, bool) {  
//     console.log(age);
//     // console.log(a + b);
// }

// sum();


// function sum ({age, userName}, num, bool) {  
//     if (!userName) {
//         prompt('vvedi chtoto')
//     }
//     // console.log(age, userName);
// }

// sum(person, 2, false);

// function sum (a,b,c,...arr) { // let arr = [2,5]
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(arr);
// }

// sum(2,3,5,5,62,6,3,4);
// sum(6,2,8);
// sum(10,34,71,2,5);



// function sum (a, b) {
//     return a + b;
// }


// let num1 = 2;
// let num2 = 5;

// console.log(sum(num1, num2));

// const result = num2 / num1 - sum(num1, num2);

// alert(sum(2,4));

// console.log(result);


// function sum (a, b) {

//     if (!a || !b) {
//         return; // ВЫКЛ
//     }

//     return a + b;
// }

// const result = sum(2,3);


// if (!result) {
// }





// function declaration
// function foo () {}


// function expression
// const logSmth = function getSum () {
//     console.log('IM WORKING!');
// };

// console.log( logSmth() );


// anonymous function
// const doSmth = function () {
//     console.log('func working');
// };

// doSmth();


// RAZNICA


// launchTwo();

// function launchOne () {
//     console.log('one')
// }

// const launchTwo = function () {
//     console.log('two');
// };


// hoisting
// temporary dead zone

// let a = ???

// function launchOne () {
//     console.log('one')
// }

// const launchTwo = ???



// let a = 2;
// console.log(a);


// var a = 2;


// function launchOne () {
//     console.log('one')
// }

// const launchTwo = function () {
//     console.log('two');
// };

// launchTwo()


// let a = 2;
// a;

// let b = 3;
// const c = 4;

// IIFE immediately invoked function expression
// (function () {console.log('working!')}) ()




// function scope

// let num1 = 10;


// function getSum (a) {
//     let num1 = 20;
//     let test = 30;

//     return a + num1;
// }


// let a = 2;

// function outer () {
//     // a = 3;
//     let a = 3;


//     function inner () {
//         let a = 4;
//         console.log(a);
//     }

//     inner();
// }

// outer();
// console.log(a);


// TODO
// function bar () {
//     let a = 2;
//     for (;;) {
//         let a = 2;
//         function foo () {
//             console.log();
//         }
//     }
// }


// function aaaaa () {
//     console.log('aaaaaaa');
// }


// window.aaaaa();

