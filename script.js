let userscore = 0
let compscore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const usersco = document.querySelector("#user-score")
const compsco = document.querySelector("#comp-score")

const gencompchoice = () => {
    const option = ["stone", "paper", "scissor"]
    const randidx = Math.floor(Math.random()*3)
    return option[randidx]
}

const  drawgame = () => {
    msg.innerText = "Game Draw!!..Play Again"
    msg.style.backgroundColor = "Black"
}


const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        userscore++
        usersco.innerText = userscore
        msg.style.backgroundColor = "green"
        msg.innerText = `You Win!.. Your ${userchoice} beats ${compchoice}`
    } else {
        compscore++
        compsco.innerText = compscore
        msg.innerText = `You Lose!.. ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}

const playgame = (userchoice) => {
    console.log("userchoice = ", userchoice)

    // Generate computer choice -> modular way 
    const compchoice = gencompchoice();

    if(userchoice === compchoice) {
        drawgame()
    } else {
        let userwin = true;
        if (userchoice === "stone") {
            //scissors, paper
            userwin = compchoice === "paper" ? false : true;
          } else if (userchoice === "paper") {
            //rock, scissors
            userwin = compchoice === "scissor" ? false : true;
          } else {
            //rock, paper
            userwin = compchoice === "stone" ? false : true;
          }
        showwinner(userwin, userchoice, compchoice)
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    })
})