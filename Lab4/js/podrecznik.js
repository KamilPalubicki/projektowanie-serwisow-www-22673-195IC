var baner = document.getElementById("banner");
baner.addEventListener("mouseleave", changecolor);

function changecolor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.color = "#"+randomColor;
}