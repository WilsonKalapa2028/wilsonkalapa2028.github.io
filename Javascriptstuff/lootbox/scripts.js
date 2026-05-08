var common = document.getElementById("common");
var c_count = 0;

var uncommon = document.getElementById("uncommon");
var u_count = 0;

var rare = document.getElementById("rare");
var r_count = 0;

var epic = document.getElementById("epic");
var e_count = 0;

var legendary = document.getElementById("legendary");
var l_count = 0;

var mythic = document.getElementById("mythic");
var m_count = 0;

var lootBox = document.getElementById("lootbox")


function rollLootbox(){
    number = Math.floor(Math.random()* 100);

    if (number < 25) {
        lootBox.innerHTML = "COMMON";
        lootBox.style.backgroundColor = "white";
        c_count = c_count + 1;
        common.innerHTML = c_count;
    }


    else if (number < 50) {
        lootBox.innerHTML = "UNCOMMON";
        lootBox.style.backgroundColor = "green"
        u_count = u_count + 1;
        uncommon.innerHTML = u_count;
    }


else if (number < 75) {
    lootBox.innerHTML = "RARE";
    lootBox.style.backgroundColor = "blue"
    r_count = r_count + 1;
    rare.innerHTML = r_count;
}


    else if (number < 90) {
        lootBox.innerHTML = "EPIC";
        lootBox.style.backgroundColor = "purple"
        e_count = e_count + 1;
        epic.innerHTML = e_count;
    }


    else if (number < 99) {
        lootBox.innerHTML = "LEGENDARY";
        lootBox.style.backgroundColor = "gold"
        l_count = l_count + 1;
        legendary.innerHTML = l_count;
    }


    else {
        lootBox.innerHTML = "MYTHIC"
        lootBox.style.backgroundColor = "yellow"
        m_count = m_count + 1;
        mythic.innerHTML = m_count;
    }

}


function plusOne(){
    count = count + 1;
    document.getElementById("count-text").innerHTML = count;
}

document.getElementById("roll").addEventListener("click", rollLootbox);
document.getElementById("count-text").addEventListener("click", plusOne);