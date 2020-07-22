//camelCase
var age = 22;
var firstName = 'Sayeed';
var lastName;
var job;
job = 's2';
var myString =
  'My name is ' + firstName + '. I am ' + age + ' years old. I am a ' + job;
// type coercion
console.log(
  'My name is ' + firstName + '. I am ' + age + ' years old. I am a ' + job
);
lastName = prompt('What is your last name?');
alert(
  'My name is ' +
    firstName +
    ' ' +
    lastName +
    '. I am ' +
    age +
    ' years old. I am a ' +
    job
);

console.log(typeof myString);
