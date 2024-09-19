const options = document.querySelectorAll(".options");
let yourScorePara = document.getElementById("yourScore");
let computerScorePara = document.getElementById("computerScore");
let result = document.getElementById("msgPara");
const newGame = document.getElementById("newGame")

const choices = ["Rock", "Paper", "Scissors"];
let scoreUser = 0;
let scoreComp = 0;

let userChoice = (id) => {
  // console.log("Users Choice = " , id)
  return id;
};

let compChoice = () => {
  let randomIdx = Math.floor(Math.random() * 3);
  let computersChoice = choices[randomIdx];
  // console.log("Computers Choice = " ,computersChoice);
  return computersChoice;
};

let playGame = (id) => {
  let user = userChoice(id);
  let comp = compChoice();

  if (user === comp) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;

    if (user == "Rock") {
      userWin = comp === "Paper" ? false : true;
    } else if (user == "Paper") {
      userWin = comp === "Scissors" ? false : true;
    } else if (user == "Scissors") {
      userWin = comp === "Rock" ? false : true;
    }
    showWinner(userWin);
  }

  console.log(`Users = ${user} Computer = ${comp}`);
};

let showWinner = (userWin) => {
  if (userWin == true) {
    scoreUser++;
    yourScorePara.innerText = scoreUser;
    result.innerText = "You Won!";
    result.style.color = "Green";
    console.log("You Won!");
  } else {
    scoreComp++;
    computerScorePara.innerText = scoreComp;
    result.innerText = "You Lost!";
    result.style.color = "Red";
    console.log("You Lost");
  }
};
let drawGame = () => {
  result.innerText = "Game Draw!";
  result.style.color = "Blue";
  console.log("Draw Game");
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    let id = option.getAttribute("id");
    playGame(id);
  });
});

newGame.addEventListener( "click" , () => restart())

const restart = ( () => {
    scoreUser = 0
    scoreComp = 0
    yourScorePara.innerText = scoreUser
    computerScorePara.innerText = scoreComp
    result.innerText = "Play Your Move"
    result.style.color = "gold"
})