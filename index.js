let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let count = 0

function addOneHome() {
    count += 1
    scoreHome.innerText = count
}

function addTwoHome() {
    count += 2
    scoreHome.innerText = count
}

function addThreeHome() {
    count += 3
    scoreHome.innerText = count
}

function addOneGuest() {
    count += 1
    scoreGuest.innerText = count
}

function addTwoGuest() {
    count += 2
    scoreGuest.innerText = count
}

function addThreeGuest() {
    count += 3
    scoreGuest.innerText = count
}

function newGame() {
    count = 0
    scoreGuest.innerText = count
    scoreHome.innerText = count
}