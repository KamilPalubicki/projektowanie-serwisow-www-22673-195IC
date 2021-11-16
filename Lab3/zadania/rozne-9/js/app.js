function sortowanie(a,b){
    const tab = a.split(b);
    var tablicaNowa = tab.sort();
    alert(tablicaNowa.join([separator = b]));
}

function zadanie(){
    const tekst = "Ania|Kamil|Pawel|Bartosz|Maciej|Julia|Kacper|Patrycja";
    const rozdzial = '|';
    sortowanie(tekst, rozdzial)
}
zadanie();