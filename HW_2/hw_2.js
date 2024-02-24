// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(someArr[0], someArr[1], someArr[2], someArr[3], someArr[4], someArr[5], someArr[6], someArr[7], someArr[8], someArr[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title : 'Harry Potter: The Prequel',
//     pageCount : 851,
//     genre : 'fantasy'
// };
// let book2 = {
//     title : 'Harry Potter and the Sorcerer’s Stone',
//     pageCount : 822,
//     genre : 'fantasy'
// };
// let book3 = {
//     title : 'Harry Potter and the Chamber of Secrets',
//     pageCount : 911,
//     genre : 'fantasy'
// };
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Harry Potter: The Prequel',
    pageCount: 851,
    genre: 'fantasy',
    authors: [{
        name: 'Voldemort',
        age: 23
    }]
};
let book2 = {
    title: 'Harry Potter and the Sorcerer’s Stone',
    pageCount: 822,
    genre: 'fantasy',
    authors: [{
        name: 'Voldemort',
        age: 43
    }]
};
let book3 = {
    title: 'Harry Potter and the Chamber of Secrets',
    pageCount: 911,
    genre: 'fantasy',
    authors: [{
        name: 'Voldemort',
        age: 99
    }]
};
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let usersArr = [
    {
        name: 'Alex',
        username: 'Ax',
        password: 123
    }, {
        name: 'Jon',
        username: 'Jo',
        password: 1223
    }, {
        name: 'Ivan',
        username: 'Ia',
        password: 12433
    }, {
        name: 'Alexis',
        username: 'Ar',
        password: 1235
    }, {
        name: 'Taras',
        username: 'Ara',
        password: 1233
    }, {
        name: 'Arsen',
        username: 'Hz',
        password: 1237
    }, {
        name: 'Ali',
        username: 'Aw',
        password: 1265433
    }, {
        name: 'Stepan',
        username: 'You',
        password: 127653
    }, {
        name: 'Htos',
        username: 'Ya',
        password: 12365
    }, {
        name: 'Alem',
        username: 'Am',
        password: 1238
    }
]
console.log(usersArr[0].password, usersArr[1].password, usersArr[2].password, usersArr[3].password, usersArr[4].password, usersArr[5].password, usersArr[6].password, usersArr[7].password, usersArr[8].password, usersArr[9].password,)
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = -3;
// if (x !== 0) {
//     document.write('Вірно')
// } else {
//     document.write('Невірно')
// }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 0;
if (time >= 0 && time <= 15) {
    document.write('перша')
} else if (time > 15 && time <= 30) {
    document.write('друга')
} else if (time > 30 && time <= 45) {
    document.write('третя')
} else if (time > 45 && time <= 59) {
    document.write('четверта')
} else {
    document.write('шото не так')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 12;
if (day >= 1 && day <= 10) {
    document.write('перша')
} else if (day > 10 && day <= 20) {
    document.write('друга')
} else if (day > 20 && day <= 31) {
    document.write('третя')
} else {
    document.write('воу воу воу')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = 2;

switch (dayNumber) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let numbersArr = [232, 23];
if (numbersArr[0] > numbersArr[1]) {
    console.log(numbersArr[0])
} else if (numbersArr[0] < numbersArr[1]) {
    console.log(numbersArr[1])
} else {
    console.log('same numbers')
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = 0 || 'default';
console.log(x)
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('супер')
}