function countWord(text)
{
    iloscSlow = text.split(' ').length;
    if(text === '')
        console.info("Nic nie wpisales");
    else
        alert("Tekst \"" + text + "\" składa się z " + iloscSlow + " wyrazów");
}

var text = prompt("Podaj zdanie")
countWord(text)