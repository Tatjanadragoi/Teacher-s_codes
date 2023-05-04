// set get
'use strict';
// class Car {
//     #fuelAmount = 0;
//     podveska = true;
//     _tankVolume = 50;

//     constructor (color) {
//         this.color = color;
//     }

//     getFuelAmount () {
//         return this.#fuelAmount;
//     }

//     set fuelAmount (val) {
//         if (val <= this.#tankVolume) {
//             this.#fuelAmount = val;
//         }
//     }

//     get fuelAmount () {
//         return this.#fuelAmount;
//     }
// }

// const tesla = new Car('red');
// tesla.podveska = false;

// Car.repair = function (car) {
//     car.podveska = true;
// };

// Car.repair(tesla);

// 2. 3. 6.

// class Programmer {
//   constructor(stack, name = "Valerchik") {
//     this.name = name;
//     this.stack = stack;
//   }

//   code() {
//     this.stack.forEach((technology) => {
//       console.log(`${this.name} codes on ${technology}`);
//     });
//   }

//   static getSeniorDeveloper(programmers) {
//     return programmers.filter((programmer) => {
//         return programmer.stack.length > 4;
//     });
//   }
// }

// const programmers = [
//   new Programmer(["PHP", "Java", "Paint"], "Oleg"),
//   new Programmer(["JS", "CSS", "TS", "React", "Angular"], "Anna"),
//   new Programmer(["czxczx", "sdxzc", "asdsa", "sadzczv", "xzcxcxv"]),
//   new Programmer(["dksfjl", "sad", "xzc"]),
// ];

// const seniours = Programmer.getSeniorDeveloper(programmers);





// class Programmer {
//   constructor(userName, stack) {
//     this.userName = userName;
//     this.stack = stack;
//     Programmer.prototype.code = function () {
//       stack.forEach((element) => {
//         console.log(`${this.userName} is coding on ${element}`);
//       });
//       Programmer.prototype.toString = function prToString() {
//         console.log(`Hello my name is ${this.userName} `);
//       };
//     };
//   }
//   static getSeniorDeveloper(programmerTeam) {
//     return programmerTeam.filter((programmer) => {
//         return programmer.stack.length > 4;
//     });
//   }
// }


// const programmerTeam = [
//     new Programmer("Petya", ["JS", "Python", "Go", "Ruby"]),
//     new Programmer("Vlad", ["Java", "PHP"]),
//     new Programmer("Olga", ["CSS", "HTMl"]),
//     new Programmer("Valerchik", ["Assembler", "API", "C++", "C#", "PHP"]),
//     new Programmer("Artem", ["C++", "C#"]),
//     new Programmer("Vova", ["Go", "Ruby"]),
//     new Programmer("Sergei", ["SQL", "Swift"]),
//     new Programmer("Anya", ["TypeScript", "React", "JS", "CSS", "HTML"]),
//     new Programmer("Roman", ["Delphi", "Scala"]),
//     new Programmer("Maksim", ["Kotlin", "Golang"]),
//   ];

// console.log(Programmer.getSeniorDeveloper(programmerTeam));



// 3. Напишите функцию, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
// - Создайте три линии.
// - Вычислите их длины с помощью функции
// - Проверьте, могут ли три линии сформировать треугольник
// **Помните:**
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон.


// class Point {
//     constructor (x,y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// const p1 = new Point(51,123);
// const p2 = new Point(16, 98);
// const p3 = new Point(76, 5);
// const p4 = new Point(4235, 18);
// const p5 = new Point(16, 63);
// const p6 = new Point(55, 34);

// class Line {
//     constructor (p1, p2) {
//         this.p1 = p1;
//         this.p2 = p2;
//     }

//     get length () {
//         const katet1 = this.p1.x - this.p2.x;
//         const katet2 = this.p1.y - this.p2.y;
        
//         return Math.sqrt(katet1**2 + katet2**2);
//     }

//     static canLinesFormATriangle (line1, line2, line3) {
//         return (line1.length + line2.length > line3.length &&
//             line2.length + line3.length > line1.length &&
//             line3.length + line1.length > line2.length);
        
//     }
// }

// const line1 = new Line(p1, p2);
// const line2 = new Line(p3, p4);
// const line3 = new Line(p5, p6);


// console.log(Line.canLinesFormATriangle(line1, line2, line3));


