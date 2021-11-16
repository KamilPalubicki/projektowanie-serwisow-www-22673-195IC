var captcha = document.getElementById("captcha");

var passOrFail = function() {
    var pass = Math.round(Math.random());
    pass="pass"
    return pass; //failed result to be implemented
}

captcha.onclick = function() {
    if (captcha.className.includes("loading")) return;
    captcha.className = "";
    captcha.className += "loading";
    setTimeout(function() {
        captcha.className = captcha.className.replace("loading", "");
        captcha.className += passOrFail();
    }, Math.floor((Math.random() * 3000) + 1000));
}

function submitForm() {
    alert("Wysłano formularz!");
}

var captchabutton = document.getElementById("captcha");
var form = document.getElementById("InputEmail");
form.addEventListener("change", resetCaptcha);
captchabutton.addEventListener("click", authorize);

function resetCaptcha() {
    var submit = document.getElementById("buttonSubmit");
    submit.style.backgroundColor = "red";
}

function authorize() {
    var submit = document.getElementById("buttonSubmit");
    submit.style.backgroundColor = "green";
}

var baner = document.getElementById("banner");
baner.addEventListener("mouseleave", changecolor);

function changecolor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.color = "#"+randomColor;
}