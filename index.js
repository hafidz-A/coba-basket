let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let countHome = 0
let countGuest = 0

function addOneHome() {
    countHome += 1
    scoreHome.innerText = countHome
}

function addTwoHome() {
    countHome += 2
    scoreHome.innerText = countHome
}

function addThreeHome() {
    countHome += 3
    scoreHome.innerText = countHome
}

function addOneGuest() {
    countGuest += 1
    scoreGuest.innerText = countGuest
}

function addTwoGuest() {
    countGuest += 2
    scoreGuest.innerText = countGuest
}

function addThreeGuest() {
    countGuest += 3
    scoreGuest.innerText = countGuest
}

function newGame() {
    countHome = 0
    countGuest = 0
    scoreGuest.innerText = countHome
    scoreHome.innerText = countGuest
}