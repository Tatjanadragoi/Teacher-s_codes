'use strict';


// const person = {
//     userName: 'Valerchik',
//     age: 23
// };


// const naparnik = {
//     a: 20
// };

// const o = Object.create(naparnik);
// o.test = '2';

// const p = Object.create(naparnik);
// p.blabla = 1;


// const obj = Object.create(naparnik);
// obj.type = 'obj';

// const participant = Object.create(obj);
// participant.blabla = 10;

// console.log(participant);


// const arr = []; // new Array()

// arr.push = () => {
//     console.log('MY METHOD MY RULES!');
// };

// const arr2 = [2,3,4];

// arr2.push(2);

// console.log(arr2);


// const obj2 = new Object();
// const arr = new Array();


// function Person (userName, age) {
//     // this = {}

//     this.userName = userName;
//     this.age = age;

//     // return this;
// }

// Person.prototype.run = function () {
//     console.log(`${this.userName} runs`);
// };


// function Programmer (...args) {
//     // this = {};
    
//     Person.apply(this, args);

//     // this === {userName: '', age: 23},

//     this.stack = ['JS','CSS'];
// }

// Programmer.prototype = Object.create(Person.prototype);

// // { code: func, __proto__: Person.prototype }

// Programmer.prototype.code = function () {
//     console.log(` ${this.userName}  codes`);
// };

// const pr = Programmer('Petr', 20);
// const person = new Person('HAnna', 23);

// pr.run();
// pr.code();

// person.run();


// const arr = [];
// for (let i = 0; i < 1000; i++) {
//     arr.push(new Person('Valerchik', 20));
// }
// console.log(arr);

// person.run();
// person2.run();

// console.log(person.__proto__ === person2.__proto__);


// console.log( person.__proto__ === Person.prototype );

// const obj = new Person.prototype.constructor('Anna', 23);

// console.log( Person === Person.prototype.constructor );

// Person.prototype = {
//     constuctor: Person
// }

// () => {}




// function Person (userName, age) {
//     // this = {}
//     // this.__proto__ = Person.prototype;

//     this.userName = userName;
//     this.age = age;

//     // return this;
// }

// const person = Person('John', 23);






class Person {
    constructor (userName) {
        this.userName = userName;
    }

    run () {
        console.log(`${this.userName} runs`);
    }
}



// class Programmer extends Person {

//     constructor (userName) {
//         super(userName); // Person.call(this);

//         this.stack = ['JS'];
//     }

//     code () {
//         console.log(`${this.userName} codes `);
//     }

// }


// const pr = new Programmer('Oleg');

// pr.code();



// function Person (userName) {

//     this.userName = userName;

// }

// Person.prototype.run = function () {
//     console.log(`${this.userName} runs`);
// };




// # This

// 1. Дан массив объектов:
// ```js
// const persons = [
//     {
//         name: 'One',
//         age: 1,
//     },
//     {
//         name: 'Two',
//         age: 2
//     },
//     {
//         name: 'Three',
//         age: 3
//     },
//     {
//         name: 'Four',
//         age: 4
//     }
// ];

// function sayHello () {
//     console.log(`Hello my name is ${this.name}`);
// }

// persons.forEach((person) => {
//     person.sayHello = sayHello;
// });

// function presentation (cb) {
//     console.log('Ladies and Gentlemen, here is our person: ');
//     cb();
// }

// presentation(persons[1].sayHello.bind(persons[1]));
// presentation(() => persons[2].sayHello());
// presentation(persons[1].sayHello);



