
var startButton = document.querySelector('#start');
var timeEl = document.querySelector('#time');





function startGame(){
    console.log(startButton)
   var secondsLeft = 20;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
         // sendMessage();
        }
    
      }, 1000);
}







startButton.addEventListener('click', startGame)


