var img_1 = Math.floor(Math.random()*6)+1;
var img_2 = Math.floor(Math.random()*6)+1;

if(img_1===1){
    document.querySelector(".img1").src = "dice1.png";
}
if(img_1===2){
    document.querySelector(".img1").src = "dice2.png";
}
if(img_1===3){
    document.querySelector(".img1").src = "dice3.png";
}
if(img_1===4){
    document.querySelector(".img1").src = "dice4.png";
}
if(img_1===5){
    document.querySelector(".img1").src = "dice5.png";
}
if(img_1===6){
    document.querySelector(".img1").src = "dice6.png";
}


if(img_2===1){
    document.querySelector(".img2").src = "dice1.png";
}
if(img_2===2){
    document.querySelector(".img2").src = "dice2.png";
}
if(img_2===3){
    document.querySelector(".img2").src = "dice3.png";
}
if(img_2===4){
    document.querySelector(".img2").src = "dice4.png";
}
if(img_2===5){
    document.querySelector(".img2").src = "dice5.png";
}
if(img_2===6){
    document.querySelector(".img2").src = "dice6.png";
}
if(img_1===img_2){
  document.querySelector(".btn1").innerHTML = "both won!";
  document.querySelector(".btn2").innerHTML = "both won!";
  document.querySelector("h1").innerHTML = "both won!";

}
else if(img_1<img_2){
  document.querySelector(".btn1").style.visibility = "hidden";
  document.querySelector("h1").innerHTML = "Player 2 won!";
}
else if(img_1>img_2){
  document.querySelector(".btn2").style.visibility = "hidden";
  document.querySelector("h1").innerHTML = "Player 1 won!";
}
