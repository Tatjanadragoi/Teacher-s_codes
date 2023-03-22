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




const user = {
    age: 87,
    isProgrammer: true,
    stack: ['HTML', 'CSS', 'JS'],
    size: {
        weight: 98,
        height: 178,
    },
    adress: null,
    adress: {
        country: 'Germany',
        city: 'Berlin'
    }
};

const person = {
    name: 'John',
    age: 23
};


// for (let key in user) { // 'size'
//     delete user[key];
//     user['shm'+ key] = 'chtoto';
// }


for (let key in user) {
    if ( 
            !Array.isArray(user[key]) &&
            typeof user[key] === 'object' &&
            user[key] !== null  
        ) {
        for (let key2 in user[key]) {
            console.log(user[key][key2]);
        }
    } else {
        console.log(user[key]);
    }
}


console.log(user);