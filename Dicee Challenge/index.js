var randomNum=Math.floor(Math.random()*6)+1;
var randnum=Math.floor(Math.random()*6)+1;
var heading=document.querySelector("h1");
var img1=document.querySelectorAll("img");
if (randnum==randomNum){
    heading.innerHTML="Draw";
}
else{
    if (randnum>randomNum){
        heading.innerHTML="Player 1 Wins"
    }
    else{
        heading.innerHTML="Player 2 Wins"
    }
}

img1[0].setAttribute("src","images/dice"+randnum+".png");
img1[1].setAttribute("src","images/dice"+randomNum+".png")