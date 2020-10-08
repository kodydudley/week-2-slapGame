let health1 = 100
let hits = 0
let hits1 = 0
let health2 = 100

function update() {
  let health1ValueElem = document.getElementById("health1Value")
  health1ValueElem.innerText = `Health: ${health1}`
  let health2ValueElem = document.getElementById("health2Value")
  health2ValueElem.innerText = `Health: ${health2}`
  let name1Elem = document.getElementById("name1")
  name1Elem.innerText = "Name: Kody"
  let name2Elem = document.getElementById("name2")
  name2Elem.innerText = "Name: Kody"
  let hitsElem = document.getElementById("hits")
  hitsElem.innerText = `Hits: ${hits}`
  let hits1Elem = document.getElementById("hits1")
  hits1Elem.innerText = `Hits: ${hits1}`
  let gameOverElem = document.getElementById("gameOver")
  gameOverElem.innerHTML = gameOver()
}


addEventListener("keydown", function slapHealth() {
  if (event.keyCode == 65) {
    health2 -= 2
    hits++
    update()
    gameOver()
  }
})

addEventListener("keydown", function slapHealth2() {
  if (event.keyCode == 74) {
    health1--
    hits1++
    update()
    gameOver()
  }
})


addEventListener("keydown", function punchHealth() {
  if (event.keyCode == 83) {
    health2 -= 5
    hits++
    update()
    gameOver()
  }
})

addEventListener("keydown", function punchHealth2() {
  if (event.keyCode == 75) {
    health1 -= 6
    hits1++
    update()
    gameOver()
  }
})


addEventListener("keydown", function kickHealth() {
  if (event.keyCode == 68) {
    health2 -= 3
    hits++
    update()
    gameOver()
  }
})

addEventListener("keydown", function kickHealth2() {
  if (event.keyCode == 76) {
    health1 -= 3
    hits1++
    update()
    gameOver()
  }
})


function gameOver() {
  if (health1 <= 0 || health2 <= 0) {
    document.getElementById("gameOverBG").classList.remove("d-none")
    document.getElementById("gameOverBG").classList.add("d-block")
    document.getElementById("mainBG").classList.add("d-none")
    document.querySelector("header").classList.add("d-none")
    document.querySelector("footer").classList.add("d-none")

    return /*html*/ `<div class="card gameOverCard">
    <img class="card-img-top" src="https://i.pinimg.com/originals/32/84/75/32847539f3d1e018a00145a3848f67e8.jpg"
      alt="Card image cap">
    <div class="card-body">
      <button class="btn btn-warning btn-block" onclick="window.location.href=window.location.href">Start Over</button>
    </div>
  </div>`
  } else {
    return ""
  }
}

update()
gameOver()