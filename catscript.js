let k=0;

function reset(){
    k=0;
    var gattinovisibilek;
    document.getElementById("res").innerHTML = "Click on a cat!";
    for (let index = 1; index < 10 ; index++) {
        gattinovisibilek = "gatto"+index.toString();
        document.getElementById(gattinovisibilek).style.visibility = "hidden";
    }
    gattinovisibilek = "gatto"+(Math.floor(Math.random() * 9)+1).toString();
    document.getElementById(gattinovisibilek).style.visibility = "visible";
}

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
