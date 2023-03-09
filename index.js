let player1 = "";
let player2 = "";
function playGame(){
    if(player1.trim() === ""){
        player1 = prompt("Enter First Player Name:");
        //User enter empty space
        if(player1.trim().length==0){
            player1 = "Player 1"
        }
        player1 = player1.charAt(0).toUpperCase() + player1.slice(1); //to capitalize first letter
    }
        
    if(player2.trim() === ""){
        player2 = prompt("Enter Second Player Name:");
        //User enter empty space
        if(player2.trim().length==0){
            player2 = "Player 2";
        }
        player2 = player2.charAt(0).toUpperCase() + player2.slice(1); // to capitalize first letter
    }

    // Update Player name
    let players = document.querySelectorAll("p");
    players[0].innerHTML = player1;
    players[1].innerHTML = player2;

    // Image to display for left side Player
    let randomNumber1 = Math.random() * 6 + 1;  //1-6.99
    randomNumber1 = Math.floor(randomNumber1);  //1-6
    let leftImagePath = `dice${randomNumber1}.png`;  //images/dice1.png- dice6.png

    document.querySelector(".img1").setAttribute("src", leftImagePath);

    //Image to display for right side Player
    let randomNumber2 = Math.random() * 6 + 1;
    randomNumber2 = Math.floor(randomNumber2);
    let rightImagePath = `dice${randomNumber2}.png`;
    document.querySelector(".img2").setAttribute("src", rightImagePath);
    let result = "";
    if(randomNumber1 > randomNumber2){
        result = `🚩${player1} Wins!`;
    }
    else if(randomNumber1 < randomNumber2){
        result = `${player2} Wins! 🚩`;
    }
    else{
        result = "Draw!"
    }
    document.querySelector("h1").innerHTML = result;
}
