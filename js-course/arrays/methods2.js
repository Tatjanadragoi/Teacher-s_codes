const team = [
  {
    userName: "John",
    age: 23,
  },
  {
    userName: "Anna",
    age: 12,
  },
  {
    userName: "Jane",
    age: 76,
  },
  {
    userName: "Elena",
    age: 43,
  },
  {
    userName: "Peter",
    age: 1,
  },
  {
    userName: "Anna",
    age: 54,
  },
];


// const evenAgePeopleAmount = team.reduce((counter, {age}) => age % 2 === 0 ? counter + 1 : counter, 0);
// const evenAgePeopleAmount2 = team.reduce(function (counter, item) {
//     if (item.age % 2 === 0) {
//         return counter + 1;
//     } else {
//         return counter;
//     }
// }, 0);



// console.log(evenAgePeopleAmount);

// const strNames = team.reduce(
//   (str, { userName }, index) => (index === 0 ? str : `${str} and ${userName}`),
//   team[0].userName
// );

// console.log(strNames);

// "John and Anna and Jane and ..."

// const allAges = team.reduce((sum, {age}) => sum + age, 0);

// console.log(allAges);

// const arrFunc = () => {
//     console.log('WORK!');
// };

// team.every( arrFunc );

// team.forEach((teamMember) => {
//     console.log(teamMember);
// });

// const checkIsAdult = ({age}) => age > 18;

// console.log( team.every(checkIsAdult) );

// const teamOfAdults = team.filter(checkIsAdult);
// console.log(teamOfAdults);

// const kovcheg = team.filter((teamMember, index, arr) => {
//     if (teamMember.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// });

// const result = team.find((item, index) => {
//     if (index < 5) {return false}

//     if (item.userName === 'Jane') {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log( result === team[2] );

// const index = team.indexOf('Jane', 5);
// console.log(team[index]);

//   const teamNames = team.map(({userName}) => userName);

// const result = team.map(function (item, index, arr) {
//     return item.userName;
// });

// console.log(result);

// const arr = [{ a: 1, b: 3 }, { a: 2 }, { a: 3, b: 5 }];

// const arr2 = arr.map(({b = 0, ...item}) => ({
//     ...item,
//     b: b**2
// }));

// console.log(arr2);

// .every()
// .some()

// const res = team.some(({age}) => age > 18);
// console.log(res);

// const arr = [5,2,3,6,1,2,3];

// const func = (sum, item, index, arr) => {
//     return item + sum;
// };

// const result = arr.reduce(func, '');

// console.log(result);

// (acc, item, index, arr) => {
//     return 1;
// }
// (1, item, index, arr) => {
//     return 100
// }
// (100, item, index, arr) => {
//     return 'hi!'
// }
// ('hi!', item, index, arr) => {

// }
// (acc, item, index, arr) => {

// }
// (acc, item, index, arr) => {

// }
// (acc, item, index, arr) => {

// }

