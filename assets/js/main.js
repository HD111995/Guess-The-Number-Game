//helping function 
//to get elment id and Value
let get = (id)=>{
    let val = document.getElementById(id).value;
    return Number(val);
}
//to get radio check
let check = (id) => {
    let val = document.getElementById(id).checked;
    return Boolean(val);
}
//HTML injection function
let inject = (id,val) =>{
    document.getElementById(id).innerHTML = val;
} 
//HTML add class function 
let clas = (id,cName) => {
    document.getElementById(id).classList.add(cName);
}
//replace class name 
let replace = (id,cName) => {
    document.getElementById(id).className =cName;
}
//remove class function
let remove = (id,cName) =>{
    document.getElementById(id).classList.remove(cName);
}
//trigger reflow function
let trigger = (id) =>{
    void  document.getElementById(id).offsetHeight;
}
//to get give autoplay atribute for audio
let play = (id) =>{
    document.getElementById(id).play()
}
////to genrate a random number between 1 and 100 
function gen(){
    return Number(Math.random() * (100-1) + 1);
}
//start solution
//define the needed Variables
let round,four,five,six,cust, tryIt;
let counter = 0;
let random = Number(gen().toFixed(0));
four = check("four");
round =4;
//function to show or hide input  and check the
//values of round number in change Action
function change(){
  
    cust = check("cust");
    if (cust == true){
        document.getElementById("cust-nr").style.display ="inline";
    }else{
        document.getElementById("cust-nr").style.display ="none";
    }
    four = check("four");
    five = check("five");
     six = check("six");

    if (four == true){
        round = 4;
    }else if(five == true){
        round = 5;
    }else if(six == true){
        round = 6;
    }else if(cust == true){
        round = get("cust-nr");
    }
}
//the main function test to compare input values
function test(){
    if (round == 0 || round > 10 ){
        alert("pleas give a round number between 1 and 10")
    }else{
//condition to using the same button as
//Guess and play again also to make a timeless again
//and again Game 
 if (tryIt == random ||counter == round){
     window.location.reload(true);
 }
 //add to the counter 1 with every click action
 counter++ ;
//remove the classes from the element 
//because of Animation    
remove("ani","bodyani");
remove("ani","true")
remove("art-1","artani");
remove("art-1","artani");
//variable to get the number by the Player   
tryIt = get("try");
//condition to show a message when the  player do not input a Number
if (tryIt == 0){
    window.alert("Please try a random Number between 1 and 100")
    counter = counter - 1;
}

//define some string variables to print as result
let stringHigher =counter+"-you need to guess higher than "+tryIt+",try again...<br>";
let stringLower =counter+"-you need to guess lower than "+tryIt+",try again...<br>";
let winner = "yeeeaah you get me in "+counter+" guesses"
console.log(random);
//make break between remove classes and add classes
trigger("ani");
trigger("art-1");
trigger("art-2");
//the game condition to compare values and return results
//loser
 if (tryIt !== random && tryIt !== 0){
    inject ("form",counter+"/"+round);
    play("wrong");
    clas("ani","bodyani");
    clas("art-1","artani");
    clas("art-2","artani");
    document.getElementById("output").style.color ="red"
    if (tryIt > random){
        inject("output",stringLower);
    }else if (tryIt < random){
        inject("output",stringHigher);
    }
    //winner
 }else if (tryIt == random && tryIt !== 0){
     play("correct");
     clas("ani","true");
     inject("output",winner);
     document.getElementById("sub").value = "Play Again";
     document.getElementById("output").style.color ="greenyellow"
    
 }
 //loser or winner restart Game when player want to play again
 if (round == counter){
     inject("output","Sorry you Lose within "+counter+" Tries")
     document.getElementById("sub").value = "Try Again";
 }
}
}