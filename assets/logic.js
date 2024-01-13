
var startButton = document.querySelector('#start');
var timeEl = document.querySelector('#time');
var startScreen = document.querySelector('#start-screen');
var qPage = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var qchoices = document.querySelector("#choices");


function startGame(){
    console.log(startButton)
    startScreen.style.display = 'none';
    console.log(qTitle);
    //change display property from none (which makes the page not visible)
    qPage.style.display = 'block';

    //display the question
    qTitle.textContent = questions[0].question;
    //display the answers
    //qchoices.textContent = questions[0].answerA;
    var li = document.createElement("li");
    li.textContent = questions[0].answerA;
    qchoices.appendChild(li);

    var li = document.createElement("li");
    li.textContent = questions[0].answerB;
    qchoices.appendChild(li);

    var li = document.createElement("li");
    li.textContent = questions[0].answerC;
    qchoices.appendChild(li);

    var li = document.createElement("li");
    li.textContent = questions[0].answerD;
    qchoices.appendChild(li);


    //call timer function to start the clock
  timer()
}



//function to start the timer --------------------------------------------------------------------
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
//end of timer code -----------------------------------------------------------------------------------


function checkAnswer(){
  console.log("click event")
}




















startButton.addEventListener('click', startGame)
qchoices.addEventListener('click', checkAnswer)


