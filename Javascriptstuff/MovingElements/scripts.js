function moveRight(){
    document.getElementById("move").style.marginLeft = "100px";
}

function reset(){
    document.getElementById("move").style.marginLeft = "10px";
}

document.getElementByID("move").addEventListener("click", moveRight);
document.getElementByID("move").addEventListener("mouseenter", reset);