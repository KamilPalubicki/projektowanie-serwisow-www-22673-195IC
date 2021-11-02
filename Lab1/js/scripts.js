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