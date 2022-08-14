import readlineSync from 'readline-sync';
import chalk from 'chalk';

var quizData = [ 
      {
      question: "What is the name of the system in the human body that transports blood?",
      answer: "Cardiovascular"
    },{
      question: "What hormone, produced in the pancreas, regulates blood sugar levels?",
      answer: "Insulin"
    },{
      question: "What is the hardest tissue in the human body?",
      answer: "Enamel"
    },{
      question: "How many bones are present in the human body?",
      answer: "206"
    },{
      question: "Brain's functional unit cells are called?",
      answer: "Neurons"
    },{
      question: "Which organelle present inside our cells is resonsible for engergy?",
      answer: "Mitochondria"
    }
  ];

var score = 0;
var level = ' Noob ';
function welcome(){
    console.log(chalk.blue("Welcome! Get ready to test your Anatomical knowelege\n\n")
    + chalk.cyan("Each right answer gets you 3 points and each wrong answer reduces 1, you may skip the question by pressing enter")
    + chalk.red("\n---------------------------------------------------------\n")
  );
}

function game(){
    for (var quizObj of quizData) {
    var answerUser = readlineSync.question(quizObj.question);
    if (answerUser === '') {
      continue;
    }
    if (answerUser.toUpperCase() === quizObj.answer.toUpperCase()) {
      console.log(chalk.green("Good job! :)\n"));
      score++;
    } else {
      console.log(chalk.blue("The correct answer is ")+chalk.bgGreen(quizObj.answer)+chalk.blue(" Better luck next time :(\n"));
      score--;
    }
  }
}


function showScores(){
      if (score > 5) {
      level = ' Grandmaaster ';
    } else if (score > 0 && score < 5) {
      level = ' Master ';
    }
    console.log(chalk.red("---------------------------------------------------------"));
    console.log(chalk.blue("\nYAY! You SCORED: ") + chalk.bgGreen(" "+score+" ") + chalk.blue(" and your LEVEL is ") + chalk.bgGreen(level));
}


welcome();
game();
showScores();