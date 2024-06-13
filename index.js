const orderBtn = document.querySelector(".orderBtn")
const qty = document.querySelector(".qty")
const body = document.querySelector("body")
const main = document.querySelector("main")

const colors = ["red", "blue", "green", "purple"]

function randomColors() {
    randNum = Math.floor(Math.random() * colors.length)
    return colors[randNum]
}

orderBtn.addEventListener('click', () => {
    body.style.backgroundColor = randomColors()
    main.style.backgroundColor = randomColors()
})