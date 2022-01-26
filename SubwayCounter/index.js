let count = 0
let c = document.getElementById("count-el")
let s = document.getElementById("save-el")

function reset(){
    count = 0
    c.innerText = count
    s.innerText = "Previous Enteries: "
}

function increment(){
    count = count + 1
    c.innerText = count 
    }

function save(){
    let countStr = count + "  -  "
    s.textContent += countStr
    c.textContent = 0
    count = 0
    
}

