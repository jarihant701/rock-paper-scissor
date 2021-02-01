// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("how_to_play");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function viewmodal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// ***** ROCK PAPER SCISSOR *********
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var comp_rock = document.getElementById("comp-rock");
var comp_paper = document.getElementById("comp-paper");
var comp_scissors = document.getElementById("comp-scissors");
var move_info = document.getElementById("move-info");
var manScore = document.getElementById("man-score");
var compScore = document.getElementById("computer-score");
var retry = document.getElementById("computer-score");
var result_modal = document.getElementById("result-modal");
var modal_background = document.getElementById("modal-background");
var result = document.getElementById("result");



var userScore = 0;
var computerScore = 0;
var count = 0;


function changeBGColor(computerChoice) {
  comp_rock.style.backgroundColor = "white"
  comp_paper.style.backgroundColor = "white"
  comp_scissors.style.backgroundColor = "white"
  if(computerChoice == 1) {
    comp_rock.style.backgroundColor = "var(--secondary-color)"
  }
  else if(computerChoice == 2) {
    comp_paper.style.backgroundColor = "var(--secondary-color)"
  }
  else if(computerChoice == 3){
    comp_scissors.style.backgroundColor = "var(--secondary-color)"
  }
}


function checkResult(userScore, computerScore) {
  if(userScore == 5){
    result_modal.style.display = "flex";
  } else if(computerScore == 5){
    result_modal.style.display = "flex";
    modal_background.style.backgroundColor = "var(--alert-color)"
    result.innerHTML = `<img src="./assets/sad.svg" alt="victory" class="emoji">Better Luck Next Time<img src="./assets/sad.svg" alt="victory" class="emoji">`
  }
}


function returnResult(userChoice) {
  let computerChoice = (Math.floor(Math.random() * 3)) + 1;
  changeBGColor(computerChoice);
  if(userChoice == computerChoice) {
    move_info.innerHTML = "Tie!!<br>Nobody gets a point."
  }
  else if(userChoice == 1) {
    if(computerChoice == 2) {
      move_info.innerHTML = "Paper beats Rock<br>Computer gains a point."
      computerScore++;
    }
    else if(computerChoice == 3){
      move_info.innerHTML = "Rock beats Scissor<br>You gain a point."
      userScore++;
    } 
  }
  else if(userChoice == 2) {
    if(computerChoice == 1) {
      move_info.innerHTML = "Paper beats Rock<br>You gains a point."
      userScore++;
    }
    else {
      move_info.innerHTML = "Rock beats Scissor<br>Computer gains a point."
      computerScore++;
    }
  }
  else if(userChoice == 3) {
    if(computerChoice == 2) {
      move_info.innerHTML = "Scissors beats Paper<br>You gain a point."
      userScore++;
    }
    else {
      move_info.innerHTML = "Rock beats Scissor<br>Computer gains a point."
      userScore++;
    }
  }
  compScore.innerHTML = computerScore;
    manScore.innerHTML = userScore;
    checkResult(userScore,computerScore);
}

function reset(flag) {
  if(flag == 1) {
    result_modal.style.display = "none";
  }
  userScore = 0;
  computerScore = 0;
  changeBGColor(0);
  manScore.innerHTML = userScore;
  compScore.innerHTML = computerScore;
  move_info.innerHTML = "";
}