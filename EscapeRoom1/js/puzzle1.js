var oki=true
var contador

function ok(){
    if(document.getElementById("n1").value==6){
        document.getElementById("n1").style.border="2px solid greenyellow";
    }else{
        document.getElementById("n1").style.border="2px solid rgb(137, 3, 3)";
        oki=false
    }

    if(document.getElementById("n2").value==8){
        document.getElementById("n2").style.border="2px solid greenyellow";
    }else{
        document.getElementById("n2").style.border="2px solid rgb(137, 3, 3)";
        oki=false
    }

    if(document.getElementById("n3").value==9){
        document.getElementById("n3").style.border="2px solid greenyellow";
    }else{
        document.getElementById("n3").style.border="2px solid rgb(137, 3, 3)";
        oki=false
    }

    if(document.getElementById("n4").value==10){
        document.getElementById("n4").style.border="2px solid greenyellow";
    }else{
        document.getElementById("n4").style.border="2px solid rgb(137, 3, 3)";
        oki=false
    }

    if(oki){
        
        alert("Acertaste!! Quedate con este codigo rapido!!! 5 - 4 - 1")
        myTimeOut=setTimeout(cambioPuzzle2,2000)
        
    }else{
        alert("¡Fallaste! Intentalo otra vez :C")
    }
     
}

function cambioPuzzle2(){
    window.location.replace("puzzle2.html")
}