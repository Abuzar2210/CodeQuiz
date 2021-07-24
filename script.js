// time var
var timeElement = document.querySelector(".time")
//qurstion answer var
var question = document.querySelector("#question")
var options = document.querySelector("#options")
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
        options: [".js", ".java",".script", ".css"],
        answer: ".js"
        
    },
    {
        question: "What do we call properties inside an object?",
        options: ["Methods", "Functions", "Element Names", "Key Value Pairs"],
        answer: "Key Value Pairs"
        
    },
    {
        question: "Which of these chocies allows duplicate elements?",
        options: ["Set", "List", "All", "None of the above"],
        answer: "List"
        
    },
    {
        question: "Which built in method removes the first element of an array?",
        options: ["shift()", "removeLast()", "pop()", "last()"],
        answer: "shift()"
    },
    {
        question: "ArrayList implements which of the following?",
        options: ["List", "RandomAccess", "Cloneable", "All of the above"],
        answer: "All of the above"
    }
]

 //time function

 function startTime(){
     timeElement.setAttribute("style","display:block;");
     options.setAttribute("style","display:block;");
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
         timeElement.textContent = secondsLeft + " Remaining time left until Game Ends";
         
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
     question.textContent = quiz[whichQuestion].question; 
     options.textContent = "";

     for( let i = 0; i < quiz[whichQuestion].options.length; i++){
         
        
        var newButton = document.createElement("button");
         newButton.textContent = quiz[whichQuestion].options[i];
         newButton.setAttribute("data-id", i);
         newButton.addEventListener("click", evaluateAnswer);
         newButton.style.display = "block";
         options.append(newButton);
     }
     return;
 }

 function evaluateAnswer(event){
     event.stopPropagation();
     console.log(event.target.textContent)
     console.log(quiz[whichQuestion].answer)
     if(event.target.textContent !== quiz[whichQuestion].answer){
         secondsLeft = secondsLeft -10;
         options.style.backgroundColor = "red"
     }   else{
         score++; 
         options.style.backgroundColor = "green";
     }
     question.textContent = "";

     if(whichQuestion === quiz.length-1) {
         saveInitial();
         clearInterval(timer);
         sendMessage();
         finished.setAttribute("style", "display:block")
     } else{
         whichQuestion++;
         showQuiz();
     }
 }

 function saveInitial() {
     startButton.disabled = false;

     timeElement.setAttribute("style","display:none;");
     options.setAttribute("style","display:none;");
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

     submitButton.addEventListener("click", saveScore);

     function saveScore(event){
         event.preventDefault();

         var inputInitial = document.querySelector(".input");
         var saveMyScore = {
             score : score, 
             inputInitial: inputInitial.value,
         };
         console.log(saveMyScore);
         localStorage.setItem("saveMyScore", JSON.stringify(saveMyScore));
         renderMessage();

         function renderMessage(){
             gameScore.setAttribute("style", "display:black");
             var lastScore = JSON.parse(localStorage.getItem("saveMyScore"));
             gameScore.textContent = `Score: ${lastScore.score} Initials: ${lastScore.inputInitial}`;


         }
     }


 }

 startButton.addEventListener("click", startTime);

