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
        correctAnswers: a,
        },
        
    },
    {
        question: "What do we call properties inside an object?",
        answers:{
            a: "Methods",
            b: "Functions",
            c: "Element Names",
            d: "Key Value Pairs",
        correctAnswers: d,
        },
        
    },
    {
        question: "Which of these chocies allows duplicate elements?",
        answers:{
            a: "Set",
            b: "List",
            c: "All",
            d: "None of the above",
        correctAnswers: b,
        },
        
    },
    {
        question: "Which built in method removes the first element of an array?",
        answers:{
            a: "shift()",
            b: "removeLast()",
            c: "pop()",
            d: "last()",
        correctAnswers: a,
        },
        
    },
    {
        question: "ArrayList implements which of the following?",
        answers:{
            a: "List",
            b: "RandomAccess",
            c: "Cloneable",
            d: "All of the above",
        correctAnswers: d,
        },
        
    }
]


