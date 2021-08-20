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
let four = check("four");
let five = check("five");
let six = check("six");
let cust = check("cust");
let round;
if (four == true){
    round = 4;
}else if(five == true){
    round = 5;
}else if(six == true){
    round = 6;
}else if(cust == true){
    round = get("cust-nr");
    if (round == 0 || round > 10 ){
        alert("pleas give a round number from 1 to 10")
    }
}
//to show or hide input function
function change(){

    let cust = check("cust");
    if (cust == true){
        document.getElementById("cust-nr").style.display ="inline";
    }else{
        document.getElementById("cust-nr").style.display ="none";
    }
}
let counter = 0;
let random = Number(gen().toFixed(0));
function test(){
remove("ani","bodyani");
remove("ani","true")
remove("art-1","artani");
remove("art-1","artani");   
let tryIt = get("try");
if (tryIt == 0){
    window.alert("Please try a random Number from 1 to 100")
}
counter++ ;
inject ("form",counter+"/"+round);
let stringHigher =counter+"-you need to guess higher than "+tryIt+",try again...<br>";
let stringLower =counter+"-you need to guess lower than "+tryIt+",try again...<br>";
let winner = "yesss you get me in "+counter+" guesses"
console.log(counter)
console.log(four,five,six,cust,tryIt,random,round);
trigger("ani");
trigger("art-1");
trigger("art-2");
 if (tryIt !== random){
    play("wrong");
    clas("ani","bodyani");
    clas("art-1","artani");
    clas("art-2","artani");
    if (tryIt > random){
        inject("output",stringLower);
    }else if (tryIt < random){
        inject("output",stringHigher);
    }
 }else if (tryIt == random){
     play("correct");
     clas("ani","true");
     inject("output",winner);
     random = Number(gen().toFixed(0));
 }
 if (round == counter){
     
 }
}