let home = 0
let visitor = 0

function homeAddOne(){
    home += 1
    document.getElementById("homeScore").textContent = home
    whoIsWinning()
}

function homeAddTwo(){
    home += 2
    document.getElementById("homeScore").textContent = home
    whoIsWinning()
}

function homeAddThree(){
    home += 3
    document.getElementById("homeScore").textContent = home
    whoIsWinning()
}

function visitorAddOne(){
    visitor += 1
    document.getElementById("VisitorScore").textContent = visitor
    whoIsWinning()
}

function visitorAddTwo(){
    visitor += 2
    document.getElementById("VisitorScore").textContent = visitor
    whoIsWinning()
}

function visitorAddThree(){
    visitor += 3
    document.getElementById("VisitorScore").textContent = visitor
    whoIsWinning()
}

function newGame(){
    home = 0
    visitor = 0
    document.getElementById("homeScore").textContent = home
    document.getElementById("VisitorScore").textContent = visitor
    whoIsWinning()
}

function whoIsWinning(){
    if(home > visitor)
    {
        document.getElementById("homeScore").style.border = "3px solid red"
        document.getElementById("VisitorScore").style.border = "" 
        
    }
    else if(visitor > home)
    {
        document.getElementById("VisitorScore").style.border = "3px solid red" 
        document.getElementById("homeScore").style.border = ""
    }
    else{
        document.getElementById("VisitorScore").style.border = "3px solid yellow" 
        document.getElementById("homeScore").style.border = "3px solid yellow"
    }
}
