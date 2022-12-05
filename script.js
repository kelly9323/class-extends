"use strict";

class Squirrel {
  /**
   *
   * @param {string} name
   * @param {string} color
   */
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name must be string");
    }
    this._name = name;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    if (typeof color !== "string") {
      throw new TypeError("name must be string");
    }
    this._color = color;
  }
  jump() {
    return `${this.name} is jumping`;
  }
}

class FlySquirrel extends Squirrel {
  /**
   *
   * @param {string} name
   * @param {string} color
   * @param {number} maxFlyLength
   */
  constructor(name, color) {
    super(name, color);
    this.maxFlyLength;
  }
  flyLength(length) {
    let maxFlyLength = 450;
    if (typeof length !== "number") {
      throw new TypeError("length must be number");
    }
    if (length > maxFlyLength || length < 0) {
      throw new RangeError(
        "max length must be less than range and higher than 0"
      );
    }
    return `${this.name} is flying for ${length} meters`;
  }
}

class MagicSquirrel extends FlySquirrel {
  /**
   *
   * @param {string} name
   * @param {string} color
   * @param {number} maxFlyLength
   * @param {array} words
   */
  constructor(name, color, words) {
    super(name, color);
    this.words = words;
  }
  get words() {
    return this._words;
  }
  set words(words) {
    this._words = words;
  }
  sayWords() {
    this.words.forEach((array_item) => {
      console.log(array_item); // words is not defined at MagicSquirrel.sayWords (script.js:127:5) at script.js:146:29
    });
  }
}

try {
  const squirrel = new Squirrel("Rangy", "grey");
  const flySquirrel = new FlySquirrel("Dorris", "orange");
  const magicSquirrel = new MagicSquirrel("Kenny", "red", [
    "hi",
    "im",
    "squirrel",
  ]);
  console.log(squirrel.jump());
  console.log(flySquirrel.jump());
  console.log(magicSquirrel.jump());
  console.log(flySquirrel.flyLength(250));
  console.log(magicSquirrel.flyLength(200));
  console.log(magicSquirrel.sayWords());
} catch (error) {
  console.log(error);
}

/*
Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
У фізичного товара додається властивість вага.
У віртуального товара додається властивість розмір пам'яті.
*/

class Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} amount
   */
  constructor(name, price, currency, amount) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.amount = amount;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name must be string");
    }
    this._name = name;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    if (typeof price !== "number") {
      throw new TypeError("price must be number");
    }
    if (price < 0) {
      throw new RangeError("price must be higher than 0");
    }
    this._price = price;
  }
  get currency() {
    return this._currency;
  }
  set currency(currency) {
    if (typeof currency !== "string") {
      throw new TypeError("currency must be string");
    }
    this._currency = currency;
  }
  get amount() {
    return this._amount;
  }
  set amount(amount) {
    if (typeof amount !== "number") {
      throw new TypeError("amount must be number");
    }
    if (amount < 0) {
      throw new RangeError("amount must be more than 0");
    }
    if (Number.isInteger(amount) === false) {
      throw new TypeError("amount must be integer");
    }
    this._amount = amount;
  }
  productInfo() {
    return `${this.name}, price = ${this.price}${this.currency}, amount = ${this.amount}`;
  }
  buyProduct(amountPurchase) {
    if (typeof amountPurchase !== "number") {
      throw new TypeError("amount must be number");
    }
    if (amountPurchase > this.amount) {
      throw new RangeError("not enough products");
    }
    return amountPurchase * this.price;
  }
}
class PhysicalProduct extends Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} amount
   * @param {number} weight
   */
  constructor(name, price, currency, amount, weight) {
    super(name, price, currency, amount);
    this.weight = weight;
  }
  get weight() {
    return this._weight;
  }
  set weight(weight) {
    if (typeof weight !== "number") {
      throw new TypeError("weight must be number");
    }
    if (weight < 0) {
      throw new RangeError("weight must be more than 0");
    }
    this._weight = weight;
  }
}
class VirtualProduct extends Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} amount
   * @param {number} memorySize
   */
  constructor(name, price, currency, amount, memorySize) {
    super(name, price, currency, amount);
    this.memorySize = memorySize;
  }
  get memorySize() {
    return this._memorySize;
  }
  set memorySize(memorySize) {
    if (typeof memorySize !== "number") {
      throw new TypeError("memorySize must be number");
    }
    if (memorySize < 0) {
      throw new RangeError("memorySize must be more than 0");
    }
    this._memorySize = memorySize;
  }
}
try {
  const product1 = new Product("cup", 20, "$", 4);
  const product2 = new PhysicalProduct("tv", 400, "$", 3, 20);
  const product3 = new VirtualProduct("cloud", 13, "$", 4, 500);
  console.log(product1.productInfo());
  console.log(product1.buyProduct(4));
  console.log(product2.productInfo());
  console.log(product2.weight);
  console.log(product3.memorySize);
} catch (error) {
  console.log(error);
}
