
var startButton = document.querySelector('#start');
var timeEl = document.querySelector('#time');





function startGame(){
    console.log(startButton)
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
//print first question
console.log(questions[0], [1]);


}







startButton.addEventListener('click', startGame)


