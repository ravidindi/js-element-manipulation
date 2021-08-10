var randomNumberLeft=Math.floor((Math.random()*6)+1);
var randomNumberRight=Math.floor((Math.random()*6)+1);
var diceImage=document.querySelectorAll("div img");
var imageLeftSrc="images/dice"+randomNumberLeft+".png";
var imageRightSrc="images/dice"+randomNumberRight+".png";
diceImage[0].setAttribute("src",imageLeftSrc);
diceImage[1].setAttribute("src",imageRightSrc);
var displayText=document.querySelector("h1");
if(randomNumberLeft>randomNumberRight){
    displayText.innerHTML="<i class='far fa-flag flagcolor'></i> Player 1 wins";
}
else if(randomNumberRight>randomNumberLeft){
    displayText.innerHTML="Player 2 wins <i class='far fa-flag flagcolor 9x'></i>";

}
else{
    displayText.textContent="Draw!";
}