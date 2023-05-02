

// set get

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

// Создать класс Clothes - который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// size - строка характеризующая размер (может принимать значения только 'S', 'M', 'L', 'XL', обрабатывать
// сеттером, иначе выбрасывать ошибку)
// material - строка характеризующая материал
// color - строка цвета
// Класс Clothes, должен обладать статическим методом .changeColor(cloth, color)
// который принимает инстанс этого класса и цвет, метод меняет инстансу цвет на color

// Создать класс TV который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// diagonal - число
// withSmartTV - булево значение
// Оба поля должны быть недоступны для изменения, но доступны для чтения
// т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
// запрещаем их изменят

// Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
// проверить все методы на работоспособност


class ShopItem {
    constructor (itemName, price) {
        this.itemName = itemName;
        this.price = price;
        // set get throw new ShopItemAmountError('some text here')
        this.amount = 3; 
        this.isOnSale = false;
    }
}

class Clothes extends ShopItem {
    #size;

    constructor (size, material, color = '#fff',...args) {
        super(...args);
        this.size = size;
        this.material = material;
        this.color = color;
    }

    get size () {
        return this.#size;
    }

    set size (passedSize) {
        const validSizes = ['S', 'M', 'L', 'XL'];
        const isSizeValid = validSizes.some((validSize) => validSize === passedSize.toUpperCase());

        if (isSizeValid) {
            this.#size = passedSize;
        } else {
            throw new Error(`size should be either 'S', 'M', 'L', 'XL'`)
        }
    }
}

const maika = new Clothes('XL', 'raps', 'orange', 'maika', 200);
console.log(maika);

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

