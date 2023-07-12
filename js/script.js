const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let finish = document.querySelector(".finish");
let winAudio = document.getElementById("myAudio");   
let gameplay = false;
let score = 0;
button.addEventListener("click", myfunction);
function myfunction (){
    if (!gameplay) {
        gameplay = true;
        gameArea.innerHTML = "";
        finish.innerHTML="";
        document.querySelector(".img").src = "staticChest.jpg";
        winAudio.pause();
        score = 0;
        maker();
        button.innerText = "Check Combo";
        message.innerHTML = "Number Of Gusses : " + score;
      } else {
        const numbers = document.querySelectorAll(".numb");
        let winconition = 0;
        score++;
        message.innerHTML = "Number Of Gusses : " + score;
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i].value == numbers[i].correct) {
            numbers[i].style.backgroundColor = "green";
            numbers[i].style.color = "white";
            winconition++;
            console.log(winconition);
          } else {
            if (numbers[i].value < numbers[i].correct) {
              numbers[i].style.backgroundColor = "blue";
              numbers[i].style.color = "white";
            } else {
              numbers[i].style.backgroundColor = "red";
              numbers[i].style.color = "white";
            }
          }
        }
        if (winconition == 6) {
          win();
        } else {
          lose();
        }
      }
}

function maker() {
  for (let i = 0; i < 6; i++) {
    let el = document.createElement("input");
    el.type = "number";
    el.min = 0;
    el.max = 9;
    el.size = 1;
    el.order = i;
    el.style.width = "50px";
    el.style.backgroundColor = "#eee";
    el.style.textAlign = "center";
    el.classList.add("numb");
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    gameArea.appendChild(el);
  }
}

function win() {
 // button.disabled = true;
  let finish = document.querySelector(".finish");
  finish.innerHTML = "You Win !";
  document.querySelector(".img").src = "dynamicChest.gif";
  winAudio.play();
  restart();
}

function lose() {
  document.querySelector(".red").style.display = "block";
  setTimeout(function () {
    document.querySelector(".red").style.display = "none";
  }, 700);
  // ایجاد المان صوتی
  const audio = new Audio("lose.wav");
  // پخش صدا
  audio.play();
  
}

function restart(){
  gameplay = false;
  button.innerHTML = "Try Again";
  
}