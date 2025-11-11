 const nav = document.getElementById("navSec")

// const nav = document.querySelector("#navSec")

const header = document.querySelector(".headerClass")
console.log(header)

const paragraphs = document.getElementsByTagName("p")
console.log(paragraphs)


nav.style.backgroundColor = "lightblue"

header.style.color ='green'
header.style.fontSize = "30px"

const span = document.getElementsByTagName("span")
console.log(span)

span[0].textContent = "this is a span"  

const h5Ele = document.createElement("h5")
h5Ele.textContent = "this is h5 created using js"
document.body.appendChild(h5Ele)