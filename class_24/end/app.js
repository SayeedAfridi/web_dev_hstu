//Budget controller
var budgetController = (function () {
  // id, description, value
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (curr) {
      sum += curr.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function (type, desc, val) {
      var newItem, id;
      id = data.allItems[type].length
        ? data.allItems[type][data.allItems[type].length - 1].id + 1
        : 0;

      if (type === 'inc') {
        newItem = new Income(id, desc, val);
      } else {
        newItem = new Expense(id, desc, val);
      }
      data.allItems[type].push(newItem);
      return newItem;
    },
    calculateBudget: function () {
      //total inc exp
      calculateTotal('inc');
      calculateTotal('exp');
      //budget = inc - exp
      data.budget = data.totals.inc - data.totals.exp;
      //percentage
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },
    getBudget: function () {
      return {
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
        budget: data.budget,
      };
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
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
    budgetValue: '.budget__value',
    budgetIncome: '.budget__income--value',
    budgetExpense: '.budget__expenses--value',
    budgetPercentage: '.budget__expenses--percentage',
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDesc).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
      };
    },
    addListItem: function (type, obj) {
      //HTML STRING wirh placeholder text
      var html, newHtml, container;

      if (type === 'inc') {
        container = document.querySelector(DOMStrings.incomeContainer);
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        container = document.querySelector(DOMStrings.expenseContainer);
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      //replace placeholder text
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);
      // add to dom
      container.insertAdjacentHTML('beforeend', newHtml);
    },
    clearFileds: function () {
      var fields, filedsArray;
      fields = document.querySelectorAll(
        DOMStrings.inputDesc + ', ' + DOMStrings.inputValue
      );
      //call
      filedsArray = Array.prototype.slice.call(fields);
      filedsArray.forEach(function (curr) {
        curr.value = '';
      });
      filedsArray[0].focus();
    },
    getDOMStrings: function () {
      return DOMStrings;
    },
    displayBudget: function (obj) {
      if (obj.budget > 0) {
        document.querySelector(DOMStrings.budgetValue).textContent =
          '+ ' + obj.budget;
      } else {
        document.querySelector(DOMStrings.budgetValue).textContent = obj.budget;
      }
      document.querySelector(DOMStrings.budgetIncome).textContent =
        '+ ' + obj.totalInc;
      document.querySelector(DOMStrings.budgetExpense).textContent =
        '- ' + obj.totalExp;
      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.budgetPercentage).textContent =
          obj.percentage + '%';
      } else {
        document.querySelector(DOMStrings.budgetPercentage).textContent = '---';
      }
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

  var updateBudget = function () {
    //04. Calculate the budget
    budgetCtrl.calculateBudget();
    var budget = budgetCtrl.getBudget();
    //05. display the budget
    console.log(budget);
    UICtrl.displayBudget(budget);
  };

  var ctrlAddItem = function () {
    //01. get input field data
    var input = UICtrl.getInput();
    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
      //02.add the item to the budget controller
      var budget = budgetCtrl.addItem(
        input.type,
        input.description,
        input.value
      );
      //03.add new item to the ui
      UICtrl.addListItem(input.type, budget);
      UICtrl.clearFileds();
      updateBudget();
    }
  };

  return {
    init: function () {
      console.log('App started!');
      setupEventListeners();
      updateBudget();
    },
  };
})(budgetController, UIController);

controller.init();
