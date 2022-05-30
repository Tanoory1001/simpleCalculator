let displayBox=document.querySelector(".display");
let list=document.querySelectorAll(".show-display");
list.forEach(function(sup){
    sup.addEventListener("click",showDisplay)
    function showDisplay(event){
        let x=event.target.innerText;
        if (displayBox==0){
            return displayBox.innerHTML=x;
        }
        return displayBox.innerHTML+=x; 
    }
    })

let calculate=document.querySelector(".calculate");
calculate.addEventListener("click",calcFunc)
    function calcFunc(){
        let result=displayBox.innerText;
        displayBox.innerText=eval(result);
    }

let allclear=document.querySelector(".all-clear");
allclear.addEventListener("click",aCFunc);
    function aCFunc(){
        displayBox.innerText=0;
    }

let clearLast=document.querySelector(".clear-last");
clearLast.addEventListener("click",cLFunc);
    function cLFunc(){
        let text=displayBox.innerText;
        if(text.length===1){
            displayBox.innerText = 0;
        }else{
            displayBox.innerText=text.substring(0,text.length-1);
        }
    }