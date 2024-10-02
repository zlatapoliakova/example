"use strict";

// let num = 20;

// function showFirstMessage(text){
//     console.log(text);
//     let num = 10;
//     console.log(num)
// }

// showFirstMessage("Hello World");
// console.log(num);

// function calc(a, b){
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,4));

// // function declaration існує до того як наш код запрацює
// function ret(){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// //function exspression
// const logger = function() {
//     console.log("Hello")
// };

// logger();

// //стрелочние функции, нет своего контекста
// const calc = (a, b) => { return a + b};
// const calc = (a, b) => a + b;

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result){
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (i = 0; i < 5; i++){
//         console.log(i);
//         if (i === 3) return;
//     }
//     console.log("Done");
// }

// test();

// function doNothing(){}
// console.log(doNothing() === undefined);

// const str = "test";
// const arr = [1, 2, 4]

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// //numbers
// const num1 =  12.2;
// console.log(Math.round(num1));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`I lrearn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I finished this study')
// }

// learnJS('JavaScript', done);


// //object
// const option = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// option.makeTest();

// const {border, bg} = option.colors; //деструктиризация
// console.log(border);

// console.log(Object.keys(option).length);

// console.log(option["colors"]["border"]);

// delete option.name;

// console.log(option);
// let counter = 0;

// for (let key in option) {
//     if (typeof(option[key]) === 'object') {
//         for (let i in option[key]) {
//             console.log(`Свойство ${i}, має значення ${option[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key}, має значення ${option[key]}`);
//     }
//     counter++;
// }

// console.log(counter);

//Array/ subarray

const arr3 = [1, 26, 3, 74, 5];
arr3.sort(compareNum);

console.log(arr3);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr3.forEach(function(item, i, arr3) {
//     console.log(`${i}: ${item} inside array: ${arr3}`)
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value)
// }

const strp = prompt("", "");
const products = strp.split(", ");
products.sort();
console.log(products.join('; '));

let a = 5,
    b = a;

b = b + 5; 

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //передає посилання

copy.a = 10;

console.log(copy);
console.log(obj);

function cope(mainObj) {
    let objCopy = {};

    let key;
    for( key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = cope(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'aoofdkovkfgfp';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutub'],
      blogs = ['widepress', 'livejournal', 'bloger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numl = [2, 5, 7];

log(...numl);

const arraay = ['a', 'b'];
const newArraay = [...arraay];
console.log(newArraay);
    
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);
