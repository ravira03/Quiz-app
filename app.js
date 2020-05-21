function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<div class = contain><span class='text'>Result</span></div>";
    gameOverHTML += "<div class = contain><span id='score'> Your score is: " + quiz.score + "</span></div>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?",["fixed()","big()","blink()","bold()"], "fixed()"),
    new Question("Can you pass a anonymous function as an argument to another function?",["true","false","none of the above","either true or false"],"true"),
    new Question("Which of the following type of variable is visible only within a function where it is defined?",["global variable","local variable","Both of the above.","None of the above."] ,"local variable"),
    new Question("Which built-in method returns the characters in a string beginning at the specified location?",["substr()","getSubstring()","slice()","None of the above."], "substr()"),
    new Question(" Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",["toSource()","valueOf()","toString()","None of the above."], "toString()"),
    new Question(" Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",["slice()","split()","substr()","search()"],"substr()")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





