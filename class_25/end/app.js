//Budget controller
var budgetController = (function () {
  // id, description, value
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIcome) {
    /*
    income = 100
    a = 10 -> 10%
    b = 2 -> 2%
    exp/totalInc
    */
    if (totalIcome > 0) {
      this.percentage = Math.round((this.value / totalIcome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
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
    deleteItem: function (type, id) {
      var newArr = data.allItems[type].filter(function (item) {
        return item.id !== id;
      });
      data.allItems[type] = newArr;
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
    calculatePercentages: function () {
      data.allItems.exp.forEach(function (item) {
        item.calcPercentage(data.totals.inc);
      });
    },
    getPercentages: function () {
      var allPercentages = data.allItems.exp.map(function (item) {
        return item.getPercentage();
      });
      return allPercentages;
    },
    getBudget: function () {
      return {
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
        budget: data.budget,
      };
    },
    testPublic: function () {
      console.log(data);
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
    listContainer: '.container',
    expPercentage: '.item__percentage',
    month: '.budget__title--month',
  };

  var formatNumber = function (num, type) {
    var numSplit, int, dec, sign;
    num = Math.abs(num);
    num = num.toFixed(2);
    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];
    if (int.length > 3) {
      //23,456
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }
    type === 'inc' ? (sign = '+') : (sign = '-');
    return sign + ' ' + int + '.' + dec;
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
          '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        container = document.querySelector(DOMStrings.expenseContainer);
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      //replace placeholder text
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
      // add to dom
      container.insertAdjacentHTML('beforeend', newHtml);
    },
    deleteListItem: function (selectorId) {
      var item = document.getElementById(selectorId);
      item.parentNode.removeChild(item);
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
      if (obj.budget >= 0) {
        document.querySelector(
          DOMStrings.budgetValue
        ).textContent = formatNumber(obj.budget, 'inc');
      } else {
        document.querySelector(
          DOMStrings.budgetValue
        ).textContent = formatNumber(obj.budget, 'exp');
      }
      document.querySelector(
        DOMStrings.budgetIncome
      ).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(
        DOMStrings.budgetExpense
      ).textContent = formatNumber(obj.totalExp, 'exp');
      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.budgetPercentage).textContent =
          obj.percentage + '%';
      } else {
        document.querySelector(DOMStrings.budgetPercentage).textContent = '---';
      }
    },
    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(DOMStrings.expPercentage);

      var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

      nodeListForEach(fields, function (item, index) {
        if (percentages[index] > 0) {
          item.textContent = percentages[index] + '%';
        } else {
          item.textContent = '---';
        }
      });
    },
    displayMonth: function (text) {
      document.querySelector(DOMStrings.month).textContent = text;
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
    document
      .querySelector(DOM.listContainer)
      .addEventListener('click', ctrlDeleteItem);
  };

  var updateBudget = function () {
    //04. Calculate the budget
    budgetCtrl.calculateBudget();
    var budget = budgetCtrl.getBudget();
    //05. display the budget
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function () {
    //calc percentages
    budgetCtrl.calculatePercentages();
    //get per...
    var allPercentages = budgetCtrl.getPercentages();
    //show to ui
    UICtrl.displayPercentages(allPercentages);
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
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function (event) {
    var itemId, splitId, type, id;
    itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemId) {
      splitId = itemId.split('-');
      type = splitId[0];
      id = +splitId[1];
      //Delete item from data structure
      budgetController.deleteItem(type, id);
      //delete from ui
      UICtrl.deleteListItem(itemId);
      //update budget
      updateBudget();
      updatePercentages();
    }
  };
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var updateMonth = function () {
    var d = new Date();
    var m = d.getMonth();
    UICtrl.displayMonth(months[m]);
  };
  return {
    init: function () {
      console.log('App started!');
      setupEventListeners();
      updateBudget();
      updateMonth();
    },
  };
})(budgetController, UIController);

controller.init();
