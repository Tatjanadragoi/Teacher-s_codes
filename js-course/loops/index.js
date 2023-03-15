

// for ( let i = 0 ; i < 5 ; i++) {

//     // do smth

// }

// 2
// итерация
// 3

// 2
// итерация
// 3


// const i = 0;

// do {

//     console.log('POGNALI!');

// } while (i > 10)


// while (i > 10) {
//     console.log('OSTOROZHNO!');
// }


// 1. вывести в консоль числа от 7 до 3
// 2. вывести на экран двузначные числа которые делятся на 4 но не делятся на 6
// 3. написать программу которая выводит числа от 1 до n (n вводится prompt'ом)


// 1.
// for (let i = 7; i >= 3; i-- ) {
//     console.log(i);
// }

// 2.
// for (let i = 10; i < 100; i++) {
//     if (i % 4 === 0 && i % 6 !== 0) {
//         console.log(i);
//     }
// }

// fira code

// 3.
// let n = Number(prompt('enter n'));

// for (let i = 1; i <= n; i++ ) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//        continue; // 0 2 4 6 8 
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//        break;
//     }
//     console.log(i);
// }

// for (;;) {
//     if (!prompt('enter smth')) {
//         break;
//     }
//     console.log('hey there!');
// }





// let hamsters = 100;
// let tries = 0;

// do {
//     let userHamstersAmount = prompt('enter how many hamsters do u wanna get');

//     tries++;

//     if (isNaN(userHamstersAmount) || userHamstersAmount === '') {
//         alert('please enter a number!');
//         continue;
//     }

//     if (userHamstersAmount === null) {
//         break;
//     }

//     userHamstersAmount = Number(userHamstersAmount);

//     if (userHamstersAmount <= hamsters) {
//         hamsters -= userHamstersAmount;
//         alert(`You successfully got ${userHamstersAmount} hamsters`);
//     } else {
//         alert(`There is no so many hamsters!`);
//     }

// } while (hamsters > 0)

// if (hamsters === 0) {
//     console.log(`You won and made ${tries} tries!`);
// } else {
//     console.log(`You've cancelled the game`);
// }




