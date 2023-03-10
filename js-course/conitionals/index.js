// && || ??


// let age = 12;

// if (age < 10) {
//     console.log('hi!');
// } 

// if (age < 20) {
//     console.log('hello!');
// }

// if (age < 30) {
//     console.log('good day!');
// } 

// if (age < 40) {
//     console.log('privet!');
// }


// console.log(
//     age < 10 ? 
//         'hi!' :  // a
//          age < 20 ? 'hello!' : age < 30 ? 'good day' : age < 40 ? 'privet!' : '' // b
// );

// if (age < 10) {
//     console.log('hi!');
// } else if (age < 20) {
//     console.log('hello!');
// } else if (age < 30) {
//     console.log('good day!');
// } else if (age <= 40) {
//     console.log('privet!');
// }


// let dayNumber = 3;

// switch (dayNumber){
//     case 1: // 1 === dayNumber
//         console.log('Monday');
//         break;
//     case 2: // 2 === dayNumber
//         console.log('Tuesday');
//         break;
//     case 3: 
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5: // dayNumber === 5 || dayNumber === 6
//     case 6:
//         console.log('Friday');
//         break;
// }


// let userName = 1;

// if (userName === 'Oleg') {
//     console.log('double discount');
// } else if (userName === 'Petya' || userName === 'Vasya' || userName === 'Olya' || userName === 'Anna' ) {
//     console.log('discount!');
// } 


// switch (userName) {
//     case 'Oleg':
//         console.log('double discount');
//         break;
//     case 'Petya':
//     case 'Vasya':
//     case 'Olya':
//     case 'Anna':
//         console.log('discount');
//         break;
// }



// ternary operator

// let age = 10;

// bad
// age > 18 ? console.log('hello') : console.log('hi!');

// good
// console.log( age > 18 ? 'hello' : 'hi!' );
// console.log( age > 18 ? false : true );

// let dayNumber = 2;

// null ? 'Oleg' : 'Anna'
// a ? b : c

// if (age > 18) {
//     console.log('hello');
// } else {
//     console.log('hi!');
// }


// let age = 20;
// age > 10 && age < 20 ? 'hi!' : 'hello!';


// const userName = prompt('hi there!');

// if (userName === 'Petya') {
    // console.log(
    //     'You are ' + userName + ' and we greet you!'
    // );

    // ternary use case
    // console.log(
        // `You are ${ 10 ? 'a' : 'b' } and we ${ userName } greet you!`
    // );
// }



// const userName = prompt('Mitrofan')
// prompt('Fedot')

// 1. Создать программу в которой сравнивается возраст
// двух человек (Федота и Митрофана).
// Если возраст Федота больше чем возраст Митрофана,
// то должно выводится сообщение, в котором указана
// разница в возрасте: 
// «Федот старше Митрофана на 3 ».
// Если возраст Митрофана больше, то выводится такое
// сообщение:
//  «Митрофан старше Федота на 5».
// Если возраст обоих человек один и тот же, то
// выводится такое сообщение: 
// «Федот и Митрофан одного возраста».

// const fedotAge = Number(prompt('enter first age'));
// const mitrofanAge = Number(prompt('enter second age'));

// if (fedotAge < 0 || mitrofanAge < 0) {
//     console.log();
// }

// if (fedotAge > mitrofanAge) {
//     console.log(`Fedot is older than Mitrofan by ${ fedotAge  - mitrofanAge }`);
// } else if (mitrofanAge > fedotAge) {
//     console.log(`Mitrofan is older than Fedot by ${ mitrofanAge - fedotAge }`);
// } else {
//     console.log('Their ages are equal');
// }

// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них






