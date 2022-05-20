var a=[1,0,0,1,0,0,1,0,0];
var contador=Math.floor((Math.random() * 9));
var mov=0

if(a[contador]==1){
    document.getElementById("pista").src="img/rojo.png"
}else{
    document.getElementById("pista").src="img/verde.png"
}

function clickeo(opcion){
    
    var error=false
    
    switch(opcion){
        case 1:
            if(a[contador]==1){
                document.getElementById("botin1").style.backgroundColor="red"
                error=true
            }else{
                document.getElementById("botin1").style.backgroundColor="green"
            }
            document.getElementById("botin1").disabled=true;
            break;
        case 2:
            if(a[contador]==1){
                document.getElementById("botin2").style.backgroundColor="red"
            }else{
                document.getElementById("botin2").style.backgroundColor="green"
            }
            document.getElementById("botin2").disabled=true;
            break;
            
        case 3:
            if(a[contador]==1){
                document.getElementById("botin3").style.backgroundColor="red"
            }else{
                document.getElementById("botin3").style.backgroundColor="green"
            }
            document.getElementById("botin3").disabled=true;
            break;
        case 4:
            if(a[contador]==1){
                document.getElementById("botin4").style.backgroundColor="red"
                error=true
            }else{
                document.getElementById("botin4").style.backgroundColor="green"
            }
            document.getElementById("botin4").disabled=true;
            break;
        case 5:
            if(a[contador]==1){
                document.getElementById("botin5").style.backgroundColor="red"
            }else{
                document.getElementById("botin5").style.backgroundColor="green"
            }
            document.getElementById("botin5").disabled=true;
            break;
        case 6:
            if(a[contador]==1){
                document.getElementById("botin6").style.backgroundColor="red"
            }else{
                document.getElementById("botin6").style.backgroundColor="green"
            }
            document.getElementById("botin6").disabled=true;
            break; 
        case 7:
            if(a[contador]==1){
                document.getElementById("botin7").style.backgroundColor="red"
                error=true
            }else{
                document.getElementById("botin7").style.backgroundColor="green"
            }
            document.getElementById("botin7").disabled=true;
            break;
        case 8:
            if(a[contador]==1){
                document.getElementById("botin8").style.backgroundColor="red"
            }else{
                document.getElementById("botin8").style.backgroundColor="green"
            }
            document.getElementById("botin8").disabled=true;
            break;
        case 9:
            if(a[contador]==1){
                document.getElementById("botin9").style.backgroundColor="red"
                error=true
            }else{
                document.getElementById("botin9").style.backgroundColor="green"
            }
            document.getElementById("botin9").disabled=true;
            break; 
    }
    contador++
    mov++
    if(contador>=9){
        contador=0
    }    

    if(a[contador]==1){
        document.getElementById("pista").src="img/rojo.png"
    }else{
        document.getElementById("pista").src="img/verde.png"
    }

    if(error){
        alert("ERROR. Vamos a intentarlo otra vez")
        location.reload()
    }

    if(mov==9){
        alert("¡LO LOGRASTE! He encontrado otra contraseña? 3-2-6 Me pregunto de que podrá ser...")
        window.location.replace("puzzle3.html")
    }
    
}

