//Arrays
// const boxes = document.querySelectorAll('.box');

//es5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (curr) {
//   curr.style.backgroundColor = 'dodgerblue';
// });

// es6
// var boxesArr6 = Array.from(boxes);
// boxesArr6.forEach((curr) => (curr.style.backgroundColor = 'dodgerblue'));

//loops
//es5
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === 'box blue') {
//     continue;
//   }
//   boxesArr5[i].textContent = 'I have changed to blue.';
// }

//es6 for of loop
// for (const curr of boxesArr6) {
//   if (curr.className.includes('blue')) {
//     continue;
//   }
//   curr.textContent = 'I have changed to blue';
// }

// var ages = [12, 17, 21, 13, 11];

//es5
// var full = ages.map(function (curr) {
//   return curr >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// es6

// const ix = ages.findIndex((curr) => curr >= 18);
// console.log(ix);
// const fullAge = ages.find((curr) => curr >= 18);
// console.log(fullAge);

//The spread Operator

// var ages = [18, 30, 12, 21];

// function addFour(a, b, c, d) {
//   return a + b + c + d;
// }
// var sum1 = addFour(18, 30, 12, 21);
// console.log(sum1);
//es5
// var sum2 = addFour.apply(null, ages);
// console.log(sum2);

//es6
// const sum3 = addFour(...ages);
// console.log(sum3);

// const a = ['a', 'b', 'c'];
// const b = ['d', 'e', 'f'];
// const c = [...a, ...b];
// console.log(c);

//rest and default parameters

// es5

// function isFullAge5() {
//   var argsArr = Array.prototype.slice.call(arguments);
//   argsArr.forEach(function (curr) {
//     console.log(2020 - curr >= 18);
//   });
// }
// isFullAge5(1990, 2005, 1997, 2009, 2006);

//es6
// function isFullAge6(limit = 18, ...years) {
//   console.log(years, limit);
//   years.forEach((curr) => console.log(2020 - curr >= limit));
// }
// isFullAge6(25, 1990, 2005, 1997, 2009, 2006);

//classes and subclasses
class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
}
