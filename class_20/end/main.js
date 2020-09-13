// var sayeed1 = {
//   name: 'Sayeed Afridi',
//   age: 23,
//   birthYear: 1997,
// };

// console.log(sayeed1);
// sayeed.name = 'Afridi';
// console.log(sayeed.name);
// var Person = function (name, age, birthYear) {
//   this.name = name;
//   this.age = age;
//   this.birthYear = birthYear;
// };

// var sayeed = new Person('Afridi', 23, 1997);
// var hridoy = new Person('Anti Virus', 22, 1998);

// console.log(sayeed, hridoy);

// var Person = {
//   name: 'Sayeed',
//   age: 23,
// };

// var sayeed = Object.create(Person, {
//   name: {
//     value: 'Afridi',
//   },
//   age: {
//     value: 23,
//   },
// });

// console.log(sayeed);

//inheritance -> prototype chain

// var Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// // Person.prototype.calculateAge = function () {
// //   this.age = 2020 - this.birthYear;
// // };

// var sayeed = new Person('Afridi', 1997);
// var hridoy = new Person('Anti Virus', 1998);

// console.log(sayeed.calculateAge);
// console.log(hridoy.hasOwnProperty());
// console.log(sayeed, hridoy);

// var arr = [1, 2, 3];
// var arr2 = new Array();
// console.log(arr, arr2);

//sayeed -> proto -> Person proto -> super Parent -> Object proto -> null

// Primitives vs Object
// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);

// var obj1 = {
//   age: 23,
// };

// var obj2 = Object.create(obj1);

// obj1.age = 25;
// obj2.age = 30;

// console.log(obj1.age, obj2.age);

// var age = 23;
// var obj = {
//   city: 'rangpur',
// };

// function test(a, b) {
//   a = 46;
//   b.city = 'Dinajpur';
// }

// test(age, obj);

// console.log(age, obj.city);

//Functions

// function test1(a, fun) {
//   console.log(a);
//   fun();
// }

// test1(23, clb);

// function clb() {
//   console.log('This is a callback function');
// }

// function retirement(retirementAge) {
//   var a = ' years left until retirement';
//   return function (birthYear) {
//     //1.VOg, 2Vor, 3VOret
//     var age = 2020 - birthYear;
//     console.log(retirementAge - age + a);
//     return function () {
//       console.log('Hello');
//     };
//   };
// }
// //1 global exc, 2, retirement 1. VOg 2. VOr
// var ret = retirement(60)(1997);
// //1 global exc, 1.VOg, 2Vor, 3VOret
// ret();
