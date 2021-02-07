let buttonColors = ["red", "blue", "green", "yellow"]

let gamePattern = []

function nextSequence() {
    randomNumber = console.log(Math.floor(Math.random() * 4))
    return randomNumber
}

var randomNumber = nextSequence()

randomChosenColor = gamePattern.push(buttonColors[randomNumber]) 

$(randomChosenColor).fadeIn().fadeOut()