// closure this?




// reduce fbPlayers


// function sum (a,b) {
//     return a + b;
// }

// sum(2,5)

// const a = sum(4,5) - 2;



// .every(); почему останавливается

// const arr = ['John', 'Peter', 'Anna', 'Valerchik', 'John', 'Peter'];


// const result = arr.every((item, index, arr) => {
//     console.log('work');
//     return Math.random() > 0.5;
// });

// const result = arr.every((userName) => {
//     if (userName.length > 3) {
//         return console.log('valid');
//     } else {
//         return console.log('not valid');
//     }

//     // return 'adasd';
// });

// if (result) {
//     console.log('valid');
// } else {
//     console.log('not valid');
// }






// const arr = ['John', 'Peter', 'Anna', 'Valerchik', 'John', 'Peter'];


// const arr = [2,3,5,7,4,5];
// const arr2 = [5,6,2,3,6,7];


// const getEvenNumbersAmount = function (arr) {
//     const result = [];

//     for (let i = 0; i < arr2.length; i++) {
//         if ( arr2[i] % 2 === 0 ) { // число четное ?
//             result.push(arr2[i]); // насыщаю массив
//         }
//     }

//     console.log( result.length );
// };


// getEvenNumbersAmount();


// const adress = 'Berlin';
// const anotherAdress = 'Minsk';


// masterPlitki(adress, 'red');
// masterPlitki(anotherAdress, 'purple');


// function masterPlitki (hata, plitkaColor) { // hata = 'Minsk'
//     // priehatNaAdress ===>>> hata
//     // kak klast plitku

// }


// callback

// function syn (plitka) {
//     // sortiruet plitku
// }

// function doch () {}

// function masterPlitki (hata, cvet, pomoshnik) {
//     // edet na hata
//     // sort Plitka by cvet
//     pomoshnik(cvet);
//     // mazat stena
//     // klast plitka
//     // ehat domoj


// }

// masterPlitki(adress, 'red', syn);
// masterPlitki(anotherAdress,'purple', doch);


// function showGreetings (userName, show) {
//     const greeting = `Hello dear ${userName}`;

//     show(greeting);
// }


// showGreetings('Valerchik', console.log);
// showGreetings('John', document.write.bind(document));




// closure замыкание

function counterMaker () {
    let count = 0;

    function counter () {
       
        return ++count;
    }

    return counter;
}


const countFunc = counterMaker();





console.log(countFunc());

console.log(countFunc());






