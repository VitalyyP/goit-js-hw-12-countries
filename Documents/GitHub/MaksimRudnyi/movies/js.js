// console.log(Object.prototype.toString(1));
// // const toString = Object.prototype.toString;
// // const r = toString.call("1");
// // console.log(r);
// console.log("adfaf");
// console.log(null >= false);
// console.log(undefined >= false);
// console.log(null >= undefined);

// const array = [1, 2, 3, 4, 5, 6, 7];
// const foo = (arr) =>
//   arr.reduce((acc, el) => acc + (el % 2 ? 0 : Math.sqrt(el)), 0);
// console.log(foo(array));

// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }
// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }
//   wrapper.calls = [];
//   return wrapper;
// }
// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//   console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }
// console.log(work);

// const foo = (str) =>
//   str.split("").reduce((acc, el) => {
//     const values = ["a", "e", "i", "o", "u"];
//     return values.includes(el) ? (acc += 1) : acc;
//   }, 0);
// const foo = (str) => {
//   const values = ["a", "e", "i", "o", "u", "y"];
//   let count = 0;
//   for (let ch of str.toLowerCase()) {
//     if (values.includes(ch)) {
//       count++;
//     }
//   }
//   return count;
// };
// const foo = (str) => {
//   const reg = str.match(/[aeiouy]/gi);
//   return reg ? reg.length : 0;
// };
// console.log(foo("My name is ... I'm ..."));

// const foo = (a, b) => {
//   if (a > b) console.log("a> b");
//   else console.log("a<= b");
//   return;
//   a + b;
// };
// console.log(foo(3, 5));

// console.log((4.55).toFixed(1) + 1);

// const checkAnnagram = (a, b) => {
//   // if (a.length !== b.length) return false;
//   const createMap = (a) => {
//     const map = {};
//     for (const ch of a) {
//       map[ch] = map[ch] ? (map[ch] += 1) : 1;
//     }
//     return map;
//   };
//   const map1 = createMap(a);
//   const map2 = createMap(b);

//   delete map1[" "];
//   delete map2[" "];

//   const isAnnagram = (a, b) => {
//     for (const i in a) {
//       // console.log(a[i], b[i]);
//       if (a[i] !== b[i]) {
//         return false;
//       }
//     }
//     return true;
//   };
//   return isAnnagram(map1, map2);
// };
// console.log(checkAnnagram("s h e", "h ess"));

// const arr = [1, 2, 3, 4];
// console.log(arr.reduce((acc, item) => acc + item, 0));
// console.log(arr.reduce((acc, item) => acc + item / 2, 0));
// const pokemons = [
//   { id: 1, name: "Pikachu" },
//   { id: 2, name: "Eevee" },
//   { id: 3, name: "Snorlax" },
//   { id: 4, name: "Garchomp" },
// ];
// console.log(
//   pokemons.reduce((acc, item) => {
//     acc[item.id] = item.name;
//     return acc;
//   }, {})
// );
// const increment = (x) => x + 1;
// const decrement = (x) => x - 1;
// const double = (x) => x * 2;
// const functions = [increment, double, decrement];
// console.log(functions.reduce((acc, item) => item(acc), 5));
// const fruits = [
//   "apple",
//   "apple",
//   "banana",
//   "banana",
//   "banana",
//   "banana",
//   "orange",
//   "orange",
//   "grape",
//   "grape",
//   "grape",
//   "strawberry",
//   "watermelon",
// ];
// console.log(
//   fruits.reduce((acc, fruit) => {
//     acc[fruit] = acc[fruit] ? acc[fruit] + 1 : 1;
//     return acc;
//   }, {})
// );

// let step = 1;
// let out = "";
// const base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function stepAndGo() {
//   if (step > 10) return;

//   let base = step - 1;
//   let base2 = 10 - step;
//   out += `${base}${base2}_`;

//   step++;
//   stepAndGo();
// }

// stepAndGo();
// console.log(out);
// console.log(
//   base.reduce(
//     (acc, item) => `${acc}${(item * 9).toString().padStart(2, "0")}_`,
//     ""
//   )
// );

