// time var
var timeElement = document.querySelector(".time")
//qurstion answer var
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
// game score and game end var
var gameScore = document.querySelector(".game-score")
var finished = document.querySelector("#game-finished")
// start button var
var startButton = document.querySelector(".startbtn")
// player initials var
var initials = document.querySelector("#initials")

var secondsLeft;
var score=0;
var whichQuestion=0;
var timer; 

// questions for the quiz game

let quiz =[
    {
        question: "What is the file type for Javascript?",
        answers:{
            a: ".js",
            b: ".java",
            c: ".script",
            d: ".css",
            correctAnswers: "a"
        },
        
    },
    {
        question: "What do we call properties inside an object?",
        answers:{
            a: "Methods",
            b: "Functions",
            c: "Element Names",
            d: "Key Value Pairs",
            correctAnswers: "d"
        },
        
    },
    {
        question: "Which of these chocies allows duplicate elements?",
        answers:{
            a: "Set",
            b: "List",
            c: "All",
            d: "None of the above",
            correctAnswers: "b"
        },
        
    },
    {
        question: "Which built in method removes the first element of an array?",
        answers:{
            a: "shift()",
            b: "removeLast()",
            c: "pop()",
            d: "last()",
            correctAnswers: "a"
        },
        
    },
    {
        question: "ArrayList implements which of the following?",
        answers:{
            a: "List",
            b: "RandomAccess",
            c: "Cloneable",
            d: "All of the above",
            correctAnswers: "d"
        },
        
    }
]

 //time function

 function startTime(){
     timeElement.setAttribute("style","display:block;");
     answers.setAttribute("style","display:block;");
     question.setAttribute("style","display:block;");
     initials.setAttribute("style","display:none;");
     gameScore.setAttribute("style","display:none;");
     finished.setAttribute("style","display:none;");

     secondsLeft=90;
     whichQuestion=0;
     startButton.disabled= true;
     showQuiz();

     timer = setInterval(function(){
         secondsLeft--;
         timeElement.textContent = secondsLeft + "remaining time left until Game Ends";
         
         if(secondsLeft <=0 || whichQuestion === quiz.length){
             clearInterval(timer);
             sendMessage();
             saveInitial();
             finished.setAttribute("style", "display:block")
             return;
         }
     }, 1000);
 }

 function sendMessage(){
     finished.textContent = "Game Finished";
 }

 // questions fucntion

 function showQuiz(){
     question.textContent = quiz[whichQuestion].question; answers.textContent = "";

     for( let i = 0; i < quiz[whichQuestion].answers.length; i++){
         var newButton = document.createElement("button");
         newButton.textContent = quiz[whichQuestion].answers[i];
         newButton.setAttribute("data-id, i");
         newButton.addEventListener("click", evaluateAnswer);
         newButton.style.display = "block";
         answers.append(newButton);
     }
     return;
 }

 function evaluateAnswer(event){
     event.stopPropagation();
     console.log(event.target.textContent)
     console.log(quiz[whichQuestion].answer)
     if(event.target.textContent !== quiz[whichQuestion].answer){
         secondsLeft = secondsLeft -10;
         answers.style.backgroundColor = "red"
     }   else{
         score++; answers.style.backgroundColor = "green";
     }
     question.textContent = "";

     if(whichQuestion === quiz.length-1){
         saveInitial();
         clearInterval(timer);
         sendMessage();
         finished.setAttribute("style", "display:block")
     } else{
         whichQuestion++;
         showQuiz();
     }
 }

 function saveInitial(){
     startButton.disabled = false;

     timeElement.setAttribute("style","display:none;");
     answers.setAttribute("style","display:none;");
     question.setAttribute("style","display:none;");
     initials.setAttribute("style","display:block;");

     initials.textContent = "Please type in your Initials here";

     var userInitial = document.createElement("input");
     userInitial.setAttribute("class", "input");
     userInitial.setAttribute("type", "text");

     var submitButton = document.createElement("input");
     submitButton.setAttribute("type", "button");
     submitButton.setAttribute("value", "submit");

     initials.append(userInitial);
     initials.append(submitButton);
     
 }
