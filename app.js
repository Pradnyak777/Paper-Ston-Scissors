let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const genCompChoice = () => {

   const options = ["rock", "paper", "scissor"]; 
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];

};



const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Overrrrrrrrrrrr ! , Play again";
    msg.style.backgroundColor ="red";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
       
        userScore++;
        userScorepara.innerText = userScore;
        
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green";
    }else{

        compScore++;
        compScorepara.innerText = compScore;

        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor ="orange";
    }
};

const playGame =(userChoice) => {
    console.log("user choice =-", userChoice);
    //Generate computer choice=> modular functinality->thats mean reuseabale component 

    const compChoice = genCompChoice();
    console.log("Computer choice =-", compChoice);


    if(userChoice === compChoice){
        //draw game

        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //SESSORE ,PAPER
            userWin = compChoice === "paper" ? false : true;
            //if computer chose papar so user failed and comp chose scissore so use win

        }else if(userChoice === "paper"){
            //computer choises =rock, scissors
            userWin = true;
            userWin = compChoice === "scissors" ? false : true; 
        }else{

         userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{

        const userChoice = choice.getAttribute("id");
      //  console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});