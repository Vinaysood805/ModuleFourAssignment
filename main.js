// Goal Tracker Application Code
document.getElementById("Button").addEventListener('click', function (e) {
  e.preventDefault();
  let input = document.getElementById("goalName").value;
  let li = document.createElement("li");
  if (input !== '') {
    document.getElementById("heading1").textContent = "Your Goals";
    li.innerHTML = `<span class='goalText'> ${input}</span> <button class='goalComplete'>Goal Complete</button> <button class='deleteGoal'>Delete Goal</button>`;
    let ol = document.getElementById("goalNameList");
    ol.appendChild(li);
    document.getElementById("goalName").value = "";
  }
  else alert("Goal can't be empty !!");
  return false;
})

let olElements = document.getElementById("goalNameList");
olElements.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('deleteGoal')) {
    e.target.parentElement.remove();
  }
})

olElements.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('goalComplete')) {
    e.target.parentElement.remove();
    document.getElementById("heading2").textContent = "Completed Goals";
    let li = document.createElement("li");
    li.innerHTML = `<span class='completedGoals'>${e.target.previousElementSibling.textContent}</span> <button class='deleteGoalComplete'> Delete Completed Goal </button>`;
    let ol = document.getElementById("completedList");
    ol.appendChild(li);
  }
})

let olElementsCompleted = document.getElementById("completedList");
olElementsCompleted.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('deleteGoalComplete')) {
    e.target.parentElement.remove();
  }
})

var inputAudio = "";
function myAudio() {
  document.getElementById("audio").play();
  inputAudio = document.getElementById("goalName").value;
}
let input = document.querySelector('input');
input.oninput = myAudio;

var clickAudio = "";
function myAudio1() {
  document.getElementById("audio1").play();
  clickAudio = document.getElementById("Button").value;
}
let click = document.querySelectorAll('button')[0];
click.onclick = myAudio1;

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark"
    document.querySelector("img").setAttribute("src", "https://media0.giphy.com/media/LRxOdTTyh43IVvTZNm/giphy.gif");
    ctx.fillStyle = 'rgb(0,0,0)';
  }
  else {
    body.className = "";
    document.querySelector("img").setAttribute("src", "https://media1.giphy.com/media/l0K4m8FLCB4anX60g/giphy.gif");
    ctx.fillStyle = 'rgb(35, 68, 25)';
  }
}
let DarkButton = document.querySelectorAll('button')[1];
DarkButton.onclick = goDark;

// Add and Drop Api (a Browser Api)
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.querySelectorAll("img")[1].setAttribute("src", "https://img.17qq.com/images/mhqsnfnmmsy.jpeg");
  document.getElementById("audio2").play();
  document.getElementById("audio3").play();
}

//Canvas Picture Graphic Api (a Browser Api)
const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = 200;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(35, 68, 25)';
ctx.fillRect(0,0,width,height);

ctx.translate(width/2,height/2);

let image = new Image();
image.src = 'walk-right.png';
image.onload = draw;

let sprite = 0;
let posX = 0;

function draw() {
  ctx.fillRect(-(width/2),-(height/2),width,height);
  ctx.drawImage(image, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);

  if(posX % 13 === 0) {
    if(sprite === 5) {
      sprite = 0;
    } else {
      sprite++;
    }
  }

  if(posX > width/2) {
    newStartPos = -((width/2) + 102);
    posX = Math.ceil(newStartPos);
    console.log(posX);
  } else {
    posX += 2;
  }

  window.requestAnimationFrame(draw);
};