// const makeTask = (obj) => {
//   const completed = false;
//   const category = "defaultCategory";
//   const priority = "defaultPriority";

//   obj.completed = completed;
//   if (!obj.category) obj.category = category;
//   if (!obj.priority) obj.priority = priority;
//   return obj;
// };

// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.log(
//   makeTask({
//     text: "Without category and priority",
//   })
// );
// { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// const foo = (x) => {
//   let result = "";
//   const fromArray = (x) => {
//     if (Array.isArray(x)) {
//       fromArray(x[1]);
//       fromArray(x[0]);
//       fromArray(x[2]);
//     } else {
//       result = result + " " + x;
//     }
//   };
//   fromArray(x);
//   return result;
// };

// console.log(
//   foo(["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]])
// ); // "a < b OR (c == d AND e != f)"
// console.log(foo([1, 2, 3]));

// const scrollingText = (string) => {
//   const result = [];
//   const length = string.length;
//   for (let i = 0; i < length; i++) {
//     result.push((string.slice(i) + string.slice(0, i)).toUpperCase());
//   }
//   return result;
// };
// console.log(scrollingText("robot"));

// let a = 2342525;
// console.log({ a });
// console.log("a: ", a);

// class User {
//   constructor(login, password) {
//     this.login = login;
//     this.password = password;
//   }
//   isValidPassword(password) {
//     // return this.password.lenght > 6;
//     return this.password.length > 6;
//   }
// }
// const person1 = new User("afafa", "afasf83453");
// console.log(person1);
// console.log(person1.isValidPassword());

// class List {
//   constructor(array) {
//     this.items = array;
//   }
//   render() {
//     return <ul>this.items.map((item, index) => {<li>item</li>})</ul>;
//   }
// }
// const list = new List(["one", "two", "three"]);
// console.log(list);

// const sayGreeting = (str) => {
//   return function (name) {
//     return `${str}, ${name}`;
//   };
// };
// const sayHello = sayGreeting("Hello");
// console.log(sayHello("Ben"));
// console.log(sayHello("Jone"));

// const createCounter = (num) => {
//   let count = num;
//   return function () {
//     return (count += 1);
//   };
// };
// const countA = createCounter(100);
// countA();
// const countB = createCounter(200);
// console.log(countB());
// console.log(countA());

// const makeArray = () => {
//   var result = [];

//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     result[i] = (function () {
//       console.log("asfaf: ", i);
//     })();
//   }
//   // return result;
// };
// makeArray();

// const showMessage = (message) => {
//   let b = `<h1>${message}</h1>`;
//   document.querySelector(".test").innerHTML = b;
// };
// showMessage("Who am I?");

// class Hidding {
//   constructor() {
//     this.text = text;
//     this.class = class;
//     this
// }

// function foo() {
//   console.log("Hello, I'm foo");
// }
// console.log(foo.prototype);

// const bar = () => console.log("Hello, I'm bar");
// console.log(bar.prototype);
// console.log("🚀 ~ file: js.js ~ line 297 ~ bar", bar);

