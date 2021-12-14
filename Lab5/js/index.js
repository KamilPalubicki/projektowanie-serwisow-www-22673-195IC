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

// Zadanie 1 - Callback
var baller = {
    "name": "Lionel",
    "lastname": "Messi",
    "age": 34,
    "club": "PSG",
    "goals": {
        "club": 689,
        "country": 96,
        "with": {
            "left_foot": 677,
            "right_foot": 82,
            "header": 26,
        }
    }
}

const prawa_noga = baller.goals.with.right_foot;
const lewa_noga = baller.goals.with.left_foot;
const glowka = baller.goals.with.header;
const klub = baller.goals.club;
const kraj = baller.goals.country;

function dodawanie(a, b){
    const wynik = a + b;
    return wynik;
}

const body_goals= dodawanie(prawa_noga, lewa_noga);
const body_goals_total = dodawanie(body_goals, glowka);
const total_goals = dodawanie(klub, kraj);
console.log("Zadanie 1.1 Wszystkie gole strzelone prawa, lewa i glowa: "+body_goals_total);
console.log("Wszystkie gole strzelone dla klubu i kraju: "+total_goals);

function imie_nazwisko(text_1, text_2, text_3, text4){
    console.log("Zadanie 1.2 "+text_1+" "+text_2+" gra w klubie "+text_3+ " i strzelił już "+text4+" klubowych goli");
}
imie_nazwisko(baller.name, baller.lastname, baller.club, baller.goals.club);

// Zadanie 2
const todos = fetch('https://jsonplaceholder.typicode.com/todos');

function getId(response) {
    return new Promise((resolve, reject) => {
        if(response !== 1) {
            resolve(response);
        } else {
            reject("Error");
        }
    });
}

getId(todos).then(response => response.json().then(function(data){
    var wynik = dodawanie(data[1].id, data[2].id);
    console.log("Zad 2.1 - Wynik dodawania to: " + wynik);
}))
    .catch(error_msg => console.log("Zad 2.1 - Error", error_msg))
    .finally(() => console.log("Zad 2.1 - Fully Done"));

todos2 = fetch('https://jsonplaceholder.typicode.com/todos');

getId(todos2).then(response => response.json().then(function(data) {
    var komunikat = "Zad 2.2 - Title: " + data[1].title + " Completed: " + data[2].completed;
    console.log(komunikat);
}))
    .catch(blad => console.log("Zad 2.2 - Error", blad))
    .finally(() => console.log("Zad 2.2 - Fully Done"));

// Zadanie 3
let link = 'https://jsonplaceholder.typicode.com/todos/3';

async function asyncAwait(link) {
    let response = await fetch(link);
    if (response.ok) {
        JsonObject = await response.json();
        wynik = dodawanie(JsonObject.userId, JsonObject.id);
        console.log("Zad 3.1 Wynik dodawania "+JsonObject.userId+" + "+JsonObject.id+" to: "+wynik);
    }
}
asyncAwait(link);

let link2 = 'https://jsonplaceholder.typicode.com/users/3';

function objectAsync(n, w) {
    const person = {
        name: n,
        website: w
    };
    console.log("Zad 3.2 ");
    console.log(person);
}

async function asyncAwait2(link) {
    let response = await fetch(link);
    if (response.ok) {
        JsonObject = await response.json();
        objectAsync(JsonObject.name, JsonObject.website);
    }
}
asyncAwait2(link2);

// Zadanie 4
let todos4 = 'https://jsonplaceholder.typicode.com/todos/4';
let xmlhttpr = new XMLHttpRequest();

xmlhttpr.open('GET', todos4);
xmlhttpr.responseType = 'json';
xmlhttpr.send();

xmlhttpr.onload = function() {
    let todos_data = xmlhttpr.response;
    var post4_data = { title: todos_data.title, completed: todos_data.completed };
    var wynik = dodawanie(todos_data.id, todos_data.userId)
    console.log("Zad 4 Wynik dodawania "+todos_data.id+" + "+todos_data.userId+" to:"+wynik);
    console.log(post4_data);
};
xmlhttpr.onerror = function() {
    console.log("Zad 4 Error");
}

// Zadanie 5
const todos5 = fetch('https://jsonplaceholder.typicode.com/todos/5');

todos5.then(function (response){
    response.json().then(function (todos_data){
        console.log("Zad 5 - Wynik dodawania " + todos_data.id + " + " + todos_data.userId + " to: " + (todos_data.id + todos_data.userId));
        var post5_data = { title: todos_data.title, completed: todos_data.completed };
        console.log(post5_data);
    });
})

//Zadanie 6
let todos6 = 'https://jsonplaceholder.typicode.com/todos/6';
axios.get(todos6)
    .then(function (response){
        console.log("Zad 6 - Wynik dodawania " + response.data.id + " + " + response.data.userId + " to: " + (response.data.id + response.data.userId));
        var msg = { title: response.data.title, body: response.data.body };
        console.log(msg);
    })
