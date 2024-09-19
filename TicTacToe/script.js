const boxes = document.querySelectorAll(".tic")
const newGame = document.getElementById("newGame")
let msg  = document.getElementById("msg")

let tunrOfX = true;
let winnersPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const disableButtons = () => {
    boxes.forEach( (box) => {
        box.disabled = true;
    })
}
const enableButtons = () => {
    boxes.forEach( (box) => {
        box.disabled = false
        box.innerText = "";
    })
}

const resetGame = () => {
    tunrOfX = true
    enableButtons()
    msg.innerText = ""
}

newGame.addEventListener( "click" , resetGame)

boxes.forEach( (box) => {
    box.addEventListener("click" , () => {

        if(tunrOfX){
            box.innerText = "X"
            tunrOfX = false
        }else{
            box.innerText = "O"
            tunrOfX = true
        }
        
        box.disabled = true
        console.log("Clicked");
        checkWinner();

    })
})
    const checkWinner =  () => {
       for(let pattern of winnersPattern){

            let valueOfPos1 = boxes[pattern[0]].innerText;
            let valueOfPos2 = boxes[pattern[1]].innerText;
            let valueOfPos3 = boxes[pattern[2]].innerText;


            if(valueOfPos1 != "" && valueOfPos2 != "" && valueOfPos3 != ""){
                if(valueOfPos1 == valueOfPos2 && valueOfPos2 == valueOfPos3){
                    msg.innerText = `Winner is ${valueOfPos1}`
                    disableButtons()
                }    
            }
       }
    };
    
    
