
var startButton = document.querySelector('#start');
var timeEl = document.querySelector('#time');
var startScreen = document.querySelector('#start-screen');
var qPage = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");



function startGame(){
    console.log(startButton)
    startScreen.style.display = 'none';
    console.log(qTitle);
    qPage.style.display = 'block';
    qTitle.textContent = 'which is the right answer?';
    
    
    
timer()
}

function timer(){
   var secondsLeft = 20;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stop
          clearInterval(timerInterval);
          // Do something when 0 happens
         
        }
       }, 1000); //1 second at a time
 }


//print first question
//console.log(questions[0], [1]);
    

// document.querySelector("#start-screen", display, none);
// document.querySelector("#questions", text-align, center);
// document.querySelector("#question-title").textContent = "which is the right answer?";










startButton.addEventListener('click', startGame)


