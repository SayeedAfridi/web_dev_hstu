//camelCase
// var age = 22;
// var firstName = 'Sayeed';
// var lastName;
// var job;
// job = 's2';
// var myString =
//   'My name is ' + firstName + '. I am ' + age + ' years old. I am a ' + job;
// // type coercion
// console.log(
//   'My name is ' + firstName + '. I am ' + age + ' years old. I am a ' + job
// );
// lastName = prompt('What is your last name?');
// alert(
//   'My name is ' +
//     firstName +
//     ' ' +
//     lastName +
//     '. I am ' +
//     age +
//     ' years old. I am a ' +
//     job
// );

// console.log(typeof myString);

//variable mutation
// var age = 23;
// console.log(typeof age);
// age = 'twenty three';
// console.log(typeof age);

/****************
 * Basic operators
 */

//Math operators
// var now, birthYear, annyYear, ageAfridi, ageAnny, adultAge;
// ageAfridi = 22;
// ageAnny = 20;
// adultAge = 18;
// now = 2020;
// birthYear = now - 22;
// annyYear = now - 20;
// console.log(birthYear, annyYear);
// console.log(now + 20);
// console.log(now / 20);
// console.log(now * 20);
// console.log(now % 18);
// //2000 1998
// //logical operator
// var afridiOlder = ageAfridi > ageAnny;

// console.log(afridiOlder);

// var isAdult = now - birthYear >= adultAge;
// var averageAge = (ageAfridi + ageAnny) / 2;

// console.log(averageAge);

//Multiple assignment
// var x, y;
// x = y = (3 + 4) * 5 - 6;
// console.log(x, y);

// x = x * 2
// x = 2
// x++

//Branch programming
//conditional statements
// if (ageAfridi > ageAnny) {
//   console.log('Afridi is older than Anny');
// } else {
//   console.log('Afridi is not older than Anny');
// }
// var job = 'teacher';
// var name = 'Afridi';

// if (job === 'student') {
//   console.log(name + ' is a ' + job);
// } else if (job === 'teacher') {
//   console.log('He is a good teacher!');
// } else {
//   console.log(name + ' is unemployed!');
// }

// var age = 19;

// if (age >= 16 && age < 20) {
//   console.log('Teenager');
// } else if (age >= 20) {
//   console.log('Young man!');
// }

//BMI calculator mass/(height *  height)
// var height, weight, bmi;
// height = prompt('Your height?');
// weight = prompt('Your weight?');
// bmi = weight / (height * height);
// if (bmi < 18) {
//   alert('Your bmi: ' + bmi + '\nYou are underweight!');
// } else if (bmi >= 18 && bmi < 25) {
//   alert('Your bmi: ' + bmi + '\nYou are healthy!');
// }
// var name = 'Sayeed';
// var job = 'driver';
// if (job === 'teacher') {
//   console.log(name + ' is a ' + job + ' and teaches programming.');
// } else if (job === 'student') {
//   console.log(name + ' is a ' + job + ' and his academic result is very poor!');
// } else if (job === 'driver') {
//   console.log(name + ' is a ' + job + ' and he drives in dinajpur!');
// } else {
//   console.log(name + ' is unemplyeed!');
// }
// switch (job) {
//   case 'teacher':
//     console.log(name + ' is a ' + job + ' and teaches programming.');
//     break;
//   case 'student':
//     console.log(
//       name + ' is a ' + job + ' and his academic result is very poor!'
//     );
//     break;
//   case 'driver':
//     console.log(name + ' is a ' + job + ' and he drives in dinajpur!');
//     break;
//   default:
//     console.log(name + ' is unemplyeed!');
// }

/********
 * functions
  f(x) = 3x + 2x
  f(2) = 10
  first class function
  DRY ---> Don't repeat yourself!
  
*/
// function addNumber(a, b) {
//   console.log('Inside function!', a, b);
//   return a + b;
// }

// var sum = addNumber(10, 15);
// console.log(sum);

//function declartion
// function calculateAge(birthYear) {
//   var now = 2020;
//   var age = now - birthYear;
//   return age;
// }

// var age = calculateAge(1997);
// var age2 = calculateAge(1998);
// console.log(age, age2);

//function expression
// var myFuncExpr = function (birthYear) {
//   var now = 2020;
//   var age = now - birthYear;
//   return age;
// };

// var age = myFuncExpr(1997);
// var age2 = myFuncExpr(1998);
// console.log(age, age2);

//IIFE --> immedeately invoked function expression
// (function (birthYear) {
//   var now = 2020;
//   var age = now - birthYear;
//   console.log(age);
// })(1997);

//fat arrow function, arrow function, callback function,

//calculateBMI(height, weight)

/********
  Callback Function
*/

// function hello() {
//   console.log('hello');
// }

// function world() {
//   console.log('world');
// }

// function syaHelloWorld(name, func1, func2) {
//   console.log(name);
//   func1();
//   func2();
// }

// syaHelloWorld('saayeed', hello, world);

/********
Array
*/
// var arr = ['a', 'b', 'c', 'd', 'e', 1997, true, undefined, false, null];

// // console.log(arr[1]);
// // console.log(arr.length);
// // arr.push('e');
// // console.log(arr);
// // arr.unshift('0');
// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// // arr.shift();
// // console.log(arr);
// // console.log(arr.indexOf('c'));
// // var arrS = arr.slice(2, 4);
// // console.log(arrS);
// // var arrSp = arr.splice(0, 2, 'X');
// // console.log(arr, arrSp);

// arr[arr.length] = 'hi';

// console.log(arr);

//DRY ---> don't repeate yourself
/**
 * Loop and iteration
 */

//for loop, while loop, do...while loop
// for(init, condition, inc/dec){

// }

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

//var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// console.log(i);

// do {
//   i++;
//   console.log(i);
// } while (i < 10);

// for (var i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// var arr = ['a', 'b', 'c', 'd', 'e', 1997, true, undefined, false, null];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function clBack(el, index, array) {
//   console.log(el, index);
// }

// function myForEach(array, func) {
//   for (var i = 0; i < arr.length; i++) {
//     func(array[i], i, array);
//   }
// }

// myForEach(arr, clBack);

// var newArray = arr.map(function (el) {
//   var node = document.createElement('h1');
//   node.innerText = el;
//   return node;
// });

// newArray.forEach(function (el) {
//   document.getElementById('hi').appendChild(el);
// });
