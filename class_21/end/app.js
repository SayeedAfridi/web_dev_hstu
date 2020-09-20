function QuizGame() {
  function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ': ' + this.answer[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans, callback) {
    var sc = 0;
    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer. Try Again!');
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function (score) {
    console.log('Your current score: ' + score);
    console.log('--------------------------------');
  };

  var q1 = new Question('Is JS the coolest?', ['Yes', 'No'], 0);

  var q2 = new Question(
    "Teacher's name of this course?",
    ['Hridoy', 'Afridi', 'Afrad', 'Anny'],
    1
  );

  var q3 = new Question(
    'What describes coding best?',
    ['Boring', 'Interesting', 'Fun'],
    2
  );

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var ans = prompt(
      'Please enter the correct answer. Enter exit to exit the app.'
    );
    if (ans !== 'exit') {
      questions[n].checkAnswer(+ans, keepScore);
      nextQuestion();
    } else {
      console.log('App exited.!');
    }
  }
  nextQuestion();
}