// Создать класс `Timer`, инстанс которого запускает таймер и выводит в консоль
// прошедшее время в секундах (1 2 3 4 5 и тд)
// инстанс должен обладать методами `.start()` `.stop()` которые запускают и останавливают таймер
// а также методом `.reset()` который сбрасывает таймер на 0.
// С помощью Timer вы должны создать несколько таймеров и убедится в том, что они 
// работают независимо друг от друга.
// останавливайте таймер через некоторое время после запуска с помощью `setTimeout()`

// class Timer {
//     constructor () {
//         this.intervalId = null;
//         this.time = 0;
//     }

//     start () {
//         this.intervalId = setInterval(() => {
//             console.log(++this.time);
//         }, 1000);
//     }

//     stop () {
//         clearInterval(this.intervalId);
//     }

//     reset () {
//         this.time = 0;
//     }
// }

// const timer = new Timer();

// console.log(timer);

// timer.start();

// setTimeout(() => {
//     timer.reset();
// }, 5000);

// setTimeout(() => {
//     timer.stop();
// }, 7000);

// Создать класс Shop, инстанс которого обладает полем
// shopItems - массив объектов типа shopItem
// У инстанса класса Shop должен быть метод setSales(discountPercent),
// который устанавливает всем shopItem'ам isOnSale = true,
// а также снижает цену на discountPercent процентов.
// У инстанса также должен быть метод purchaseItem(itemName)
// которое находит в массиве shopItems, необходимый shopItem и уменьшает его
// количество на 1.
// Если количество shopItem равно нулю, то нужно выбросить ошибку о том, что
// айтемов больше нет в наличии. Обработайте эту ошибку и выведите в консоль
// сообщение что айтем нельзя заказать тк он закончился.
// У инстанса Shop также должно быть поле totalProfit - число (общее
// количество заработанных денег), в которое складывается
// цена каждого проданного айтема

// Создать класс TV который наследует от ShopItem
// Оба поля должны быть недоступны для изменения, но доступны для чтения
// т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
// запрещаем их изменят

// Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
// проверить все методы на работоспособност


class ShopItem {
    #amount = 3;

  constructor(itemName, price) {
    this.itemName = itemName;
    this.price = price;
    this.isOnSale = false;
  }

  set amount (val) {
    if (val < 0) {
        throw new Error('amount cannot be under zero');
    }

    this.#amount = val;
  }

  get amount () {
    return this.#amount;
  }
}

class Clothes extends ShopItem {
  #size;

  constructor(size, material, color = "#fff", ...args) {
    super(...args);
    this.size = size;
    this.material = material;
    this.color = color;
  }

  get size() {
    return this.#size;
  }

  set size(passedSize) {
    const validSizes = ["S", "M", "L", "XL"];
    const isSizeValid = validSizes.some(
      (validSize) => validSize === passedSize.toUpperCase()
    );

    if (isSizeValid) {
      this.#size = passedSize;
    } else {
      throw new Error(`size should be either 'S', 'M', 'L', 'XL'`);
    }
  }

  static changeColor (cloth, color) {
    cloth.color = color;
  }
}

const maika = new Clothes("XL", "raps", "orange", "maika", 200);

class TV extends ShopItem {
    #diagonal;
    #withSmartTV;

    constructor (diagonal, withSmartTV, ...args) {
        super(...args);
        this.#diagonal = diagonal;
        this.#withSmartTV = withSmartTV;
    }

    get diagonal () {
        return this.#diagonal;
    }

    set diagonal (val) {
        throw new Error ('property diagonal is readonly')
    }

    get withSmartTV () {
        return this.#withSmartTV;
    }

    set withSmartTV (val) {}
}

const lg = new TV(55, false, 'lg', 2000);

lg.diagonal = 100;

console.log( lg.diagonal );

// let person = {
//     userName: 'Oleg'
// }

// class PersonAgeError extends Error {}

// function makeValerchik (person = {}, age) {
//     if (isNaN(age) || typeof age !== 'number') {
//         throw new PersonAgeError(`argument age was expected to be a number, but instead got ${age}`);
//     }
//     person.userName = 'Valerchik';
// }

// try {

//     const a = 2;
//     a = 3;
//     makeValerchik(person, null);
// } catch (err) {
//     console.log(err);
//     if (err instanceof PersonAgeError) {
//         makeValerchik(person, 20);
//     } else {
//         throw err;
//     }
// }

// console.log(person);
