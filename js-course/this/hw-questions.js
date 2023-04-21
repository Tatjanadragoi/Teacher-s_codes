
// 3. Создать функцию `classNameEditor()`, задача которой "управлять"
// css-классами. Функция должна принимать строку с названием css-класса и булево значние.
// Если булево значение `true`, то функция должна добавлять переданный css-класс,
// если `false`, то найти и удалить значение из css-класса.
// Функция всегда должна возвращать текущее значение css-класса.

// Пример:
// ```js
// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз (это невозможно тк класс уже удален)
// ```


// function getClassNameEditor () {
//     let cssClass = '';

//     return (className, shouldAddClass) => {       
//         if (className && shouldAddClass && !cssClass.includes(className)) {
//             cssClass = cssClass + ` ${className}`;
//         } else if (className && !shouldAddClass) {
//             const cssArrClass = cssClass.split(' '); //  ['smth', 'test-case']

//             const cssFilteredClassNames = cssArrClass.filter((cls) => cls !== className); // ['smth']

//             cssClass = cssFilteredClassNames.join(' '); // 'smth'
//         }      

//         return cssClass.trim();
//     };
// }

// const classNameEditor = getClassNameEditor();

// console.log(classNameEditor());
// console.log(classNameEditor('test', true));
// console.log(classNameEditor('smth', true));
// console.log(classNameEditor('test', false));
// console.log(classNameEditor('test', false));


// 4. Дан массив объектов:
// ```js
// const fbTeam = [
//      {
//      playerName:"Messi",
//      team:"Barcelona"
//      },
//      {
//      playerName:"Suarez",
//      team:"Barcelona"
//      },
//      {
//      playerName:"Ronaldo",
//      team:"Juventus"
//      },
//      {
//      playerName:"Buffon",
//      team:"Juventus"
//      },
//      {
//      playerName: 'Valerchik',
//      team: 'Vedrich97'
//      },
//      {
//      playerName:"Gonsalo",
//      team:"Juventus"
//      },
//      {
//      playerName:"Pedro",
//      team:"Chelsea"
//      },
//     {
//      playerName:"Zuma",
//      team:"Chelsea"
//      },
//      {
//      playerName:"Rico",
//      team:"PSG"
//      }
//  ];

// ```
// С помощью метода `reduce()` преобразуйте его в объект вида:

// const obj = {};

// const teamName = 'Barcelona';

// obj[teamName] = []; // {}.Barcelona
// obj[fbTeam[2].team] = []; // {}.Juventus



// const fbPlayersByTeams = fbTeam.reduce((otvet, player) => {

//     if (!otvet[player.team]) { // если поле НЕ существует
//         // создать поле (должен быть массив)
//         otvet[player.team] = [];
//     } 
      
//     // добавить в массив игрока
//     otvet[player.team].push(player);

//     return otvet;
// }, {}); 

// console.log(fbPlayersByTeams);

// ```js
// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
// }
// ```

// 4. двумерный массив редьюсом макс найти


// const arr = [
//     [3,4,2,3,4,5],
//     [24,51,3243242,3],
//     [2,3,15,1,53,5,324,2]
// ];

// const calculateSum = (sum, num) => sum + num;

// const arrSums = arr.map((arr) => {
//     return arr.reduce(calculateSum);
// });

// const biggestArrIndex = arrSums.indexOf(Math.max(...arrSums));

// console.log(arr[biggestArrIndex]);

// [2,3,15,1,53,5,324,2]
// const maxArr = arr.reduce((otvetArr, currentArr) => {
//     const maxOtvetSum = otvetArr.reduce(calculateSum, 0);
//     const maxCurrentArrSum = currentArr.reduce(calculateSum, 0);

//     return maxOtvetSum > maxCurrentArrSum ? otvetArr : currentArr;
// });

// console.log(maxArr);

