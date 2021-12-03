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
var htmlIMG = document.getElementById("html");
var cssIMG = document.getElementById("css");
var jsIMG = document.getElementById("js");
htmlIMG.addEventListener("mouseover", zoomOver);
htmlIMG.addEventListener("mouseout", zoomOut);
cssIMG.addEventListener("mouseover", zoomOver);
cssIMG.addEventListener("mouseout", zoomOut);
jsIMG.addEventListener("mouseover", zoomOver);
jsIMG.addEventListener("mouseout", zoomOut);

function zoomOver() {
    this.style.height = "280px";
    this.style.width = "280px";
}

function zoomOut() {
    this.style.height = "256px";
    this.style.width = "256px";
}

var labo = document.getElementById("numlab");
labo.addEventListener("mousedown", changecolor);
labo.addEventListener("mouseup", revertcolor);

var baner = document.getElementById("banner");
baner.addEventListener("mouseleave", changecolor);

function changecolor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.color = "#"+randomColor;
}

function revertcolor() {
    this.style.color = "black";
}

var logowanie = document.createElement("button");
logowanie.innerHTML = "Zaloguj się";
logowanie.id ="logowanko";
logowanie.style.backgroundSize = "cover";
document.getElementById("nav").appendChild(logowanie);

logowanie.onclick = function(){
    location.href = "logowanie.html";
};