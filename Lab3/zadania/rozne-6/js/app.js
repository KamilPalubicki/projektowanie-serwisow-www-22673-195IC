function coRobi(a,b){

    if(b =='grudzien' || b =='styczen' ||b =='luty'){
        alert( a + " jezdzi na sankach");
    }

    else if(b =='marzec' || b =='kwiecien' ||b =='maj'){
        alert( a + " chodzi po kaluzach");
    }

    else if(b =='czerwiec' || b =='lipiec' ||b =='sierpien'){
        alert( a + " sie opala");
    }

    else if(b =='wrzesien' || b =='pazdziernik' ||b =='listopad'){
        alert( a + " zbiera liscie");
    }

    else {
        alert( a + " uczy się JS");
    }
}

function zadanie(){
    const imie = prompt("Podaj imię: ");
    const miesiac = prompt("Podaj miesiąc: ");
    coRobi(imie,miesiac);
}

zadanie();