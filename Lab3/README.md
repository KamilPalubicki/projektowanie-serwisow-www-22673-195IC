# Lab3

# index.html

<p>Na stronie głównej możemy po "przejechaniu" myszką zobaczyć powiększające się obrazki 
przedstawiające użyte technologie, działa poprzez addEventListener("mouseover", zoomOver) i
addEventListener("mouseout", zoomOut)<br></p>

<img src="assets/index.png" alt="index"  style="float: left;" /><br>

<img src="assets/index2.png" alt="index"  style="float: left;" /><br>

<p>Po przytrzymaniu PPM na napisie "Laboratorium nr3" zmieniany jest kolor tekstu na losowy
addEventListener("mousedown", changecolor), addEventListener("mouseup", revertcolor)<br></p>

<img src="assets/index3.png" alt="index"  style="float: left;" /><br>

# list.html

<p>Teraz, aby zmienić czcionkę listu wystarczy nacisnąć dwa razy na tekst (addEventListener("dblclick", randfont)) :<br></p>

<img src="assets/list.png" alt="index"  style="float: left;" /><br>
<img src="assets/list2.png" alt="index"  style="float: left;" /><br>
<img src="assets/list3.png" alt="index"  style="float: left;" /><br>

# formularz.html

<p>Po wpisaniu danych w formularz przycisk zmienia kolor z niebieskiego na czerwony (addEventListener("change", resetCaptcha)):<br></p>

<img src="assets/form.png" alt="index"  style="float: left;" /><br>

<p>Jeśli wkleimy coś do pola mail, dostaniemy alerta z przypomnieniem o sprawdzeniu wklejonej treści (addEventListener("paste", checkPasted);)<br></p>

<img src="assets/form3.png" alt="index"  style="float: left;" /><br>

<p>Następnie po wypełnieniu captch'y submit zmienia kolor na zielony (addEventListener("click", authorize))<br></p>

<img src="assets/form2.png" alt="index"  style="float: left;" /><br>

# memy.html

<p>Na podstronie 'Memy' każdy ruch myszką powoduje zmianę koloru tła losowo (addEventListener("mousemove", discoColors)), natomiast po 
kliknięciu na mem (addEventListener("click", turnOffDisco)) możemy zatrzymać tą ciągłą zmianę kolorów (removeEventListener("mousemove", discoColors)) <br></p>

<img src="assets/memy.png" alt="index"  style="float: left;" /><br>

# logowanie.html

<p>Gdy na stronie logowania wpiszemy coś w pola login lub hasło, dane pole zmieni swój kolor na czerwony, 
a przy każdym naciśnięciu klawisza będzie zmianiać się na białe (addEventListener("keydown", turnRed), addEventListener("keyup", turnWhite)) <br></p>

<img src="assets/logowanie.png" alt="logowanie"  style="float: left;" /><br>
<img src="assets/logowanie2.png" alt="logowanie2"  style="float: left;" /><br>

# all

<p>Dodatkowo na każdej podstronie po skierowaniu myszki z banera na inne elementy zmienia się losowo kolor tego banera (addEventListener("mouseleave", changecolor)) <br></p>

<img src="assets/index4.png" alt="all"  style="float: left;" /><br>