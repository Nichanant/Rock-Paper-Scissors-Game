const buttons = document.querySelectorAll('button');
const resultEle = document.querySelector('#result');
const userScoreEle = document.querySelector('#user-score');
const computerScoreEle = document.querySelector('#computer-score');
const resetBtn = document.querySelector('#reset');

let userScore = 0;
let computerScore = 0;


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        const winLost = result.split("!");

        if (winLost[0] == "You Lost") {
            resultEle.style.backgroundColor = "red";
        } else if (winLost[0] == "You Win") {
            resultEle.style.backgroundColor = "green";
        } else {
            resultEle.style.backgroundColor = "rgb(70, 70, 70)";
        }
        resultEle.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

function playRound(yourSelect, computerSelect) {
    if (yourSelect === computerSelect) {
        return "Tt's a tie";
    } else if ((yourSelect === "rock" && computerSelect === "scissors") ||
        (yourSelect === "paper" && computerSelect === "rock") ||
        (yourSelect === "scissors" && computerSelect === "paper")
    ) {
        userScore++;
        userScoreEle.textContent = userScore;
        return "You Win! " + yourSelect + " beats " + computerSelect;
    } else {
        computerScore++;
        computerScoreEle.textContent = computerScore;
        return "You Lost! " + computerSelect + " beats " + yourSelect;
    }
}


resetBtn.addEventListener('click',()=>{
    location.reload();
})
