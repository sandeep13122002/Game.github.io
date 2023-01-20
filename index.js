let computerguess=0;
let userguess=[];
let usernumberupdate=document.getElementById("output");
let useroutput=document.getElementById("inputbox");
let audio=new Audio("./audio/sa.mp3");
const init=()=>{
    computerguess=Math.floor(Math.random()*100);


document.getElementById("newgamebutton").style.display="none";
document.getElementById("gamearea").style.display="none";

};
const startgame=()=>{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gamearea").style.display="block";
};
const startnewgame=()=>{
    document.getElementById("newgamebutton").style.display="inline";
    useroutput.setAttribute('disabled',true);
}
const newgamebegin=()=>{
    audio.play();
window.location.reload();


};




const compareguess=()=>{
    audio.play();
    const usernumber=Number(document.getElementById("inputbox").value);
    userguess=[...userguess,usernumber];
    document.getElementById("guesses").innerHTML=userguess;


    if(userguess.length<maxguess){
   if(usernumber>computerguess){
       usernumberupdate.innerHTML="your guess is high";
       useroutput.value="";
   }else if(usernumber<computerguess){
    usernumberupdate.innerHTML="your guess is low";
    useroutput.value="";
   }else{
    usernumberupdate.innerHTML="ITS CORRECT";
    useroutput.value="";
    startnewgame();

   }
}else{
    if(usernumber>computerguess){
        usernumberupdate.innerHTML=`YOU LOOSE !! correct data was ${computerguess}`;
        useroutput.value="";
        startnewgame();
    }else if(usernumber<computerguess){
     usernumberupdate.innerHTML=`YOU LOOSE !! correct data was ${computerguess}`;
     useroutput.value="";
     startnewgame();
    }else{
     usernumberupdate.innerHTML="ITS CORRECT";
     useroutput.value="";
       startnewgame();
    }






   }
document.getElementById("attempt").innerText=userguess.length;


};





const easymode=()=>{
maxguess=5;
audio.play();
startgame();
};
const hardmode=()=>{
    audio.play();
 maxguess=10;
    startgame();
    };
   