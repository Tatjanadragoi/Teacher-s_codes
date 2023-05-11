// Promise


// setTimeout(() => {
//     console.log(1);
// }, Math.random() * 3000);

// setTimeout(() => {
//     console.log(2);
// }, Math.random() * 3000);

// setTimeout(() => {
//     console.log(3);
// }, Math.random() * 3000);


function multi2 (a) {
    return a * 2;
}

const pr = new Promise((resolve, reject) => {
    
    resolve(100);

})
.then((result) => {
    const a =  multi2(result);

    return a;
})
.then((data) => {
    console.log('data', data);

    return data - 3;
})




