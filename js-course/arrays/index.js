

// let player1 = 'John';
// let player2 = 'Peter';
// let player3 = 'Anna';
// let player4 = 'Olga';


// const team = [player1, player2, player3, player4, 'Oleg', 'Katya'];

// team[0] = 'Valera';
// team[100] = 'Petya';

// const arr2 =  [9,6,4];

// const arr = [
//     [1,2,3],
//     arr2,
//     [7,8,9]
// ];

// console.log( arr[1][2] );
// console.log( [1,2,3][1] );


// const arr = new Array(5);
// console.log(arr);


// const arr = ['John', 'Anna', 'Jane', 'Elena', 'Peter'];

// const arr2 = arr;

// const arr3 = [1,2,3];

// console.log( arr2 === arr );


// const arr = ['John', 'Anna', 'Jane', 'Elena', 'Peter'];

// const arr2 = [];

// for (let i = 0; arr2.length !== 5; i++) {
//    arr2[i] = i;
// }

// console.log(arr2);

// const str = 'hello';

// for (item of str) {
//     console.log(item);
// }


// const arr = ['John', 'Anna', 'Jane', 'Elena', 'Peter'];

// const arr2 = [1,2,3];

// .push()
// const res = arr.push('Valera', 'Katya');

// .unshift()
// const res = arr.unshift('Katya', 'Valera');

// .pop()
// const res = arr.pop();

// .shift()
// const res = arr.shift();

// arr2.push(arr.pop());

// const arr = ['John', 'Anna', 'Jane', 'Elena', 'Peter'];
// const arr2 = [1,2,3];

// .concat()
// const res = arr.concat('asdsad', 2);
// const res = arr.concat();

// console.log(arr);

// console.log(res === arr);

// .slice()
// const res = arr.slice();

// const arr = ['John', 'Anna', 'Jane', 'Elena', 'Peter', 'Anna'];
// const arr2 = [5,2,4];


// const res = arr.includes('Anna');
// const res = arr.indexOf('asdsad', 2);
// const res2 = arr.lastIndexOf('Anna', 4);
// const res = arr.reverse();
// const res = arr.sort();
// const res = arr.join(' ');
// const res = arr.splice(3, 2, 'Bob', 'Bob', 'Bob');

// ВНИМАНИЕ! МЕТОД СТРОКИ!
// console.log( str.split(' ').join('-') );
// const str = 'I like JS very much!';


// const arr = ['John', 'Anna', 'Jane', 'Elena', 'Peter', 'Anna'];

// 1.
// const arr = [3,6,3,7,3,41,51,76,23]; // for of
// найти сумму всех элементов

// 2. Найсти среднее арифметическое всех элементов 
// массива которые стоят на четных местах // for of ==>> for


// 1.
// const arr = [3,6,3,7,3,41,51,76,23]; 
// let sum = 0;

// for (let item of arr) {
//     sum += item;
// }

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);


// 2.

// let sum = 0;
// let counter = 0;

// for (let i = 0; i < arr.length; i++) {
//     if ( i % 2 === 0 ) {
//         sum += arr[i];
//         counter++;
//     }
// }


// console.log( sum/counter );


// const arr = [3,6,3,7,3,41,51,76,23]; 

// for (let item of arr) {
//     console.log(item);
// }
