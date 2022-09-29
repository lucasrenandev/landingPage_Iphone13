// BACKGROUND
const green = document.getElementById("green")
const pink = document.getElementById("pink")
const blue = document.getElementById("blue")
const black = document.getElementById("black")
const white = document.getElementById("white")
const red = document.getElementById("red")

const circleBackground = document.getElementById("circleBackground")
const imgPhone = document.getElementById("imgPhone")

green.addEventListener("click", function() {
    imgPhone.src = "assets/img/green.png"
    circleBackground.style.background = "#445C42"
})

pink.addEventListener("click", function() {
    imgPhone.src = "assets/img/pink.png"
    circleBackground.style.background = "#FFC9CF"
})

blue.addEventListener("click", function() {
    imgPhone.src = "assets/img/blue.png"
    circleBackground.style.background = "#0B839E"
})

black.addEventListener("click", function() {
    imgPhone.src = "assets/img/black.png"
    circleBackground.style.background = "#092732"
})

white.addEventListener("click", function() {
    imgPhone.src = "assets/img/white.png"
    circleBackground.style.background = "#E0DBD7"
})

red.addEventListener("click", function() {
    imgPhone.src = "assets/img/red.png"
    circleBackground.style.background = "#CF4F68"
})

// MENU RESPONSIVO
const menu = document.querySelector("#menu")
const nav = document.querySelector("nav ul")
const menuImg = document.querySelector("#menu img")

menu.addEventListener("click", () => {
    nav.classList.toggle("active")

    if(menuImg.getAttribute("src") === "assets/img/menu/open.svg") {
        menuImg.setAttribute("src", "assets/img/menu/close.svg")
    }
    else {
        menuImg.setAttribute("src", "assets/img/menu/open.svg")
    }
})