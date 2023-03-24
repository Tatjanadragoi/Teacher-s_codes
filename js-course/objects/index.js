// Objects


// const user = {
//     age: 87,
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         weight: 98,
//         height: 178,
//     },
//     adress: null,
// };

// console.log( user.age );
// console.log( user['age'] );

// const i = 'age';

// console.log( user[i] );


// const fieldName = prompt('enter field name');
// console.log( user[fieldName]  );



// const arr = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3
// };

// const arr2 = ['a','b','c'];
// console.log( arr2['length'] );



// const fieldName = prompt('enter field name');
// const fieldValue = prompt('enter field value');

// const userName = prompt('enter user name'); // 'Valerchik'

// const user = {
//     [userName]: userName, // 'Valerchik': 'Valerchik'
//     // userName: userName, // 'userName': 'Valerchik'
//     userName,
//     age: 87,
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         weight: 98,
//         height: 178,
//     },
//     // [fieldName]: fieldValue
// };

// console.log(user);

// console.log( user.size.height );
// console.log( user['size']['height'] );
// console.log( user['size'].height );
// console.log( user.size['height'] );

// console.log(user[fieldName]);



// const person = {
//     name: "John",
//     age: 23,
//     sitizenship: ''
// };


// const person2 = {
//     name: 'Peter',
//     age: 83,
//     sitizenship: ''
// };






// const user = {
//     age: 87,
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         weight: 98,
//         height: 178,
//     },
//     adress: null
// };


// console.log( user.adress && user.adress.city );
// console.log( user.adress?.city );

// if (user.adress) {
//     // do smth
// } else {
//     // ok
// }

// user.age = 100;
// user['age'] = 80;

// user.city = 'Berlin';
// delete user.age;



// const person = {
//     name: 'John',
//     age: 23
// };


// const person2 = person;

// person.name = 'Peter';

// console.log(person2);




// const user = {
//     age: 87,
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         weight: 98,
//         height: 178,
//     },
//     adress: null,
//     adress: {
//         country: 'Germany',
//         city: 'Berlin'
//     }
// };

// const person = {
//     name: 'John',
//     age: 23
// };


// for (let key in user) { // 'size'
//     delete user[key];
//     user['shm'+ key] = 'chtoto';
// }


// for (let key in user) {
//     if ( 
//             !Array.isArray(user[key]) &&
//             typeof user[key] === 'object' &&
//             user[key] !== null  
//         ) {
//         for (let key2 in user[key]) {
//             console.log(user[key][key2]);
//         }
//     } else {
//         console.log(user[key]);
//     }
// }


// console.log(user);


// spread destructurization rest
// spread obj

// const persons = [1,2,3,4];
// const fruits = ['asdas', 'asdad', 'xzczxc'];

// const container = [1,2,3, ...fruits, 'zxc', false,  ...persons, 'xcxzxc'];

// console.log(container);

// console.log( Math.max( ...arr ) );


// destructurization  vytaskivanie



// const persons = ['John', 'Anna', 'Peter', 'David', 'Valerchik', 'Joe'];

// let [a, blabla, elem, test] = persons;
// const [ , , , test, , , smth] = persons;
// test = 'Zinaida';

// console.log(test);
// const test = persons[3];
// const a = persons[0];
// const david = persons[3];


// rest

// const persons = ['John', 'Anna', 'Peter', 'David', 'Valerchik', 'Joe', 'Spiderman', 'Pikachu'];

// const [ g1, g2, g3, ...vtorogodniki] = persons;

// // const vtorogodniki = [v1,v2,v3]; // not good

// const vtor = [g1, ...vtorogodniki, g2];

// console.log(persons);

// console.log(g1,g2,g3);



// spread 

// const person = {
//     userName: 'Valerchik',
//     age: 60,
//     stack: {a:2, b:3}
// };

// const person2 = {
//     userName: 'Antoha',
//     age: 50,
//     stack: {a:2, b:3},
// };


// const {userName, stack: {a}, ...personPart} = person;

// console.log(personPart);

// rest, nested destruct
// const {
//     age,
//     stack: {
//         a: myNewVar
//     }
// } = person;

// const a = person.stack.a

// console.log(myNewVar);

// const { age: a, userName: b, stack: c } = person;
// const a = person.age;
// console.log(a);

// const { age, userName, stack } = person;
// const { age: shmage, userName: shmuserName, stack: smack} = person2;

// const shmage = person2.age;
// const shmuserName = person2.userName;

// const age = person.age;
// const userName = person.userName;

// console.log(stack);

// console.log(person);

// const programmer = {
//     ...person,
//     age: 99,
//     sweterWithDeer: true,
// };

// console.log(programmer);



// default values

// const persons = ['John', 'Anna', 'Antoha'];

// const [a = 'Lilia', b, c = 'Valerchik'] = persons;

// console.log(c);


// const person = {
//     userName: 'Valerchik',
//     age: 60,
//     stack: {a:2, b:3}
// };

// const {userName: nameUser = 'John'} = person;

// console.log(nameUser);



// const person = {
//     userName: 'Valerchik',
//     age: 60,
//     stack: {
       
//         companies: {
//             big: ['EPAM', 'APPLE'],
//             small: ['IP PODZABORNIKOV', 'garazhnyj kooperativ 5']
//         }
//     }
// };

// const worstLanguageEver = 'PHP';

// const {
//     stack: {
//         languages: [ 
//             ,
//             ,
//             { 
//                 name: worstLanguageEver
//             },
//             someLanguage = {name: 'Scala', exp: 1}
//         ] = [1,1,{name: 'blabla', exp: 515}]
//     }
// } = person;


// const {stack: {languages}} = person;
// const [,,,{ name : worstLanguageEver2 }] = languages;

// console.log(worstLanguageEver);

// const arr = [1,2];




