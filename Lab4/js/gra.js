// Tworzenie zmiennych, przypisanie odpowiednich wartości
var canvas = $("#canvas")[0];
var ctx = canvas.getContext('2d');

var sizeInput = $("#size");
var changeSize = $(".start");
var scoreLabel = $("#score");

var score = 0;
var bestScore = localStorage.getItem('score2048');
var size = 4;
var width = canvas.width / size - 6;

var cells = [];
var fontSize;
var loss = false;

// Czyszczenie canvas
function canvasClear(){
    ctx.clearRect(0,0,500,500);
}
// Wywoływanie funkkcji start po kliknięciu 'Reset'
$(".reset").click(function(){
    startGame();
});

// Wywoływanie funkkcji returnToIndex(powrót do głównej strony) po kliknięciu 'Powrot'
$(".return").click(function(){
    returnToIndex();
});
// Startowanie gry po wciśnięciu Start
$("canvas").css({"display":"none"});
$(".start2").click(function(){
    $("canvas").css({"display":"block"});
    startGame();
    $(".start2").css({"display":"none"});
})

// Wyświetlanie najlepszego wyniku - jeśli taki istnieje
if(bestScore != null || bestScore != undefined) $("#bestScore").html("Najlepszy wynik: "+bestScore);
else $("#bestScore").html("Najlepszy wynik: 0");

