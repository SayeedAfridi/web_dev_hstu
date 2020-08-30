document.getElementById('cart-form').addEventListener('submit', estimateTotal);

var btn = document.getElementById('total-btn');
btn.disabled = true;
var shipping = document.getElementById('shipping');
shipping.addEventListener('change', function (e) {
  if (e.target.value === '') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});

function estimateTotal(event) {
  event.preventDefault();
  var sneakerQt = parseInt(document.getElementById('sneaker-qt').value, 10);
  var jersyQt = +document.getElementById('jersy-qt').value;
  var bballQt = +document.getElementById('bball-qt').value;
  var sneakerPrice = 2000 * sneakerQt;
  var jersyPrice = 3000 * jersyQt;
  var bballPrice = 2000 * bballQt;
  var totalPrice = sneakerPrice + jersyPrice + bballPrice;

  var extraCost = 0;

  switch (shipping.value) {
    case 'rn':
      extraCost = totalPrice * 0.016;
      break;
    case 'sy':
      extraCost = totalPrice * 0.012;
      break;
    default:
      extraCost = 0;
  }

  totalPrice += extraCost;
  var qurier = document.getElementById('qurier').checked;
  if (qurier) {
    totalPrice += 60;
  }
  var totalBox = document.getElementById('total-box');
  totalBox.innerHTML =
    '<h4 class="total-text">Your total cost: ' +
    '&#2547;' +
    totalPrice +
    '</h4>';
}
