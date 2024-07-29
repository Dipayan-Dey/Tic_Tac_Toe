let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let newBtn = document.querySelector("#newBtn");
let winMsg = document.querySelector("#winMsg");
let msg = document.querySelector("#msg");

let turnO = true;

let winningPuttern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    let turnO = true;
    enableBoxes();
    winMsg.classList.add("hide");
};




boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("the box is clicked");
   if(turnO){
    box.innerText = "O"
    box.style.color = "black"
    turnO = false;
   }
   else{
    box.innerText = "X"
      box.style.color = "white"
    turnO = true;
   }
box.disabled = "true"
checkWinner();
});
});
const drwGame = ()=>{
    console.log("The Game Is Draw");
}
const disableBoxes=()=>{
   for(let box of boxes){
    box.disable = true;
   }
}
const enableBoxes=()=>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText="";
    }
 }
const showWinner = (winner)=>{
// msg.innerText=`🥳🤩Congretulations , Winner is ${winner} 🤩🥳`
alert(`🥳🤩Congretulations , Winner is ${winner} 🤩🥳`)
winMsg.classList.remove("hide");
disableBoxes();
};

 const checkWinner= ()=>{
  for(let ptrn of winningPuttern){
    console.log(ptrn[0],ptrn[1],ptrn[2]);
    let pos1val =    boxes[ptrn[0]].innerText;
    let pos2val =     boxes[ptrn[1]].innerText;
    let pos3val =      boxes[ptrn[2]].innerText;
//   if(pos1val==""&&pos2val==""&&pos3val==""){
//     if(pos1val!==pos2val&&pos2val!==pos3val){
//         drwGame(pos1val);
//     }
//   }
    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("Winner",pos2val);
            showWinner(pos2val);
        }
    }
  }
 }

 newBtn.addEventListener("click",resetGame);
 resetButton.addEventListener("click",resetGame);

