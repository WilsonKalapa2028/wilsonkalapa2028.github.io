function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    
    const correctUsername = "no_1_nobody";
    const correctPassword = "can_stop_me";

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.innerText = "Login Successful!";
    } else {
        message.style.color = "red";
        message.innerText = "Incorrect Username or Password";
    }
}