
let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});
document.addEventListener("touchstart", function() {
  if(started==false){
        started=true;
        levelUp();
  }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomNum=Math.floor(Math.random()*4);
    let randColor=btns[randomNum];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        sound=new Audio("wrong.mp3");
         sound.play();
        h2.innerHTML=`Your score was <span class="score">${level}</span> <br>Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },150);
        reset();
        
    }
    }
function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let btnsAll=document.querySelectorAll(".btn");
for(btn of btnsAll){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}