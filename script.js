//Need to create an event listener that listens for click and changes the background color 
let changeBtn = document.querySelector('.color-changer')


  let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

changeBtn.addEventListener("click", function(){
  let hexColor = "#"
  for(let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]
  }
  document.body.style.backgroundColor = hexColor;
  document.querySelector(".header").textContent=hexColor;
})

function getRandomNumber(){
  return  Math.floor(Math.random() * hex.length)
  }