const team = [
    {
        userName: 'John',
        age: 23
    },
    {
        userName: 'Anna',
        age: 12
    },
    {
        userName: 'Jane',
        age: 76
    },
    {
        userName: 'Elena',
        age: 43
    },
    {
        userName: 'Peter',
        age: 1
    },
    {
        userName: 'Anna',
        age: 54
    }
];

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

const result = team.map(function (item, index, arr) {
    return item.userName;
});

console.log(result);