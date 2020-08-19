/* 
  Objects in js

  OOP Fundamentals
  A PIE

  Abstraction
                      Abstract Mobile Class
                        weight
                        body dimension
                        color

                        call()
                        text()
                        browsing()



  Encapsulation
        balance = 500
        deposite(500)

        private public protected


  Inheritance
                    Abstract Mobile Class -------------------------------> Parent class / super class
                    protected display 
                    weight
                        body dimension
                        color

                        call(number)      absObj.call()   smObj.cal()
                        text() 
                        browsing()

        Samsung entends Mobile         Sony Extends Mobile ----------------> Child Class/ Sub Class
              Safe Vault                    Camera Better
              Display Amoled

              method overriding
              call(number){
                .......
                ........
              }
        Samsung S-series class Entends Samsung
              ......


  Polymorphism
          01. Dynamic / run time



          02. Static / compile time

            class Drinks{
              
              Method Overloading

              tea(teaLeaf, water, sugar){

              }

              tea(teaLeaf, water, sugar, milk){

              }
            }


            Primitives
            01. number
            02. String
            03. Undefined
            04. boolean
            05. null


*/

var person = {
  name: ['Sayeed', 'Afridi', 'Salauddin'],
  gender: 'Male',
  birthYear: 1997,
  calculateAge: function () {
    var now = 2020;
    return now - this.birthYear;
  },
};

person.isMaried = false;

console.log(person.name[1] + ' is married ' + person.isMaried);

var age = person.calculateAge();
console.log(age);
