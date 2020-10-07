//variable declaration with let and const
// var a = 23;
// let b = 50;
// const c = 30;
// console.log(a, b, c);
// b = 'Sayeed';
// a = 40;
// console.log(a, b, c);

//es5
// function driverLiscense5(passed) {
//   if (passed) {
//     console.log(firstName);
//     var firstName = 'Sayeed';
//   }
//   console.log(firstName + ' is officially allowed to drive.');
// }

// driverLiscense5(true);

//es6

// function driverLiscense6(passed) {
//   if (passed) {
//     console.log(firstName);
//     const firstName = 'Sayeed';
//   }
//   console.log(firstName + ' is officially allowed to drive.');
// }

// driverLiscense6(true);

//Blocks and IIFEs
//es6
// {
//   let a = 23;
//   let c = 24;
//   var d = 26;
// }

// console.log(d);

//es5
// (function () {
//   var d = 6;
// })();

// console.log(d);

//String

// let firstName = 'Sayeed';
// let job = 'Student';
//const birthYear = 1997;

// function calcAge() {
//   return 2020 - birthYear;
// }

//es5
// console.log(
//   'Hi this is ' +
//     firstName +
//     '. I am a ' +
//     job +
//     '. I am ' +
//     calcAge() +
//     ' years old now.'
// );

//es6

// console.log(
//   `Hi this is ${firstName}. I am a ${job} . I am ${calcAge()} years old now.`
// );

// console.log(firstName.startsWith('Say'));
// console.log(firstName.endsWith('da'));
// console.log(firstName.includes('Sayeed'));
// console.log(`${firstName} `.repeat(5));

//Arrow Function

// let birthYear = [1997, 1998, 1999, 2000, 2001];
//es5
// let ages5 = birthYear.map(function (year) {
//   return 2020 - year;
// });

// console.log(ages5);

//es6

// let ages6 = birthYear.map((year) => 2020 - year);

// let strMap = ages6.map((age, index) => {
//   const str = `Age element ${index + 1}: ${age}`;
//   return str;
// });
// console.log(strMap);

//es5
// const box = {
//   color: 'red',
//   width: 100,
//   height: 50,
//   click: function () {
//     console.log('Main method');
//     let self = this;
//     return function () {
//       console.log('Inner function');

//       console.log(
//         `This is a ${self.color} box with the area of ${
//           self.height * self.width
//         }`
//       );
//     };
//   },
// };

// let boxDetails = box.click();
// boxDetails();

//es6

// const box6 = {
//   color: 'red',
//   width: 100,
//   height: 50,
//   click: function () {
//     console.log('Main method');
//     return () => {
//       console.log('Inner function');
//       console.log(
//         `This is a ${this.color} box with the area of ${
//           this.height * this.width
//         }`
//       );
//     };
//   },
// };

// boxDetails = box6.click();
// boxDetails();

//Destructuring

// let arr = ['Sayeed', 23, 'Afridi'];

// const [name, age, lastName] = arr;
// console.log(name, age, lastName);
// const { color, width } = box6;
// console.log(color, width);

//Arrays

//The spread Operator

//rest and default parameters

//classes and subclasses
