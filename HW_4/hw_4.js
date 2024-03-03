// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b) {
    return a*b
}
console.log(rectangle(15, 200));
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
const pi = 3.14
function circle(r) {
  return 2 * pi * r;
}
console.log(circle(5));
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r,h) {
  return 2 * pi * r * (r + h);
}
console.log(cylinder(10,20));
// // - створити функцію яка приймає масив та виводить кожен його елемент
function getArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
getArr([1,2,4,'qwe']);
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createText(text) {
    document.write(`<p>${text}</p>`)
}
createText('Regtrewtg dfbg rtghe ege g');
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function someUl(text) {
  document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`)
}
someUl('HotDog')
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function numUl(text,numOfLi) {
  document.write(`<ul>`)
  for (let i = 0; i < numOfLi; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write('</ul>')
}
numUl('someLi',3)
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arr(arrElements) {
  document.write(`<ul>`);
  for (let arrElement of arrElements) {
    if (typeof arrElement === 'number') {
      document.write(`<li> number - ${arrElement}</li>`)
    }else if (typeof arrElement === 'string') {
      document.write(`<li> string - ${arrElement}</li>`)
    }else if (typeof arrElement === 'boolean') {
      document.write(`<li> boolean - ${arrElement}</li>`)
    }
  }
  document.write(`</ul>`);
}
arr([1,2,3,'alex',44,'role','HR',true,123,false,'test']);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
users = [
    {
        id:1,
        name: 'Alex',
        age: 22
    },
    {
        id:2,
        name: 'Alexx',
        age: 227
    },
    {
        id:3,
        name: 'Alexa',
        age: 225
    },
    {
        id:4,
        name: 'Alexe',
        age: 232
    },
]
function doc(userArr) {
    for (let user of userArr) {
               document.write(`<div>id - ${user.id}</div>`);
               document.write(`<div>name - ${user.name}</div>`);
               document.write(`<div>age - ${user.age}</div>`);
               document.write(`<hr>`)
    }
}
doc(users)
// // - створити функцію яка повертає найменьше число з масиву
function minNumOfArr(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minNumOfArr([12,22,1234,-22,99999]))
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumOfArr(arr) {
  let sum = 0;
  for (let arrElement of arr) {
    sum += arrElement
  }
  return sum;
}
console.log(sumOfArr([12,22,1,-22,99]))
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let numbersArr = [0,1,2,3,4]
function swap(arr,index1,index2) {
    let save = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = save;
}
swap(numbersArr,2,4)
console.log(numbersArr)
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencyArr = [{currency:'USD',value:40},{currency:'EUR',value:42}];
function exchange(sumUAH,currencyValues,exchangeCurrency) {
   let currency = 0

    for (const value of currencyValues) {
        if (value.currency === exchangeCurrency) {
            currency = value.value
        }
    }

    return console.log(sumUAH / currency)
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')