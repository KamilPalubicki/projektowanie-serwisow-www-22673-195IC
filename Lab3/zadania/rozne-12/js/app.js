function checkFemale(n){

    var ciagLiter = [...n];
    if(ciagLiter[ciagLiter.length - 1] == "a"){
        console.info(n +" == true");
        return true
    }
    else{
        console.info(n +" == false");
        return false
    }
}

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Karolak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Beata Lecka",
    "Katarzyna Małecka"
]

function countWomanInTable(arr){

    var licz = 0;

    for(i = 0; i < arr.length;i ++ ){
        arr[i] = arr[i].split(" ");
        if( checkFemale(arr[i][0]) ){
            licz = licz + 1;

        }
    }
    alert( "Jest " + licz +" kobiet")
}

countWomanInTable(users);