// Powrót do głownej strony
function returnToIndex(){
    location.href = "index.html";
}
// Startowanie gry - wywoływanie potrzebnych funkcji (stworzenie komórek i wygenerowanie dwóch poczatkowych wartosci)
function startGame(){
    createCells();
    drawAllCells();
    pasteNewCell();
    pasteNewCell();
}
// Funkcja kończąca gre (w funkcji pasteNewCell() jest wywoływana)
function finishGame() {
    localStorage.setItem('score2048', this.score);
    canvas.style.opacity = '0.3';
    loss = true;
    $(".lose").css({"display":"block"});
}
// Definicja komórki
function cell(row, col){
    this.value = 0;
    this.x = col * width + 5 * (col+1);
    this.y = row * width + 5 * (row+1);
}
// Tworzenie pola gry (samych komórek na planszy)
function createCells(){
    for(var i=0; i<size; i++){
        cells[i] = [];
        for(var j=0; j<size; j++){
            cells[i][j] = new cell(i,j);
        }
    }
}
// Wypełnianie wybranej komórki oraz wpisywanie wartości odpowiednią czcionką
function drawCell(cell){
    ctx.beginPath();
    ctx.rect(cell.x, cell.y, width, width);

    var fontColor;

    ctx.fillStyle = "rgb(187 173 160)";
    // Wypełnienie odpowiednim kolorem komórek o danej wartości
    switch(cell.value){
        case 0 : ctx.fillStlye = "rgb(238,228,218)"; fontColor = "rgb(119,110,101)"; break;
        case 2 : ctx.fillStyle = "rgb(238,228,218)"; fontColor = "rgb(119,110,101)"; break;
        case 4 : ctx.fillStyle = "rgb(237 224 200)"; fontColor = "rgb(119,110,101)"; break;
        case 8 : ctx.fillStyle = "rgb(242 177 121)"; fontColor = "rgb(249,246,242)"; break;
        case 16 : ctx.fillStyle = "rgb(245 149 99)"; fontColor = "rgb(249,246,242)"; break;
        case 32 : ctx.fillStyle = "rgb(246 124 95)"; fontColor = "rgb(249,246,242)"; break;
        case 64 : ctx.fillStyle = "rgb(246 94 59)"; fontColor = "rgb(249,246,242)"; break;
        case 128 : ctx.fillStyle = "rgb(237 207 114)"; fontColor = "rgb(249,246,242)"; break;
        case 256 : ctx.fillStyle = "rgb(237 204 97)"; fontColor = "rgb(249,246,242)"; break;
        case 512 : ctx.fillStyle = "rgb(237 200 80)"; fontColor = "rgb(249,246,242)"; break;
        case 1024 : ctx.fillStyle = "rgb(237 197 63)"; fontColor = "rgb(249,246,242)"; break;
        case 2048 : ctx.fillStyle = "rgb(237 194 46)"; fontColor = "rgb(249,246,242)"; break;
        case 4096 : ctx.fillStyle = "rgb(52,63,79)"; fontColor = "rgb(249,246,242)"; break;
        default : ctx.fillStyle = "rgba(238 228 218 0.35)"; fontColor = "rgb(249,246,242)";
    }
    // Formatowanie komórek
    ctx.fill();
    if(cell.value){
        fontSize = width/2;
        ctx.font = fontSize + "px Viga";
        ctx.fillStyle = fontColor;
        ctx.textAlign = "center";
        //  ctx.textBaseline = "middle";
        ctx.fillText(cell.value, cell.x+width/2, cell.y+width/1.5);
    }
}
// Wypełnianie wszystkich komórek za pomocą funkcji drawCell
function drawAllCells(){
    for(var i=0; i<size; i++){
        for(var j=0; j<size; j++){
            drawCell(cells[i][j]);
        }
    }
}
// Sprawdzanie czy gra się zakończyła, jeśli nie, dodawanie nowych komórek
function pasteNewCell(){
    var countFree = 0;
    var i, j;
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            if(!cells[i][j].value) {
                countFree++;
            }
        }
    }
    // jeśli nie ma wolnych pól kończenie gry
    if(!countFree) {
        finishGame();
        return;
    }
    while(true){
        var row = Math.floor(Math.random()*size);
        var col = Math.floor(Math.random()*size);
        if(!cells[row][col].value){
            cells[row][col].value = 2 * Math.ceil(Math.random()*2);
            drawAllCells();
            return;
        }
    }
}
// Zmiana rozmiaru planszy w oparciu o input po naciśnięciu 'start'
changeSize.click(function(){
    if(sizeInput.val() >= 2 && sizeInput.val() <= 20){
        size = sizeInput.val();
        width = canvas.width / size - 6;
        canvasClear();
        startGame();
    }
})
// Przypisanie funkcji do naciśniętego przycisku
$(document).keydown(function(event){
    if(!loss){
        if(event.keyCode == 38 || event.keyCode == 87) moveUp();
        else if(event.keyCode == 39 || event.keyCode == 68) moveRight();
        else if(event.keyCode == 40 || event.keyCode == 83) moveDown();
        else if(event.keyCode == 37 || event.keyCode == 65) moveLeft();
        scoreLabel.html("Wynik: "+score);
    }
});
// Funkcja wykonująca operacje po wciśnięciu klawisza strzałki w prawo
// Przesunięcie komórek w daną stronę i dodanie do siebie poł o identycznej wartości oraz wywołanie pasteNewCell() do tworzenia nowych komórek
function moveRight () {
    var i, j;
    var col;
    for(i = 0; i < size; i++) {
        for(j = size - 2; j >= 0; j--) {
            if(cells[i][j].value) {
                col = j;
                while (col + 1 < size) {
                    if (!cells[i][col + 1].value) {
                        cells[i][col + 1].value = cells[i][col].value;
                        cells[i][col].value = 0;
                        col++;
                    } else if (cells[i][col].value == cells[i][col + 1].value) {
                        cells[i][col + 1].value *= 2;
                        score +=  cells[i][col + 1].value;
                        cells[i][col].value = 0;
                        break;
                    } else {
                        break;
                    }
                }
            }
        }
    }
    pasteNewCell();
}
// Funkcja wykonująca operacje po wciśnięciu klawisza strzałki w lewo
// Przesunięcie komórek w daną stronę i dodanie do siebie poł o identycznej wartości oraz wywołanie pasteNewCell() do tworzenia nowych komórek
function moveLeft() {
    var i, j;
    var col;
    for(i = 0; i < size; i++) {
        for(j = 1; j < size; j++) {
            if(cells[i][j].value) {
                col = j;
                while (col - 1 >= 0) {
                    if (!cells[i][col - 1].value) {
                        cells[i][col - 1].value = cells[i][col].value;
                        cells[i][col].value = 0;
                        col--;
                    } else if (cells[i][col].value == cells[i][col - 1].value) {
                        cells[i][col - 1].value *= 2;
                        score +=   cells[i][col - 1].value;
                        cells[i][col].value = 0;
                        break;
                    } else {
                        break;
                    }
                }
            }
        }
    }
    pasteNewCell();
}
// Funkcja wykonująca operacje po wciśnięciu klawisza strzałki w górę
// Przesunięcie komórek w daną stronę i dodanie do siebie poł o identycznej wartości oraz wywołanie pasteNewCell() do tworzenia nowych komórek
function moveUp() {
    var i, j, row;
    for(j = 0; j < size; j++) {
        for(i = 1; i < size; i++) {
            if(cells[i][j].value) {
                row = i;
                while (row > 0) {
                    if(!cells[row - 1][j].value) {
                        cells[row - 1][j].value = cells[row][j].value;
                        cells[row][j].value = 0;
                        row--;
                    } else if (cells[row][j].value == cells[row - 1][j].value) {
                        cells[row - 1][j].value *= 2;
                        score +=  cells[row - 1][j].value;
                        cells[row][j].value = 0;
                        break;
                    } else {
                        break;
                    }
                }
            }
        }
    }
    pasteNewCell();
}
// Funkcja wykonująca operacje po wciśnięciu klawisza strzałki w dół
// Przesunięcie komórek w daną stronę i dodanie do siebie poł o identycznej wartości oraz wywołanie pasteNewCell() do tworzenia nowych komórek
function moveDown() {
    var i, j, row;
    for(j = 0; j < size; j++) {
        for(i = size - 2; i >= 0; i--) {
            if(cells[i][j].value) {
                row = i;
                while (row + 1 < size) {
                    if (!cells[row + 1][j].value) {
                        cells[row + 1][j].value = cells[row][j].value;
                        cells[row][j].value = 0;
                        row++;
                    } else if (cells[row][j].value == cells[row + 1][j].value) {
                        cells[row + 1][j].value *= 2;
                        score +=  cells[row + 1][j].value;
                        cells[row][j].value = 0;
                        break;
                    } else {
                        break;
                    }
                }
            }
        }
    }
    pasteNewCell();
}