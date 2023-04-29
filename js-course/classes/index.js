// 4. tasks
'use strict';

// class Person {
//     constructor (userName = 'Oleg', age = 10) { // userName, age
//         // this = {}
//         this.userName = userName;
//         this.age = age;

//         // return this;
//     }

//     run () {
//         console.log(`${this.userName} runs`);
//     }
// }

// // const p = new Person('Valerchik', 43);

// class Programmer extends Person {
//     constructor (stack = [],...args) { // stack, userName, age
//         // this = {}
//         super(...args); // userName, age

//         this.stack = stack;
//     }
// }


// const pr = new Programmer(['JS', 'JAVA'], 'Valerchik', 51 );

// class JSDeveloper extends Programmer {
//     constructor (smoozyLitres = 10, ...args) { // [stack, userName, age]
//         super(...args); // stack, userName, age
//         this.smoozyLitres = smoozyLitres; 
//     }
// }


// const jsDev = new JSDeveloper(10, ['React', 'Redux'],'Anna', 51);


// const foo = () => {
//     console.log('runs');
// };

// class Person {
//     #age;

//     constructor (userName, age) {
//         this.userName = userName;
//         this.#age = age;
//     }

//     walk () {
//         console.log('adasdas');
//     }

    // set age (val) { // запись
    //     if (val > 0 && val < 120) {
    //         this.#age = val;
    //     }
    // }

//     get age () { // чтение
//         return this.#age;
//     }
// }

// const pr = new Person('Anna', 23);

// console.log( pr._age );



// ООП наследование инкапсуляция полиморфизм абстракция

// создать класс Person 
// с полями firstName (имя)
// lastName (фамилия)
// fullName (имя + фамилия)
// можно читать каждое из этих полей
// если поменять lastName (или firstName)
// то поле fullName ТОЖЕ ДОЛЖНО ПОМЕНЯТЬСЯ (без дополнительных записей)

// person.lastName = 'Ivanov';

// person.fullName ===>>> Valerchik Ivanov

// person.lastName = 'Sidorov';
// // person.fullName = ????.split('')[0] = 'Sidorov'

// person.fullName ===>>> Valerchik Sidorov

class Person{
    constructor(userName,lastName){
        this.firstName=userName;
        this.lastName=lastName;
    }

    get fullName () {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName (val) { // 'Ivan Ivanov'
        const arrName = val.split(' '); // ['Ivan', 'Ivanov']
        this.firstName = arrName[0];
        this.lastName = arrName[1];
    }
}

function foo () {
    throw new Error();
}

// TODO
// try catch 
// static method class
// заимстовавание методов
// import export (js module) ???



// foo();

// const user = new Person('Maks','Jacson');

// user.lastName = 'Ivanov';

// function Person (userName,lastName) {
//     // this = {}
//     this.firstName=userName;
//     this.lastName=lastName;
//     return this;
// }

// console.log( Person());

