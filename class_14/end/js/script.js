// var name = 'sayeed'

// window.name = 'sayeed'
// var person = {};
// var h = 'hello';
// function func() {
//   console.log('From function');
// }
// console.log(person);
// person.name = 'Sayeed';
// console.log(person);
// console.log('Hello');
// func();
// window.func();

// console.log(document.baseURI);

// Query selector
// class . id #
// var dom = document.querySelectorAll('.dom');
//dom.textContent = 'Hello from the dom';
// dom.innerHTML = '<p style="color: red;">This text is red</p>';
// dom[1].textContent = 'Hello from all';

// var dom = document.getElementsByClassName('dom');
// console.log(dom);

// var dom1 = document.querySelectorAll('h1');
// dom1[1].textContent = 'Hello';

var dom1 = document.getElementById('dom1');

dom1.classList.add('myClass');
dom1.classList.remove('dom');
dom1.classList.toggle('dom');
dom1.classList.toggle('dom');

document.getElementById('google').href = 'https://google.com';
