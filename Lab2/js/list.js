
var increase = document.createElement("button");
increase.innerText = "Zwiększ czcionkę";
increase.style.marginRight= "10px";

var decrease = document.createElement("button");
decrease.innerText = "Zmniejsz czcionkę";
decrease.style.marginRight= "10px";

var type = document.createElement("button");
type.innerText = "Typ czcionki";
type.style.marginRight= "10px";

document.getElementById("buttons").appendChild(increase);
document.getElementById("buttons").appendChild(decrease);
document.getElementById("buttons").appendChild(type);

increase.onclick = function(){
    document.getElementById("letter").style.fontSize = "30px";
    document.getElementById("letter-upper").style.fontSize = "30px";
};

decrease.onclick = function(){
    document.getElementById("letter").style.fontSize = "15px";
    document.getElementById("letter-upper").style.fontSize = "15px";
};

type.onclick = function(){
    document.getElementById("letter").style.fontFamily = "Arial";
    document.getElementById("letter-upper").style.fontFamily = "Arial";
};
