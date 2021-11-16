window.onload = clock;

function clock(){
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(month < 10) month = "0" + month;
    if(day < 10) day = "0" + day;
    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    var time = day + "/" + month + " " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
    setTimeout("clock()",1000);
}

var darktheme = document.createElement("button");
darktheme.innerText = "Czarny motyw";
darktheme.style.marginRight= "10px";

document.getElementById("button").appendChild(darktheme);

darktheme.onclick = function(){
    document.getElementById("container").style.fontSize = "30px";
};

var content = document.getElementById("content");
darktheme.onclick = function (){
    if(content.style.color!=="black"){
        content.style.backgroundColor="white";
        content.style.color = "black";
    }else {
        content.style.backgroundColor = "black";
        content.style.color = "white";
    }
}

var background = document.getElementById("content");
var mem = document.getElementById("meme");
background.addEventListener("mousemove", discoColors);
mem.addEventListener("click", turnOffDisco);

function discoColors() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#"+randomColor;
}

function turnOffDisco() {
    background.removeEventListener("mousemove", discoColors);
}
