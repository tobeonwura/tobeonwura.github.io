let topText;
let rightText;
let bottomText;
let leftText;
let ownText;
let userText;

window.addEventListener("load", () => {
  let userName = localStorage.getItem("user_name");

  if (!userName) {
    userName = prompt("Please enter your name:");

    if (userName && userName.trim() !== "") {
      localStorage.setItem("user_name", userName.trim());
    }
  }

  if (userName) {
    userText = userName;
  }
});


checkWinner= function(){
    if(document.getElementById("btn1").value=="1"&&
    document.getElementById("btn2").value=="2"&&
    document.getElementById("btn3").value=="3"&&
    document.getElementById("btn4").value=="4"&&
    document.getElementById("btn5").value=="5"&&
    document.getElementById("btn6").value=="6"&&
    document.getElementById("btn7").value=="7"&&
    document.getElementById("btn8").value=="8"&&
    document.getElementById("btn9").value=="9"&&
    document.getElementById("btn1").value=="10"&&
    document.getElementById("btn1").value=="11"&&
    document.getElementById("btn2").value=="12"&&
    document.getElementById("btn3").value=="13"&&
    document.getElementById("btn4").value=="14"&&
    document.getElementById("btn5").value=="15"&&
    document.getElementById("btn6").value=="16"&&
    document.getElementById("btn7").value=="17"&&
    document.getElementById("btn8").value=="18"&&
    document.getElementById("btn9").value=="19"&&
    document.getElementById("btn1").value=="20"&&
    document.getElementById("btn1").value=="21"&&
    document.getElementById("btn2").value=="22"&&
    document.getElementById("btn3").value=="23"&&
    document.getElementById("btn4").value=="24"&&
    document.getElementById("btn5").value==" "){
        window.alert(`Congratulations ${userText}! You Won!!!`);
    }
}

playButton = function(num){
    const distortion = 100;
    let topNum = num - 5;
    let bottomNum = num + 5;
    let rightNum = (num%5) === 0 ? num + distortion : num + 1; 
    let leftNum = (num%5) === 1 ? num - distortion : num - 1; 

    ownText= document.getElementById(`btn${num}`).value;
    topText= topNum >= 1 && topNum <= 25 ? document.getElementById(`btn${topNum}`).value: "x";
    rightText= rightNum >= 1 && rightNum <= 25 ? document.getElementById(`btn${rightNum}`).value: "x";
    bottomText= bottomNum >= 1 && bottomNum <= 25 ? document.getElementById(`btn${bottomNum}`).value: "x";
    leftText= leftNum >= 1 && leftNum <= 25 ? document.getElementById(`btn${leftNum}`).value: "x";

    if (topText==" "){
        document.getElementById(`btn${topNum}`).value= ownText;
        document.getElementById(`btn${num}`).value= " ";
    }else if (rightText==" "){
        document.getElementById(`btn${rightNum}`).value= ownText;
        document.getElementById(`btn${num}`).value= " ";
    }else if (bottomText==" "){
        document.getElementById(`btn${bottomNum}`).value= ownText;
        document.getElementById(`btn${num}`).value= " ";       
    }else if (leftText==" "){
        document.getElementById(`btn${leftNum}`).value= ownText;
        document.getElementById(`btn${num}`).value= " ";       
    }

    checkWinner();
}

document.getElementById("btn1").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn2").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn3").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn4").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn5").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn6").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn7").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn8").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn9").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn10").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn11").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn12").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn13").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn14").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn15").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn16").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn17").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn18").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn19").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn20").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn21").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn22").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn23").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn24").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

document.getElementById("btn25").onclick = function(){
    const num = Number(this.id.match(/\d+/)[0]);
    playButton(num);
}

























