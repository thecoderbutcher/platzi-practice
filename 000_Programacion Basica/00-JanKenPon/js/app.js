var player1, player2, pointPlayer1 = 0,pointPlayer2 = 0;

function randomNum(min, max){return (Math.floor(Math.random()*(max - min + 1 ) + min));}

function optionSelect(value=null){
    if(value == null){player2 = randomNum(1,3);}
    else {player1 = value;}
}
// 1 tijeras 2 papel 3 piedra 4 lagarto 5 spot
// 1 => 2 4
// 2 => 3 5
// 3 => 1 4
// 4 => 2 5
// 5 => 1 3
function results(){
    let result = "Player One Win";
    if(player1 ==  player2){ return "Draw game"}
    if(player1 == 1 && (player2 == 2 || player2 == 4)) {pointPlayer1++}
    else if(player1 == 2 && (player2 == 3 || player2 == 5)) {pointPlayer1++}
    else if(player1 == 3 && (player2 == 1 || player2 == 4)) {pointPlayer1++}
    else if(player1 == 4 && (player2 == 2 || player2 == 5)) {pointPlayer1++}
    else if(player1 == 5 && (player2 == 1 || player2 == 3)) {pointPlayer1++}
    else{pointPlayer2++; result = "Player Two Win"}
    return result
}