 var arraybotones= [0,0,0,0,0,0,0,0,0,0];
 const solucion =[1,4,5,6,2,3,9,8,7];
 var contador=0
 function boton(opcion){


    switch(opcion){
        case 1:
            document.getElementById("boton1").disabled=true;
            habilitaBotones()
            arraybotones[contador]=1
           
            break;
        case 2:
            document.getElementById("boton2").disabled=true;
            arraybotones[contador]=2
            break;
        case 3:
            document.getElementById("boton3").disabled=true;
            arraybotones[contador]=3
            break;
        case 4:
            document.getElementById("boton4").disabled=true;
            arraybotones[contador]=4
            break;
        case 5:
            document.getElementById("boton5").disabled=true;
            arraybotones[contador]=5
            break;
        case 6:
            document.getElementById("boton6").disabled=true;
            arraybotones[contador]=6
            break;    
        case 7:
            document.getElementById("boton7").disabled=true;
            arraybotones[contador]=7
            break;
        case 8:
            document.getElementById("boton8").disabled=true;
            arraybotones[contador]=8
            break;
        case 9:
            document.getElementById("boton9").disabled=true;
            arraybotones[contador]=9
            break;
    }
    contador++
    if(contador==9){
        deshabilitaBotones()
        document.getElementById("botonok").disabled=false;
    }
 }



function habilitaBotones(){
    document.getElementById("boton2").disabled=false;
    document.getElementById("boton3").disabled=false;
    document.getElementById("boton4").disabled=false;
    document.getElementById("boton5").disabled=false;
    document.getElementById("boton6").disabled=false;
    document.getElementById("boton7").disabled=false;
    document.getElementById("boton8").disabled=false;
    document.getElementById("boton9").disabled=false;
}

function deshabilitaBotones(){
    document.getElementById("boton1").disabled=true;
    document.getElementById("boton2").disabled=true;
    document.getElementById("boton3").disabled=true;
    document.getElementById("boton4").disabled=true;
    document.getElementById("boton5").disabled=true;
    document.getElementById("boton6").disabled=true;
    document.getElementById("boton7").disabled=true;
    document.getElementById("boton8").disabled=true;
    document.getElementById("boton9").disabled=true;
}

function ok(){
    let i=0
    let salir=true
    while(i<9 && salir!=false){
        if(solucion[i]!=arraybotones[i]){
            salir=false
        }
        i++;
    }

    if(salir==true){
        console.log("Correcto")
        for (let step = 0; step < 20; step++) {
            if(step==15){
                window.open("bueno1.html")
            }else{
                window.open("bueno.html")
            }   
        }
    }else{
        console.log("Incorrecto")
        document.getElementById("botonok").disabled=true
        deshabilitaBotones()
        document.getElementById("boton1").disabled=false
        contador=0
        document.getElementById("mensaje").innerHTML="Intentalo otra vez"
    }
}