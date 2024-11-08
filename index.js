var randomNumber1 = Math.random();
randomNumber1= Math.floor(randomNumber1*6)+1;
var randomNumber2 = Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var dice1= document.querySelector('.img1').setAttribute('src','./images/'+'dice'+[randomNumber1] +'.png');
var dice2= document.querySelector('.img2').setAttribute('src','./images/'+'dice'+[randomNumber2] +'.png');

if (randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='Player 1 Won';
} else if(randomNumber1<randomNumber2){
            document.querySelector('h1').innerHTML='Player 2 Won'
} else{
    document.querySelector('h1').innerHTML='Draw!';
} 




// code out 2 separate random number statements instead of copy paste because of same number generation bug on 2 images