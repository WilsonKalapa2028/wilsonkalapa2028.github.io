var q1_a1 = document.getElementById("q1-a1");
var q1_a2 = document.getElementById("q1-a2");
var q1_a3 = document.getElementById("q1-a3");
var q1_a4 = document.getElementById("q1-a4");

var results = document.getElementById("result");
var submit_button = document.getElementById("submit-button");




function check_q1(){

    if (q1_a1.checked == true){
        results.innerHTML = "you chose answer 1";
    }
    else if (q1_a2.checked == true){
        results.innerHTML = "you chose answer 2";
    }
    else if (q1_a3.checked == true){
        results.innerHTML = "you chose answer 3";
    }
    else if (q1_a4.checked == true){
        results.innerHTML = "you chose answer 4";
    }
    else{
        results.innerHTML = "you didn't choose anything!";
    }
}

submit_button.addEventListener("click", check_q1);