let firstCard = 0
let secondCard = 0

let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

let messageStringElement = document.getElementById("message-string")
const summationElement = document.getElementById("summation")
let cardsArray = document.getElementById("cards-array")

let player2 = {
    player: "Per",
    playerChips: 300
}

let playElement = document.getElementById("player")

playElement.textContent = player2.player + ": $" + player2.playerChips

let startGame = () => {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

let renderGame = () => {
    cardsArray.textContent = "Cards: { "

    for (let i = 0; i < cards.length - 1; i++)
        cardsArray.textContent += +cards[i] + ", "

    cardsArray.textContent += +cards[cards.length - 1] + " }"

    if (sum < 21)
        message = "Do you want to raw a new card ?"
    else if (sum === 21) {
        message = "You got the Blackjack! ☺"
        hasBlackJack = true
    } else {
        isAlive = false
        message = "You are out of the game!";
    }

    summationElement.textContent = "Sum = " + sum
    messageStringElement.textContent = message
}

let card = () => {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card);
        renderGame()
    }
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum == 1)
        return 11
    if (randomNum >= 10)
        return 10
    return randomNum
}