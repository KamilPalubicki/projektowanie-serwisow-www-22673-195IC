var loging = document.getElementById("loginin");

loging.onclick = function() {
    location.href = "index.html";
    var loginuser = document.getElementById("floatingInput").value;
    alert("Witaj "+loginuser);
};

var login = document.getElementById("floatingInput");
login.addEventListener("keydown", turnRed);
login.addEventListener("keyup", turnWhite);
var password = document.getElementById("floatingPassword");
password.addEventListener("keydown", turnRed);
password.addEventListener("keyup", turnWhite);

function turnRed() {
    this.style.backgroundColor = "white";
}

function turnWhite() {
    this.style.backgroundColor = "red";
}
