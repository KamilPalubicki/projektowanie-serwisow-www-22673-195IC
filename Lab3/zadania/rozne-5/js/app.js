function printNumbers(nr)
{
    var str = "";
    for(let i = 1; i <= nr; i++)
        str += i;
    return str;
}

alert(printNumbers(12));