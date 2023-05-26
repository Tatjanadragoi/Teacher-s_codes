// DOM

// const li = document.body.children[2].children[1];

// const body = li.parentElement.parentElement;

// console.log(li.nextElementSibling.nextElementSibling);

// console.log(li.previousElementSibling.previousElementSibling);



// const ol = document.getElementsByTagName('ol')[0];
// const li = ol.getElementsByTagName('li')[0];

// const li = document.getElementsByClassName('my-li')[0];

// const li = document.getElementById('one');


// console.log(li);

// 1. добыть элемент с айди 'one'
// 2. ДВИГАЯСЬ ОТ one добыть span (item5)
// 3. ДВИГАЯСЬ ОТ span(item5) добыть span (item2) В ТЕГЕ UL

// const one = document.getElementById('one');
// const item5 = one.nextElementSibling.nextElementSibling.children[0];
// const item2 = item5.parentElement.parentElement.previousElementSibling.getElementsByTagName('li')[1];

// console.log(one);
// console.log(item5);
// console.log(item2);




// let deadLis = document.querySelectorAll('ol > li');
// const aliveLis = document.getElementById('ol').getElementsByTagName('li');


// const item3 = document.getElementById('one');
// item3.addEventListener('click', () => {
//     item3.remove();

//     deadLis = document.querySelectorAll('ol > li');

//     console.log(deadLis)
//     console.log(aliveLis)
// });

// 1. Сделайте запрос по адресу `https://reqres.in/api/users?page=1`, обработайте ответ и выведите в консоль только тех юзеров у которых в поле `last_name` не менее 5ти символов
// 2. Сделайте запрос по адресу `https://reqes.in/api/users?page=1`, обработайте ошибку этого запроса и выведите в консоль `Не удалось загрузить данные`
// 3. Cделайте запрос `https://reqres.in/api/users?page=1`, ПОСЛЕ чего найдте `id` пользователя под именем и фамилией `Emma Wong`, сделайте следующий запрос на `https://reqres.in/api/users/${id}`, ПОСЛЕ выведите данные пользователя в консоль


// fetch('https://reqres.in/api/users?page=1')
// .then((responseObj) => responseObj.json())
// .then(({data}) => {
//     data.forEach((obj) => {
//         if (obj.first_name.length >= 5) {
//             console.log(obj);
//         }
//     })
// })

// fetch('https://reqes.in/api/users?page=1')
// .catch((myError) => {
//     if (myError) {
//         console.log('не удалось загрузить данные!')
//     } else {
//         throw myError;
//     }
// })

// function fetchEmma () {
//     fetch('https://reqres.in/api/users?page=1')
//     .then((responseObj) => responseObj.json())
//     .then(({data}) => {
//         let emmaWong = data.find(({first_name, last_name}) => 
//             first_name === 'Emma' && last_name === 'Wong');
        
//         if (emmaWong) {
//             console.log('EMMA was found!');
//         }

//         return emmaWong;
//     })
//     .then((emma) => {
//         return fetch(`https://reqres.in/api/users/${emma.id}`)
//     })
//     .then((responseObj) => responseObj.json())
//     .then(({data}) => {
//         console.log('emmas data', data);
//     })
// }


// async function fetchEmma () {

//     const responseObj = await fetch('https://reqres.in/api/users?page=1');
//     const {data} = await responseObj.json();

//     let emmaWong = data.find(({first_name, last_name}) => 
//         first_name === 'Emma' && last_name === 'Wong');
   
//     const responseEmma = await fetch(`https://reqres.in/api/users/${emmaWong.id}`);
//     const {data: emmaData} = await responseEmma.json();
    
//     console.log('emmas data', emmaData);

// }

// fetchEmma();



