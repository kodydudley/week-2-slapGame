let health = 100
let hits = 0

function update() {
  let healthValueElem = document.getElementById("healthValue")
  healthValueElem.innerText = `Health: ${health}`
  let nameElem = document.getElementById("name")
  nameElem.innerText = "Name: Kody"
  let hitsElem = document.getElementById("hits")
  hitsElem.innerText = `Hits: ${hits}`

}

function slapHealth() {
  health--
  hits++
  update()
}

function punchHealth() {
  health -= 5
  hits++
  update()
}

function kickHealth() {
  health -= 10
  hits++
  update()
}






update()