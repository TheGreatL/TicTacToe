let player1 = 'X', player2 = 'O';
let countMoves= 0;
let turn1 = true;
let winnerText ='The Winner is ';
let currentPlayer= document.getElementById('playerTurn');

function clickedButton(num){
    let currentButton = document.getElementById('b'+num);
   
   if(turn1){
    currentButton.innerText = player1;
    currentButton.style.backgroundColor="yellow";
    currentButton.setAttribute("disabled", "true"); 
    currentPlayer.innerText = player2;
    turn1= false;

   }
   else{
    currentButton.innerText = player2;
    currentButton.style.backgroundColor="green";
    currentButton.setAttribute("disabled", "true"); 
    currentPlayer.innerText = player1;
    turn1= true;
   }
   countMoves++;
   if(countMoves>=5){
    checkWinner();
    countMoves=countMoves==6? 0: countMoves;
   
   }
}
function checkWinner(){
    let buttonArr = [];
    for(let num = 1; num<=9;num++){
            buttonArr[num-1] = document.getElementById('b'+num);
    }
    //1 2 3
    if(buttonArr[0].textContent==buttonArr[1].textContent && buttonArr[0].textContent ==buttonArr[2].textContent){
        currentPlayer.innerText = winnerText+buttonArr[0].textContent;
       
    }
    // 1 4 7
     if(buttonArr[0].textContent==buttonArr[3].textContent && buttonArr[0].textContent ==buttonArr[6].textContent){
        currentPlayer.innerText = winnerText+buttonArr[0].textContent;
    
    }
    //1 5 9
     if(buttonArr[0].textContent==buttonArr[4].textContent && buttonArr[0].textContent ==buttonArr[8].textContent){
        currentPlayer.innerText = winnerText+buttonArr[0].textContent;
    
    }
    // 2 5 8
     if(buttonArr[1].textContent==buttonArr[4].textContent && buttonArr[1].textContent ==buttonArr[7].textContent){
        currentPlayer.innerText = winnerText+buttonArr[1].textContent;
    
    }
    //3 6 9
     if(buttonArr[2].textContent==buttonArr[5].textContent && buttonArr[2].textContent ==buttonArr[8].textContent){
        
        currentPlayer.innerText = winnerText+buttonArr[2].textContent;
    
    }
    //3 5 7
     if(buttonArr[2].textContent==buttonArr[4].textContent && buttonArr[2].textContent ==buttonArr[6].textContent){
        currentPlayer.innerText = winnerText+buttonArr[2].textContent;
    
    }
    //4 5 6
     if(buttonArr[3].textContent==buttonArr[4].textContent && buttonArr[3].textContent ==buttonArr[6].textContent){
        currentPlayer.innerText = winnerText+buttonArr[3].textContent;
    
    }
    //7 8 9
     if(buttonArr[6].textContent==buttonArr[7].textContent && buttonArr[6].textContent ==buttonArr[8].textContent){
        currentPlayer.innerText = winnerText+buttonArr[6].textContent;
        
    }

    
}
    
