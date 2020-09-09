//Hoisting

// calculateAge(1997);

// function calculateAge(year) {
//   console.log(2020 - year);
// }

// //retirement(22);

// var retirement = function (age) {
//   console.log(60 - age);
// };

// retirement(23);

// console.log(age);
// var age = 23;
// console.log(age);

//Scope Chain

// var a = 'Hello!';
// first();

// function first() {
//   var b = 'Hi!';
//   second();
//   function second() {
//     var c = 'Hey!';
//     console.log(a + b + c);
//     third();
//   }
// }

// function third() {
//   console.log('HI!');
//   console.log(c);
// }

//the this variable

// function calculateAge() {
//   console.log(this);
// }

// calculateAge();

var person = {
  name: 'afridi',
  birthYear: 1997,
  calculateAge: function () {
    console.log(this);
    function innerFunc() {
      console.log(this);
    }
    innerFunc();
  },
};

person.calculateAge();
