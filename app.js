let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset_btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerX,playerO
const winPattern=[[0,1,2],[3,4,5],[6,7,8],
                  [0,3,6],[1,4,7],[2,5,8],
                  [0,4,8],[2,4,6]];

const resetGm=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}  

boxes.forEach((box)=>{
    count=0;
    box.addEventListener("click",()=>{
        
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        
        box.disabled=true;
        count++;
        checkWinner();
        if(count===9){
            draw();
        }
    })
    
})
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congradulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const draw=()=>{
    msg.innerText="Draw! \nClick to restart to start the game!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos1val != "" && pos1val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }

    }
}
reset.addEventListener("click",resetGm);