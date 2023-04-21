// 'use strict';

// function run (destination) {

//     function inner (dest) {
//         console.log(`${this.userName} in age ${this.age} runs to ${dest}`);
//     }

//     inner.call(this, destination);
// };

// function run (dest) {
//     console.log(`${this.userName} in age ${this.age} runs to ${dest}`);
//     return  10;
// }

// const person = {
//     userName: 'Valerchik',
//     run: run,
//     age: 53,
// };


// const person2 = {
//     userName: 'Larisa',
//     age: 35,
//     run
// };

// const person3 = {
//     userName: 'Aleftina',
//     age: 5,
//     run
// };


// console.log(run === person.run);
// console.log(person.run === person2.run);


// setTimeout(person2.run.bind(person), 1000);

// setTimeout(function () {
//     person.run();
// },1000);




// const arr = [ {}, {a: ['zero', 'two']}, {}, {}];


// const val = arr[1].a[0];



// console.log(val);


// function fly (destination, speed) {
//     console.log(`${this.userName} flies to ${destination} with ${speed} kmph`);
// }

// const ezh = {
//     userName: 'Sonic',
//     age: 32,
// };

// let spd = 200;

// const ezhFly = fly.bind(ezh, 'north', spd);
// const personFly = fly.bind(person, 'north', spd);


// const personFly = fly.bind(person);

// personFly.call(person2);

// person.run();

// fly.call(ezh,...arg);
// fly.apply(ezh, args);


// const run = (dest) => {
//     console.log(`${this.userName} run to ${dest}`);
// };

// const person = {
//     userName: 'Valerchik',
//     age: 23,
//     run: run
// };


// const personRun = run.bind(person);

// personRun();


// function foo () {
//     // this === person

//     const inner = () => {
//         console.log(`${this.userName} does smth`);
//     }

//     inner();
// }

// const person = {
//     userName: 'Valerchik',
//     age: 23,
// };


// foo.call(person);


// const person = {
//     userName: 'Valerchik',
//     age: 23,
//     run: () => {
//         console.log(this);
//     }
// };



// foo.call(ezh);

// foo.apply(person)




// const foo = ( ) => {
//     console.log(this);
// };


// const person = {
//     userName: 'asd',
//     run: foo
// };

// setTimeout(person.run, 1000);



// const fruits = [
//     {model: 'apple', weight: 2},
//     {model: 'pineapple', weight: 1},
//     {model: 'orange', weight:3},
//     {model: 'pear', weight:100},
//     {model: 'banana', weight: 10}
// ];

// напшите ка программку в которой
// раз в секунду мы будем кушать каждый фрукт
// для этого нужно воспользоваться функцией eat

// function eat () {
//     console.log(`We eat ${this.model} ${this.weight} kilos`);
// }

// fruits.forEach((fruit, index) => {
//     setTimeout(function () {
//         eat.call(fruit);
//     }, index * 1000);
// });

