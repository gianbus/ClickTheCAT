let k=0;
function gatto(x) {
    document.getElementById("gatto"+x.toString()).style.visibility = "hidden";
    k+=Math.floor(Math.random() * 100);
    if(k > 1000){
        document.getElementById("res").innerHTML = "<strong>stronzo</strong>";
    }else{
        var gattinovisibilek = "gatto"+(Math.floor(Math.random() * 9)+1).toString();
        document.getElementById(gattinovisibilek).style.visibility = "visible";
        document.getElementById("res").innerHTML = "Hai catturato " + k + " gatti";
    }
    
}
