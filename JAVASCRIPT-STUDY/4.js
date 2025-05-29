const button = document.getElementById("push")
const div = document.getElementById("area")

button.addEventListener('click', function(){
  console.log('div 생성중')
  const newDiv = document.createElement("div")
  
  newDiv.style.backgroundColor = "red"
  newDiv.style.width = "200px"
  newDiv.style.height = "200px"
  


  div.appendChild(newDiv)
  div.append("박스 생성")
})