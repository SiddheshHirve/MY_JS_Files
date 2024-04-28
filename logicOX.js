let boxs = document.querySelectorAll(".bt")
let winname = document.querySelector('#winner')
let end = document.getElementById("end")
let endbt = document.getElementById("endbt")
let reset = document.getElementById("reset")
let drawtext = document.getElementById("draw")
let drawbt = document.getElementById("draww")
let draw = document.getElementById("draw11")
let count = 0
let PO = true
let winfound = false
let wincondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxs.forEach(box => {
    box.addEventListener("click",(e)=>{
        if (PO){
            box.textContent = "O"
            PO = false
        }else{
            box.textContent = "X"
            PO = true
        
        }
        box.disabled=true
        
        findwin()
        count++
        if(winfound === false && count == 9){
            drawfun()
        }
    })
    
})


reset.addEventListener("click",()=>{
    boxs.forEach(box=>{
        box.textContent = ""
        box.disabled = false
        count = 0
    })
})

endbt.addEventListener("click",()=>{
    end.classList.toggle("hide")
    boxs.forEach(box=>{
        box.textContent = ""
        box.disabled = false
        count = 0
    })
})


drawbt.addEventListener("click",()=>{
    draw.classList.toggle("hide")
    boxs.forEach(box=>{
        box.textContent = ""
        box.disabled = false
        count = 0
    })
})

function winner(a){
    boxs.disabled = true
    winname.textContent = `The winner is ${a}`
    end.classList.toggle("hide")
}

function findwin (){
    wincondition.forEach(win =>{
        let a = boxs[win[0]].textContent
        let b = boxs[win[1]].textContent
        let c = boxs[win[2]].textContent
        if (a !== "" && a === b && b === c){
            winner(a)
            console.log("winner")
            winfound = true 
        }
        
    })
}

function drawfun(){
    drawtext.textContent = "Match Draw"
    draw.classList.toggle("hide")
}