// class Hero {
//   constructor({ name, xp }) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gainXp(xp) {
//     this.xp += xp;
//     console.log(`${this.name} gets ${xp} xp`);
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...rest }) {
//     super(rest);
//     this.weapon = weapon;
//   }
//   kick() {
//     console.log(`${this.name} kick with ${this.weapon}`);
//   }
// }

// const mango = new Hero({ name: "Mango", xp: 1000 });
// console.log(mango.name, mango);
// mango.gainXp(100);
// console.log(mango.name, mango);
// const jone = new Warrior({ weapon: "axe", name: "Jone", xp: 1500 });
// console.log(jone.name, jone);
// jone.kick();
// jone.gainXp(200);
// console.log(jone.name, jone);

// fetch("http://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json)
//   .then((res) => console.log(res));

// class Robot {
//   static counter = 0;
//   static listOfNames = [];
//   static pushName = (name) => Robot.listOfNames.push(name);
//   constructor() {
//     this.name = this.makeUniqeName();
//     Robot.counter += 1;
//   }
//   makeUniqeName = () => {
//     const name = this.makeName();
//     if (!Robot.listOfNames.includes(name)) {
//       Robot.pushName(name);
//     } else {
//       // this.makeAndPushName();????
//       this.makeUniqeName();
//     }
//     return name;
//   };

//   makeName = () => {
//     let name = "";
//     for (let i = 0; i < 5; i += 1) {
//       if (i < 2) {
//         name += String.fromCharCode(this.randomize(65, 90));
//       } else {
//         name += this.randomize(0, 9);
//       }
//     }
//     return name;
//   };

//   randomize = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };
// }
// for (let i = 0; i < 40; i += 1) {
//   new Robot();
// }
// const rob1 = new Robot();
// const rob2 = new Robot();
// const rob3 = new Robot();
// const rob4 = new Robot();
// const rob5 = new Robot();
// const rob6 = new Robot();
// const rob7 = new Robot();
// const rob8 = new Robot();
// const rob9 = new Robot();
// const rob10 = new Robot();
// console.log(Robot.listOfNames.sort());
// console.log(Robot.counter);

// const createMatrix = (a, b) => {
//   let id = 0;
//   randomize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//   const result = [];
//   for (let i = 0; i < a; i += 1) {
//     const innerArray = [];
//     for (let j = 0; j < b; j += 1) {
//       id += 1;
//       const amount = randomize(100, 999);
//       const obj = {
//         id: id.toString().padStart(3, 0),
//         amount,
//       };
//       innerArray.push(obj);
//     }
//     result.push(innerArray);
//   }
//   return result;
// };
// const matrix = createMatrix(2, 3);
// console.log(matrix);
// const countMatrix = (matrix) => {
//   const numberOfRows = matrix.length;
//   const numberOfCols = matrix.flat(Infinity).length / numberOfRows;
//   for (let i = 0; i < numberOfRows; i++) {
//     let sumOfRows = 0;
//     for (let j = 0; j < numberOfCols; j++) {
//       sumOfRows += matrix[i][j].amount;
//     }
//     matrix[i][numberOfCols] = { sumOfRows };
//   }
//   for (let j = 0; j < numberOfCols; j++) {
//     let sumOfCols = 0;
//     for (let i = 0; i < numberOfRows; i++) {
//       sumOfCols += matrix[i][j].amount;
//     }
//     debugger;
//     // matrix[numberOfRows][j] = { sumOfCols };
//     matrix[2][0] = 774;
//   }
//   return matrix;
// };
// console.log(countMatrix(matrix));

// const fillMatrixSnake = (w, h) => {
//   let result = new Array(h).fill().map(() => new Array(w).fill(""));
//   let counter = 1;
//   let startCol = 0;
//   let endCol = w - 1;
//   let startRow = 0;
//   let endRow = h - 1;

//   while (startRow <= endRow && startCol <= endCol) {
//     for (let i = startCol; i <= endCol; i++) {
//       result[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     for (let j = startRow; j <= endRow; j++) {
//       debugger;
//       result[j][endCol] = counter;
//       counter++;
//     }
//     endCol--;

//     for (let i = endCol; i >= startCol; i--) {
//       result[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     for (let j = endRow; j >= startRow; j--) {
//       result[j][startCol] = counter;
//       counter++;
//     }
//     startCol++;
//   }

//   return result;
// };
// console.table(fillMatrixSnake(19, 5));
// console.table(fillMatrixSnake(5, 19));

// const items = [
//   { price: 40 },
//   { price: -120 },
//   { price: "505" },
//   { price: 350 },
// ];

// const countSum = (arr) => arr.reduce((acc, item) => acc + item.price, 0);
// const calculateTotal = (goods) => {
//   let total = 0;
//   for (const { price } of goods) {
//     if (typeof price !== "number") continue;
//     if (price > 0) total += price;
//   }
//   return total;
// };

// console.log(calculateTotal(items));
// const purchase = {
//   Electronics: [
//     { name: "Laptop", price: 1500 },
//     { name: "Keyboard", price: 100 },
//     { name: "Mouse", price: 50 },
//   ],
//   Textile: [
//     { name: "Bag", price: 50 },
//     { name: "Mouse pad", price: 50 },
//   ],
// };

// const find = (items, name) => {
//   for (const key in items) {
//     for (const item of items[key]) {
//       if (item.name === name) return item;
//     }
//   }
// };

// console.log(find(purchase, "Laptop"));
// const roles = [
//   "Городничий",
//   "Аммос Федорович",
//   "Артемий Филиппович",
//   "Лука Лукич",
// ];
// const textLines = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
// Аммос Федорович: Как ревизор?
// Артемий Филиппович: Как ревизор?
// Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
// Аммос Федорович: Вот те на!
// Артемий Филиппович: Вот не было заботы, так подай!
// Лука Лукич: Господи боже! еще и с секретным предписаньем!`;
// const makeTextForRoles = (roles, textLines) => {
//   let result = "";
//   const phrases = textLines.split("\n");
//   roles.forEach((role) => {
//     let temp = `\n${role}\n`;
//     phrases.forEach((phrase, j) => {
//       if (phrase.indexOf(role) === 0) {
//         temp += `${j + 1} ${phrase.slice(role.length + 1)}\n`;
//       }
//     });
//     result += temp;
//   });
//   return result;
// };
// console.log(makeTextForRoles(roles, textLines));
// const isPalindrome = (str) => str === str.split("").reverse().join("");
// const isPalindrome = (str) => {
//   let firstString = "";
//   for (let char of str) {
//     // console.log("char: ", char);
//     if (char !== " " && char !== "," && char !== ".") {
//       firstString += char.toLowerCase();
//     }
//   }

//   return firstString === firstString.split("").reverse().join("");
// };
// const isPalindrome = (str) => {
//   let firstString = "";
//   for (let char of str) {
//     if (char !== " " && char !== "," && char !== ".") {
//       firstString += char.toLowerCase();
//     }
//   }
//   for (let i = 0; i < firstString.length / 2; i++) {
//     if (firstString.at(i) !== firstString.at(-1 - i)) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPalindrome("Я несу гусеня"));
// const findSortestWorld = (sentence) =>
//   sentence
//     .split(" ")
//     .sort((a, b) => a.length - b.length)
//     .at(0);
// console.log(findSortestWorld("Я несу гусеня"));
// const workers = [
//   {
//     team: "team A",
//     teamLead: {
//       name: "Kirill",
//       salary: 100,
//       isActive: true,
//     },
//     teamMembers: [
//       {
//         member: "Eugenia",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Andrey",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Victor",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Alex",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Anton",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Alla",
//         salary: 20,
//         isActive: false,
//       },
//     ],
//   },
//   {
//     team: "team B",
//     teamLead: {
//       name: "Kirill",
//       salary: 100,
//       isActive: true,
//     },
//     teamMembers: [
//       {
//         member: "Artemia",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Semen",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Illy",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Natalia",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Elena",
//         salary: 20,
//         isActive: true,
//       },
//       {
//         member: "Egor",
//         salary: 20,
//         isActive: false,
//       },
//       {
//         member: "Egor",
//         salary: 20,
//         isActive: false,
//       },
//     ],
//   },
// ];
// const totalSalaryWhoisActive = (workers) => {
//   let result = 0;
//   for (const team of workers) {
//     if (team.teamLead.isActive) result += team.teamLead.salary;
//     for (const member of team.teamMembers) {
//       if (member.isActive) result += member.salary;
//     }
//   }
//   return result;
// };
// const totalSalaryWhoisActive = (workers) => {
//   let result = 0;
//   for (const { teamLead, teamMembers } of workers) {
//     if (teamLead.isActive) result += teamLead.salary;
//     for (const { isActive, salary } of teamMembers) {
//       if (isActive) result += salary;
//     }
//   }
//   return result;
// };
// const totalSalaryWhoisActive = (data) => {
//   return data.reduce((sum, team) => {
//     if (team.teamLead.isActive) sum += team.teamLead.salary;
//     return (sum += team.teamMembers.reduce((acc, el) => {
//       return el.isActive ? acc + el.salary : acc;
//     }, 0));
//   }, 0);
// };
// console.log(totalSalaryWhoisActive(workers));
// const filter = (arr, func) => {
//   const result = [];
//   arr.forEach((el) => {
//     if (func(el)) result.push(el);
//   });
//   return result;
// };
// console.log(filter([1, 2, 3], (el) => el > 1));
// const some = (arr, func) => {
//   for (const el of arr) {
//     if (func(el)) return true;
//   }
//   return false;
// };
// console.log(some([1, 2, 3], (el) => el > 1));
// const map = (arr, func) => {
//   const result = [];
//   for (const el of arr) {
//     result.push(func(el));
//   }
//   return result;
// };
// console.log(map([1, 2, 3], (el) => el ** 2));
// Дан массив объектов. Отсортировать товары:
// 1) по количеству отзывов.
// 2) по цене (если цены две, то брать newUan)
// const data = [
//   {
//     ratingRevievs: "264 отзыва",
//     price: { oldUan: "4 333 грн", newUan: "3799 грн" },
//     name: "Motorola MOTO G4 (XT1622) Black",
//   },
//   {
//     ratingRevievs: "1355 отзывов",
//     price: "4 999 грн",
//     name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!",
//   },
//   {
//     ratingRevievs: "426 отзывов",
//     price: "5 199 грн",
//     name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!",
//   },
//   {
//     ratingRevievs: "403 отзыва",
//     price: "4 349 грн",
//     name: "Xiaomi Redmi Note 4X 3/32GB Black",
//   },
//   {
//     ratingRevievs: "488 отзывов",
//     price: "6 199 грн",
//     name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!",
//   },
//   {
//     ratingRevievs: "198 отзывов",
//     price: { oldUan: "3 495 грн", newUan: "2 995 грн" },
//     name: "Lenovo K5 (A6020a40) Silver",
//   },
//   {
//     ratingRevievs: "352 отзыва",
//     price: { oldUan: "9 799 грн", newUan: "7 999 грн" },
//     name: "Apple iPhone 5s 16GB Space Gray",
//   },
//   {
//     ratingRevievs: "59 отзывов",
//     price: "5 999 грн",
//     name: "Nokia 5 Dual Sim Tempered Blue",
//   },
//   {
//     ratingRevievs: "119 отзывов",
//     price: "11 999 грн",
//     name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!",
//   },
//   {
//     ratingRevievs: "1106 отзывов",
//     price: "3 999 грн",
//     name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!",
//   },
//   {
//     ratingRevievs: "380 отзывов",
//     price: "2 199 грн",
//     name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!",
//   },
//   {
//     ratingRevievs: "86 отзывов",
//     price: { oldUan: "24 999 грн", newUan: "22 999 грн" },
//     name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!",
//   },
//   {
//     ratingRevievs: "177 отзывов",
//     price: "6 499 грн",
//     name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!",
//   },
//   {
//     ratingRevievs: "347 отзывов",
//     price: "4 299 грн",
//     name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)",
//   },
//   {
//     ratingRevievs: "709 отзывов",
//     price: "2 799 грн",
//     name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!",
//   },
//   {
//     ratingRevievs: "527 отзывов",
//     price: "3 999 грн",
//     name: "Huawei Y6 Pro Gold + чехол + защитное стекло!",
//   },
//   {
//     ratingRevievs: "66 отзывов",
//     price: "16 499 грн",
//     name: "Apple iPhone 6s 32GB Gold",
//   },

//   {
//     ratingRevievs: "14 отзывов",
//     price: "11 499 грн",
//     name: "Apple iPhone 6 32GB Space Gray",
//   },
//   {
//     ratingRevievs: "70 отзывов",
//     price: { oldUan: "7 399 грн", newUan: "5 999 грн" },
//     name: "Asus ZenFone 2 32GB (ZE551ML) Black",
//   },
//   {
//     ratingRevievs: "45 отзывов",
//     price: "4 299 грн",
//     name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!",
//   },
//   {
//     ratingRevievs: "376 отзывов",
//     price: "3 899 грн",
//     name: "Meizu M3 Note 32GB Grey (Международная версия)",
//   },
//   {
//     ratingRevievs: "111 отзывов",
//     price: { oldUan: "9 999 грн", newUan: "7 999 грн" },
//     name: "Sony Xperia X Dual (F5122) White",
//   },
//   {
//     ratingRevievs: "40 отзывов",
//     price: "2 222 грн",
//     name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!",
//   },
//   {
//     ratingRevievs: "93 отзыва",
//     price: "18 999 грн",
//     name: "Apple iPhone 7 32GB Black",
//   },
//   {
//     ratingRevievs: "33 отзыва",
//     price: "16 999 грн",
//     name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!",
//   },
//   {
//     ratingRevievs: "71 отзыв",
//     price: { oldUan: "2 399 грн", newUan: "1 999 грн" },
//     name: "LG K5 X220ds Gold",
//   },
//   {
//     ratingRevievs: "39 отзывов",
//     price: "2 995 грн",
//     name: "Lenovo C2 Power (K10a40) Black",
//   },
//   {
//     ratingRevievs: "156 отзывов",
//     price: "2 599 грн",
//     name: "Nous NS 5006 Gold",
//   },
//   {
//     ratingRevievs: "40 отзывов",
//     price: "19 689 грн",
//     name: "LG G6 Mystic White",
//   },
//   {
//     ratingRevievs: "24 отзыва",
//     price: "5 995 грн",
//     name: "Motorola MOTO G5 (XT1676) Grey",
//   },
//   {
//     ratingRevievs: "7 отзывов",
//     price: { oldUan: "10 999 грн", newUan: "9 999 грн" },
//     name: "HTC One X10 Dual Sim Silver",
//   },
//   {
//     ratingRevievs: "18 отзывов",
//     price: { oldUan: "5 999 грн", newUan: "4 999 грн" },
//     name: "Sony Xperia L1 Dual Black",
//   },
// ];
// const getNumberFromString = (el) => parseInt(el.replace(/[^\d]/g, ""));
// const sortByRatingRevievs = (arr) => {
//   return arr.sort(
//     (a, b) =>
//       getNumberFromString(a.ratingRevievs) -
//       getNumberFromString(b.ratingRevievs)
//   );
// };
// const sortByPrice = (arr) => {
//   return arr.sort((a, b) => {
//     x =
//       typeof a.price === "string"
//         ? getNumberFromString(a.price)
//         : getNumberFromString(a.price.newUan);
//     y =
//       typeof b.price === "string"
//         ? getNumberFromString(b.price)
//         : getNumberFromString(b.price.newUan);
//     return x - y;
//   });
// };
// const ref = {
//   buttonSortByFeedback: document.querySelector("#button-sort-by-feedback"),
//   buttonSortByPrice: document.querySelector("#button-sort-by-price"),
//   result: document.querySelector("#result"),
// };
// const createMarkup = (data) => {
//   ref.result.innerHTML = data.reduce((acc, el) => {
//     return typeof el.price === "string"
//       ? acc +
//           `<h3>${el.name}</h3>
//           <p>${el.ratingRevievs}</p>
//           <p>${el.price}</p>`
//       : acc +
//           `<h3>${el.name}</h3>
//           <p>${el.ratingRevievs}</p>
//           <p>${el.price.oldUan} - ${el.price.newUan}</p>`;
//   }, "");
// };
// createMarkup(data);
// let statusOfSort = "";
// ref.buttonSortByFeedback.addEventListener("click", () => {
//   if (statusOfSort === "byFeedbackASC") {
//     createMarkup(sortByRatingRevievs(data).reverse());
//     statusOfSort = "byFeedbackDESC";
//   } else {
//     createMarkup(sortByRatingRevievs(data));
//     statusOfSort = "byFeedbackASC";
//   }
// });
// ref.buttonSortByPrice.addEventListener("click", () => {
//   if (statusOfSort === "byPriceASC") {
//     createMarkup(sortByPrice(data).reverse());
//     statusOfSort = "byPriceDESC";
//   } else {
//     createMarkup(sortByPrice(data));
//     statusOfSort = "byPriceASC";
//   }
// });
// const bind = (obj, func) => func(obj);
// const obj1 = {
//   a: 1,
//   b: 2,
//   sum() {
//     return this.a + this.b;
//   },
// };
// console.log(obj1.a);
// console.log(obj1.b);
// console.log(obj1.sum());
// const obj2 = {
//   a: 10,
//   b: 40,
// };
// const sumObj2 = bind(obj2, obj1.sum);
// console.log(sumObj2);
// Function.prototype.myBind = function (context, ...args) {
//   return (...rest) => {
//     return this.call(context, ...args.concat(rest));
//   };
// };
// function test(...args) {
//   console.log(this.name, ...args);
// }
// const person = {
//   name: "Elon",
// };

// test.myBind(person)(45, 50);
// const flatten = (arr) => {
//   const result = [];
//   const addElement = (x) => {
//     x.forEach((el) => {
//       if (Array.isArray(el)) {
//         addElement(el);
//       } else {
//         result.push(el);
//       }
//     });
//   };
//   addElement(arr);
//   return result;
// };
// const flatten = (array) => array.flat(Infinity);
// console.log(flatten([[1], [[[2, 3]], [[[4]]]]]));
// function removeDupes(str) {
//   const set = new Set(str);
//   return [...set].join("");
// }
// console.log(removeDupes("aahhhhhuuuuse"));
// console.log(isNaN("0k"));
// console.log(Number.isNaN("0k"));
// const a = 5;
// const b = 5.12;
// console.log(Math.trunc(a) === a);
// console.log(Math.trunc(b) === b)
// function allAnagrams(array) {
//   const firstElementSorted = array.at(0).split("").sort().join("");
//   for (let i = 1; i < array.length; i += 1) {
//     if (array.at(i).split("").sort().join("") !== firstElementSorted)
//       return false;
//   }
//   return true;
// }

// console.log(allAnagrams(["abcd", "bdac", "cabP"]));
// console.log(allAnagrams(["abcd", "bdac", "cabd"]));
// function highestFrequency(array) {
//   const map = array.reduce((acc, el) => {
//     if (acc[el]) {
//       acc[el] += 1;
//     } else {
//       acc[el] = 1;
//     }
//     return acc;
//   }, {});
//   const arraySortedDESC = Object.entries(map).sort((a, b) => b[1] - a[1]);
//   return arraySortedDESC[0][0];
// }
// console.log(highestFrequency(["abc", "def", "abc", "def", "abc", "asfasfd"]));
// function isStringRotated(source, test) {
//   return source.length === test.length && (source + source).includes(test);
// }
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   super(name)
//   constructor() {
//     // this.name = name;
//     this.created = Date.now();
//   }
// }
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);

// const logger = (kind) => {
//   const colors = {
//     warning: "\x1b[1;33m",
//     error: "\x1b[0;31m",
//     info: "\x1b[1;37m",
//   };
//   const color = colors[kind] || colors.info;
//   return (s) => {
//     const date = new Date().toISOString();
//     console.log(color + date + "\t" + s);
//   };
// };
// const warning = logger("warning");
// const error = logger("error");
// const slow = logger("slow");
// slow("I am slow logger");
// warning("Hello");
// error("World");

// const generateKey = (chars) => {
//   const max = chars.length;
//   return (length) => {
//     let key = "";
//     for (let i = 0; i < length; i += 1) {
//       const index = Math.floor(Math.random() * max);
//       key += chars[index];
//     }
//     return key;
//   };
// };
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const generatePassword = generateKey(alphabet);
// console.log(generatePassword(12));
(function print() {
  console.log("hi");
})();
((text) => console.log("WTF?"))();

const arr = [{ name: "name1" }, { name: "name2" }, { name: "name3" }];
function printName(arr) {
  arr.map((el) => console.log(el.name));
}
printName(arr);
