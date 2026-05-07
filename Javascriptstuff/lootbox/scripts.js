var count = 0;
var count_text = document.getElementById("count-text");
var lootBox = document.getElementById("lootbox")

function rollLootbox(){
    number = Math.floor(Math.random()* 100);

    if (number < 25) {
        lootBox.innerHTML = "COMMON";
        lootBox.style.backgroundColor = "white";
    }


    else if (number < 50) {
        lootBox.innerHTML = "UNCOMMON";
        lootBox.style.backgroundColor = "green"
    }


else if (number < 75) {
    lootBox.innerHTML = "RARE";
    lootBox.style.backgroundColor = "blue"
}


    else if (number < 90) {
        lootBox.innerHTML = "EPIC";
        lootBox.style.backgroundColor = "purple"
    }


    else if (number < 99) {
        lootBox.innerHTML = "LEGENDARY";
        lootBox.style.backgroundColor = "gold"
    }


    else {
        lootBox.innerHTML = "MYTHIC"
        lootBox.style.backgroundColor = "yellow"
    }

}

function plusOne(){
    count = count + 1;
    document.getElementById("count-text").innerHTML = count;
}

document.getElementById("roll").addEventListener("click", rollLootbox);
document.getElementById("count-text").addEventListener("click", plusOne);