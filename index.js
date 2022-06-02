var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
randomImage="Images/"+"dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
randomImage="Images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage);

if(randomNumber2>randomNumber1)
    document.querySelector("h1").innerHTML="Player 2 won ✌️";
else if(randomNumber2<randomNumber1)
    document.querySelector("h1").innerHTML="Player 1 won ✌️";
else
    document.querySelector("h1").innerHTML="Draw ❤️";

