// debounce throttling
// setTimeout();
// setInterval();
// clearTimeout();
// clearInterval();


// window.addEventListener('mousemove', () => {
//     console.log('IM MOVING!');
// })

// const sum = (a, b) => {
//     console.log(a + b);
// };

// const wrapperSum = () => {
//     sum(2,3);
// }

// const intervalId = setInterval(wrapperSum, 1000);

// clearInterval(intervalId);


// каждую секунду выводить в консоль "хеллоу!"
// после 5 раз прекратить вывод


// const intervalId = setInterval(() => {
//     console.log('hello!');
// }, 1000);


// setTimeout(() => {
//     clearInterval(intervalId);
// }, 5000);

let counter = 0;

const intervalId = setInterval(() => {
  console.log("хелллоу");
  counter++;
  if (counter === 5) {
    clearInterval(intervalId);
  }
}, 1000);


// const timeoutId = setTimeout(wrapperSum, 1000);
// const blabla = setTimeout(wrapperSum, 2000);
// const testttt =  setTimeout(wrapperSum, 3000);

// clearTimeout(timeoutId);

