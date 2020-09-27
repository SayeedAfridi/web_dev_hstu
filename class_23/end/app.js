//Budget controller
var budgetController = (function () {
  var x = 23;
  var add = function (a) {
    return a + x;
  };
  return {
    publicTest: function (b) {
      console.log(add(b));
    },
  };
})();

//UI Controller
var UIController = (function () {
  var DOMStrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDesc).value,
        value: +document.querySelector(DOMStrings.inputValue).value,
      };
    },
    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();

//Main App controller
var controller = (function (budgetCtrl, UICtrl) {
  //some code
  var DOM = UICtrl.getDOMStrings();
  var setupEventListeners = function () {
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        ctrlAddItem();
      }
    });
  };
  var ctrlAddItem = function () {
    //01. get input field data
    var input = UICtrl.getInput();
    console.log(input);
    //02.add the item to the budget controller
    //03.add new item to the ui
    //04. Calculate the budget
    //05. display the budget
  };

  return {
    init: function () {
      console.log('App started!');
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
