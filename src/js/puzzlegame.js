let topText;
let rightText;
let bottomText;
let leftText;
let ownText;

checkWinner= function(){
    if(document.getElementById("btn1").value=="1"&&
    document.getElementById("btn2").value=="2"&&
    document.getElementById("btn3").value=="3"&&
    document.getElementById("btn4").value=="4"&&
    document.getElementById("btn5").value=="5"&&
    document.getElementById("btn6").value=="6"&&
    document.getElementById("btn7").value=="7"&&
    document.getElementById("btn8").value=="8"&&
    document.getElementById("btn9").value==" "){
        window.alert("YOU WON!!!");
    }
}

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
