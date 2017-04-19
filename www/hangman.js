var one="";
var two = "";

function saveCrap()
{

one = document.getElementById("nameField").value;
two = document.getElementById("nickNameField").value;
localStorage.setItem(one,two);
display(one,two);
}

function display(one,two) 
{
one = localStorage.getItem(one);
two = localStorage.getItem(two);

}

var frasesArray = new Array(20);
frasesArray[0] = "The squeaky wheel gets the grease";
frasesArray[1] = "The pen is mightier than the sword";
frasesArray[2] = "No man is an island";
frasesArray[3] = "Fortune favors the bold";
frasesArray[4] = "Hope for the best, but prepare for the worst";
frasesArray[5] = "Birds of a feather flock together";
frasesArray[6] = "A picture is worth a thousand words";
frasesArray[7] = "There's no such thing as a free lunch";
frasesArray[8] = "Never look a gift horse in the mouth";
frasesArray[9] = "A watched pot never boils";
frasesArray[10] = "Beggars can't be choosers";
frasesArray[11] = "Too many cooks spoil the broth";
frasesArray[12] = "Don't bite the hand that feeds you";
frasesArray[13] = "One man's trash is another man's treasure";
frasesArray[14] = "There's no time like the present";
frasesArray[15] = "Beauty is in the eye of the beholder";
frasesArray[16] = "A penny saved is a penny earned";
frasesArray[17] = "Familiarity breeds contempt";
frasesArray[18] = "A chain is only as strong as its weakest link";
frasesArray[19] = "Absence makes the heart grow fonder";



function choosing()
{
var chosenNumber = Math.round(Math.random() * frasesArray.length);
chosenFrase = frasesArray[chosenNumber];
}

choosing();

var frase = chosenFrase;

frase = frase.toUpperCase();

var fraseLength = frase.length;
var numberOfFailures = 0;

var frase1 = "";

for(i=0; i<fraseLength; i++)
{
if(frase.charAt(i)==" ") frase1=frase1 + " ";
else  frase1=frase1 + "-";

}

function showFrase() 
{
document.getElementById("frasePad").innerHTML=frase1;

}

window.onload = begin;

var letters1= new Array(26);

letters1[0] = "A";
letters1[1] = "B";
letters1[2] = "C";
letters1[3] = "D";
letters1[4] = "E";
letters1[5] = "F";
letters1[6] = "G";
letters1[7] = "H";
letters1[8] = "I";
letters1[9] = "J";
letters1[10] = "K";
letters1[11] = "L";
letters1[12] = "M";
letters1[13] = "N";
letters1[14] = "O";
letters1[15] = "P";
letters1[16] = "Q";
letters1[17] = "R";
letters1[18] = "S";
letters1[19] = "T";
letters1[20] = "U";
letters1[21] = "V";
letters1[22] = "W";
letters1[23] = "X";
letters1[24] = "Y";
letters1[25] = "Z";

function begin()
{

var divContent="";

for(i=0; i<=25; i++)
{
var componentNumber = "letNum" + i;
divContent=divContent+'<div class="letterSize" onclick="checkIfClicked('+i+')" id="'+componentNumber+'">'+letters1[i]+'</div>'
if((i+1) % 7 ==0) divContent=divContent+'<div style="clear:both;"></div>'
}

document.getElementById("letters").innerHTML=divContent;

showFrase();
}

String.prototype.setSign= function(place,sign)
{
if(place>this.lenth-1) return this.toString();
else return this.substr(0,place) + sign + this.substr(place+1);

}

function hinting () {

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://hangman.c0.pl/test.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
var chosenNumber = Math.round(Math.random() * 3);
alert(ourData[chosenNumber].name);
navigator.vibrate(3000);
};
ourRequest.send();   

}

function checkIfClicked(numb)
{
var isCorrect = false;

for(i=0;i<fraseLength;i++)
{
   if(frase.charAt(i)==letters1[numb])
       {
          frase1=frase1.setSign(i,letters1[numb]);
          isCorrect = true;
       }
}

if(isCorrect==true)
{
var componentNumber = "letNum" + numb;
document.getElementById(componentNumber).style.background="#003300";
document.getElementById(componentNumber).style.color="#00C000";
document.getElementById(componentNumber).style.border="3px solid #00C000";
document.getElementById(componentNumber).style.background="default";
showFrase();
navigator.vibrate(2000);
}
else
{
var componentNumber = "letNum" + numb;
document.getElementById(componentNumber).style.background="#330000";
document.getElementById(componentNumber).style.color="#C00000";
document.getElementById(componentNumber).style.border="3px solid #C00000";
document.getElementById(componentNumber).style.background="default"; 
document.getElementById(componentNumber).setAttribute=("onclick",";");
numberOfFailures++;
var picture = "img/s"+ numberOfFailures + ".jpg";
document.getElementById("hangman").innerHTML = '<img src="'+picture+'" alt="" />';

}

// ifWon
if (frase == frase1)

document.getElementById("letters").innerHTML  = "Well done !"+ " " + one +" "+ two+ " " +"You guessed the frase: "+frase+" with the number of wrong guesses :"+numberOfFailures+ '<br /><br /><span class="reset" onclick="location.reload()">Play again ?</span>';

//ifLost
if (numberOfFailures>=9)
document.getElementById("letters").innerHTML  = "You lost ! The frase was: "+frase+'<br /><br /><span class="reset" onclick="location.reload()">Try again ? </span>';
}