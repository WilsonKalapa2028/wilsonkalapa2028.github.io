function changered(){
    document.body.style.backgroundColor = 'red'
}

function changewhite(){
    document.body.style.backgroundColor = 'white'
}

function changeblue(){
    document.body.style.backgroundColor = 'blue'
}

function changepink(){
    document.body.style.backgroundColor = 'pink'
}

function changegreen(){
    document.body.style.backgroundColor = 'green'
}

function changeblack(){
    document.body.style.backgroundColor = 'black'
}

document.getElementById('color-change').addEventListener('mouseleave', changewhite);
document.getElementById('color-blue').addEventListener('mouseleave', changewhite);
document.getElementById('color-pink').addEventListener('mouseleave', changewhite);
document.getElementById('color-green').addEventListener('mouseleave', changewhite);
document.getElementById('color-black').addEventListener('mouseleave', changewhite);
document.getElementById('color-change').addEventListener('mouseenter', changered);
document.getElementById('color-blue').addEventListener('mouseenter', changeblue);
document.getElementById('color-pink').addEventListener('mouseenter', changepink);
document.getElementById('color-green').addEventListener('mouseenter', changegreen);
document.getElementById('color-black').addEventListener('mouseenter', changeblack);
