var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern = []

function nextSequence() {
   var randomNumber = Math.floor(Math.random() * 4)
    return randomNumber
}

var randomChosenColor = buttonColors[nextSequence()]

gamePattern.push(randomChosenColor)
console.log(gamePattern)

playSound(randomChosenColor) 
$("#" + randomChosenColor).animate({opacity: 0.2}, "fast").animate({opacity: 1}, "fast") 

$("div[type='button']").click(function () {
    var userChosenColor = this.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    console.log(userClickedPattern)
})

function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3")
    sound.play()
}
