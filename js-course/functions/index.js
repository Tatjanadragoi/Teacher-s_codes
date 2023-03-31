


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

//     for (let i = 0; i < 5; i++) {
//         let a = 3;

//         function foo () {
//             console.log(a);
//         }

//         foo();
//     }
// }


// bar();

// var a = 2;
// let b = 3;

// let a = 3;

// if (true) {
//     let a = 2;
// }


// console.log(a); 


// let sum = 0;
// let i = 0;
// for (; i < 10; i++) {
//     sum += i;
// }

// console.log(sum / i);

// let foo = 0;

// if (true) {
//     foo = function () {
//         console.log('WORKING');
//     }
// }

// foo();


// arrow functions

// function sum (a,b) {
//     return a + b;
// }

// const sum = (a, b) => a + b;
// const squareIt = a => a * a; // единственный вариант без круглых скобок
// const zeroArgs = () => {};
// const destructArg = ({age}) => age * 2;

// function squareItAgain (a) {
//     return a * a;
// }

// console.log( sum(2,6) );

// const foo = (...args) => {
//     console.log(args);
// };

// foo(2,3,4,5);

// const getAverageFromArgs = (...args) => {
//     let sum = 0;

//     for (let i = 0; i < args.length; i++) {
//         sum += i;
//     }

//     return sum/args.length;
// };


// callback 

// function passCorrectMessageENG () {
//     console.log('PASSWORD IS CORRECT!');
// }

// function passIncorrectMessageENG () {
//     console.log('PASS IS INCORRECT');
// }

// function passCorrectMessageDE () {
//     console.log('richtig');
// }

// function passIncorrectMessageDE () {
//     console.log('nicht');
// }


// function checkPassword (callback1, callback2) {
//     const userPass = prompt('enter pass');
//     const correctPass = 'admin';

//     if (userPass === correctPass) {
//         if (typeof callback1 === 'function') {
//             callback1();
//         }               
//     } else {
//         callback2();
//     }
// }

// const a = 2;
// const b = false;
// const c = 'asd';
// const d = [];
// const e = {};
// const f = function () {};
// const g = () => {};



// checkPassword.age = 23;
// checkPassword.userName = 'John';

// console.log( checkPassword.age )

// function sum (a,b) {
//     return a + b;
// }

// sum(false, undefined);

// checkPassword(2, 'hello');
// checkPassword(passCorrectMessageENG, passIncorrectMessageENG);
// checkPassword(passCorrectMessageDE, passIncorrectMessageDE);

// passCorrectMessageDE();

// boxing unboxing
// console.log( 'hello world!'.length );
// console.log( {} + '' )
// console.log( checkPassword.toString() );


// first class objects


// const foo = (cb1, cb2) => cb1(cb2(10));

// console.log(foo(
//     a => a + a,
//     a => a - 5
// ));

// const arr = [
//     a => a - 2,
//     a => a + 3,
//     a => a * 2,
//     function (a,b,...args) {
//         // for (;;) {
//         //     asdasdasd
//         // }

//         // if () {}
//     }
// ];

// console.log( arr[3](5) );

// const foo = function () {};
// foo.age = 2;

// console.dir(foo.length);

// for ( let key in foo ) {
//     console.log(key);
// }



