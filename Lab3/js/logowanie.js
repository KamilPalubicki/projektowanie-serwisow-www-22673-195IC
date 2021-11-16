var loging = document.getElementById("loginin");

loging.onclick = function() {
    location.href = "index.html";
    var loginuser = document.getElementById("floatingInput").value;
    alert("Witaj "+loginuser);
};

