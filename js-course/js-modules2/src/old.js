// Promise

// const pr = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log(1);
//         resolve();
//     }, Math.random() * 3000);

// })
// .then(() => {

//    return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log(2);
//             resolve(999);
//         }, Math.random() * 3000);

//    })
//    .then(() => {
//         console.log('OMG!');
//    })

// })
// .then((data999) => {

//     setTimeout(() => {
//         console.log(3);
//     }, Math.random() * 3000);

// })
// .then(() => {})




// new Promise((res, rej) => {
//     res(10);
//     // rej(20);
// })
// .then((data) => {
//     console.log('THEN');
//     // throw 20; // reject
//     return data + 20; // resolve
// })
// .then((data) => {
//     console.log('THEN2', data);
//     return 11;
// })
// .catch((data) => {
//     console.log('CATCH', data);
//     throw 50;
// })
// .catch(() => {
//     console.log('CATCH2');
//     throw 1;
// })
// .finally((data) => {
//     console.log('FINALLY', data);
//     // throw 10;
//     return 999;
// })
// .then((data) => {
//     console.log('THEENNNNN', data);
// })
// .catch((data) => {
//     console.log('CATCH AFTER FINALLY', data);
// })



// async await




// const pr2 = new Promise((res) => {
//     setTimeout(() => {
//         console.log(2);
//         res();
//     },  Math.random() * 3000)
// });

// const pr3 = new Promise((res) => {
//     setTimeout(() => {
//         console.log(3);
//         res();
//     },  Math.random() * 3000)
// });


// async function foo () {}
// const foo2 = async (args, ...smth) => {

//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(1);
//             rej(200);
//         },  Math.random() * 3000)
//     });

//     return 100;
// };

// foo2(10, 20, 30,40)
// .then((data100) => {})
// .catch((data200) => {
//     console.log('SOLVED', data);
// })

// const pr1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1);
//     }, 500)
// });

// const pr2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej(2);
//     }, 100)
// });

// const pr3 = new Promise((res) => {
//     setTimeout(() => {
//         res(3);
//     },  750)
// });

// Promise.any([ pr1, pr3, pr2 ])
// .then((data) => {
//     console.log(data);
// })
// .catch((data) => {
//     console.log(data);
// })

// Promise.allSettled([ pr1, pr3, pr2 ])
// .then((data) => {
//     console.log(data);
// })

// Promise.all([ pr1, pr3, pr2 ])
// .then((allPromiseResults) => {
//     console.log(allPromiseResults);
// })
// .catch((res) => {
//     console.log(res);
// })



// const reqData = {
//     name: 'Valerchik',
//     job: 'programmer',
// };

// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     body: JSON.stringify(reqData)
// })
// .then((reqObj) => {
//     if (reqObj.status === 201) {
//         alert('your account was succesfully created');
//     }

//     if (reqObj.status >= 400 && reqObj.status < 500) {
//         alert('sorry our FE dev is oboltus');
//     }

//     if (reqObj.status === 403) {
//         alert('you dont have permission to see this data, please upgrade your plan');
//     }

//     return reqObj.json();
// })
// .then((data) => {
//     reqData.id = data.id;
// })




// JSON
// const person = {
//     name: 'Valerchik',
//     age: 23,
//     stack: ["JS", "CSS"]
// };

// const personCopy = JSON.parse(JSON.stringify(person));


// const JSONedPerson = JSON.stringify(person);
// const parsedPerson = JSON.parse(JSONedPerson);