/*
document.getElementById("btn1").onclick = function(){
    ownText= document.getElementById("btn1").value;
    rightText= document.getElementById("btn2").value;
    bottomText= document.getElementById("btn4").value;
    if (rightText==" "){
        document.getElementById("btn2").value= ownText;
        document.getElementById("btn1").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn4").value= ownText;
        document.getElementById("btn1").value= " ";
    }
    checkWinner();
}

document.getElementById("btn2").onclick = function(){
    ownText= document.getElementById("btn2").value;
    rightText= document.getElementById("btn3").value;
    bottomText= document.getElementById("btn5").value;
    leftText= document.getElementById("btn1").value;
    if (rightText==" "){
        document.getElementById("btn3").value= ownText;
        document.getElementById("btn2").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn5").value= ownText;
        document.getElementById("btn2").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn1").value= ownText;
        document.getElementById("btn2").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn3").onclick = function(){
    ownText= document.getElementById("btn3").value;
    bottomText= document.getElementById("btn6").value;
    leftText= document.getElementById("btn2").value;
    if (bottomText==" "){
        document.getElementById("btn6").value= ownText;
        document.getElementById("btn3").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn2").value= ownText;
        document.getElementById("btn3").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn4").onclick = function(){
    ownText= document.getElementById("btn4").value;
    topText= document.getElementById("btn1").value;
    rightText= document.getElementById("btn5").value;
    bottomText= document.getElementById("btn7").value;
    if (topText==" "){
        document.getElementById("btn1").value= ownText;
        document.getElementById("btn4").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn5").value= ownText;
        document.getElementById("btn4").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn7").value= ownText;
        document.getElementById("btn4").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn5").onclick = function(){
    ownText= document.getElementById("btn5").value;
    topText= document.getElementById("btn2").value;
    rightText= document.getElementById("btn6").value;
    bottomText= document.getElementById("btn8").value;
    leftText= document.getElementById("btn4").value;
    if (topText==" "){
        document.getElementById("btn2").value= ownText;
        document.getElementById("btn5").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn6").value= ownText;
        document.getElementById("btn5").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn8").value= ownText;
        document.getElementById("btn5").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn4").value= ownText;
        document.getElementById("btn5").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn6").onclick = function(){
    ownText= document.getElementById("btn6").value;
    topText= document.getElementById("btn3").value;
    bottomText= document.getElementById("btn9").value;
    leftText= document.getElementById("btn5").value;
    if (topText==" "){
        document.getElementById("btn3").value= ownText;
        document.getElementById("btn6").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn9").value= ownText;
        document.getElementById("btn6").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn5").value= ownText;
        document.getElementById("btn6").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn7").onclick = function(){
    ownText= document.getElementById("btn7").value;
    topText= document.getElementById("btn4").value;
    rightText= document.getElementById("btn8").value;
    if (topText==" "){
        document.getElementById("btn4").value= ownText;
        document.getElementById("btn7").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn8").value= ownText;
        document.getElementById("btn7").value= " ";
    }
    checkWinner();
}

document.getElementById("btn8").onclick = function(){
    ownText= document.getElementById("btn8").value;
    topText= document.getElementById("btn5").value;
    rightText= document.getElementById("btn9").value;
    leftText= document.getElementById("btn7").value;
    if (topText==" "){
        document.getElementById("btn5").value= ownText;
        document.getElementById("btn8").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn9").value= ownText;
        document.getElementById("btn8").value= " ";      
    }else if (leftText==" "){
        document.getElementById("btn7").value= ownText;
        document.getElementById("btn8").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn9").onclick = function(){
    ownText= document.getElementById("btn9").value;
    topText= document.getElementById("btn6").value;
    leftText= document.getElementById("btn8").value;
    if (topText==" "){
        document.getElementById("btn6").value= ownText;
        document.getElementById("btn9").value= " ";     
    }else if (leftText==" "){
        document.getElementById("btn8").value= ownText;
        document.getElementById("btn9").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn10").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn11").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn12").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn13").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn14").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn15").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn16").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn17").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn18").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn19").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn20").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn21").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn22").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn23").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn24").onclick = function(){
    ownText= document.getElementById("btn").value;
    topText= document.getElementById("btn").value;
    rightText= document.getElementById("btn").value;
    bottomText= document.getElementById("btn").value;
    leftText= document.getElementById("btn").value;
    if (topText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (rightText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";
    }else if (bottomText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }else if (leftText==" "){
        document.getElementById("btn").value= ownText;
        document.getElementById("btn").value= " ";       
    }
    checkWinner();
}

document.getElementById("btn25").onclick = function(){
    ownText= document.getElementById("btn25").value;
    topText= document.getElementById("btn20").value;
    leftText= document.getElementById("btn24").value;
    if (topText==" "){
        document.getElementById("btn20").value= ownText;
        document.getElementById("btn25").value= " ";
    }else if (leftText==" "){
        document.getElementById("btn24").value= ownText;
        document.getElementById("btn25").value= " ";       
    }
    checkWinner();
}

*/