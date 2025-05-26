console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelector("#text"))
console.log(document.querySelector(".paragraph"))
console.log(document.querySelector(".odfjois"))

console.log(document.getElementById("text"))
console.log(document.getElementById("p"))

const h1 = document.querySelector("h1")
const text = document.getElementById("text")

console.log(h1.textContent)
console.log(text.textContent)

h1.textContent = "제모모모모모목"
console.log(h1.textContent)