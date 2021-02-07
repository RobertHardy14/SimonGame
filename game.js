var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []

function nextSequence() {
    randomNumber = console.log(Math.floor(Math.random() * 4))
    return randomNumber
}

var randomChosenColor = buttonColors[nextSequence()]

$("#" + randomChosenColor).fadeOut(100).fadeIn(100)