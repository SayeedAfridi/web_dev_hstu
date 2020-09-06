//setInterval setTimeOut
var opacity = 1;
// var wekDays = [
//   'sunday',
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
// ];
// var months = [
//   'jan',
//   'feb',
//   'mar',
//   'apr',
//   'may',
//   'jun',
//   'jul',
//   'aug',
//   'sep',
//   'oct',
//   'nov',
//   'dec',
// ];
//function test() {
//var d = new Date();
// var min;
// var hour = d.getHours();
// var ampm = 'am';
// if (hour > 12) {
//   hour = hour - 12;
//   ampm = 'pm';
// } else if (hour === 0) {
//   hour = 12;
//   ampm = 'am';
// }
// if (hour < 10) {
//   hour = '0' + hour;
// }
// if (d.getSeconds() % 2 === 0) {
//   opacity = 0;
// } else {
//   opacity = 1;
// }
// if (d.getMinutes() < 10) {
//   min = '0' + d.getMinutes();
// } else {
//   min = d.getMinutes();
// }
//var timeDOM = document.getElementById('time');
// timeDOM.innerHTML =
//   hour + '<span style="opacity: ' + opacity + '">:</span>' + min + ampm;
// document.querySelector('.day').textContent =
//   wekDays[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getFullYear();
//}
function test() {
  var d = new Date();
  if (d.getSeconds() % 2 === 0) {
    opacity = 0;
  } else {
    opacity = 1;
  }
  var timeDOM = document.getElementById('time');
  timeDOM.innerHTML = moment(d).format(
    'hh[<span style="opacity: ' + opacity + '">:</span>]mma'
  );
  document.querySelector('.day').textContent = moment(d).format(
    'dddd, MMM Do YYYY'
  );
}

// setTimeout(test, 1000);
// setTimeout(test, 2000);
// setTimeout(test, 3000);
setInterval(test, 1000);
