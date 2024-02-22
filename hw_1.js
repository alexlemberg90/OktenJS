// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// ------------------------------------------------------------------------------------------------------------------------------------------------
let text1 = 'hello';
let text2 = 'owu';
let text3 = 'com';
let text4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;
console.log(text1, text2, text3, text4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);
// let firstName = 'Oleksii';
// let middleName = 'Rostuslavovuch';
// let lastName = 'Buchko';
// let foolName = `${firstName} ${middleName} ${lastName}`;
// console.log(foolName);
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, typeof b, typeof c);
let firstName = prompt('first name');
let middleName = prompt('middle name');
let age = prompt('age');
console.log(firstName , middleName , +age);