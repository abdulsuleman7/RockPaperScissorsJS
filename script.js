
let res = document.getElementById("result");

function playGame(UserChoice) {

    let choice = ["rock", "paper", "scissor"];

    let ran = Math.floor(Math.random() * choice.length);
    let computer = choice[ran]

    console.log(computer);
    let result = "";
    if (UserChoice === computer) {
        console.log("match is draw better luck next time!");
        result = "Match is draw! Better luck next time.";
        document.body.style.backgroundColor = "white";

    } else if
        (UserChoice === "rock" && computer === "scissor" || UserChoice === "scissor" && computer === "paper" || UserChoice === "paper" && computer === "rock") {
        result = "🎉 You win the match!";
        document.body.style.backgroundColor = "rgba(56, 173, 45, 1)";


    } else {
        result = "💻 Computer wins";
        document.body.style.backgroundColor = "red"

    }

    res.innerText = `You Selected: ${UserChoice} | Computer Selected: ${computer} and  The Result Is   → ${result}`;

}

