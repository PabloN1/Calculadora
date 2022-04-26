let num1=0
let num2=0
let suma=0
let resta=0
let multiplicacion=0
let division=0

function aritmetico(operador){
    var expre
    switch(operador){
        case 1:
            expre=document.getElementById("Expresion").value+"+"
            break;
        case 2:
            expre=document.getElementById("Expresion").value+"-"
            break;
        case 3:
            expre=document.getElementById("Expresion").value+"*"
            break;
        case 4:
            expre=document.getElementById("Expresion").value+"/"
    }
    
   
    num1=document.getElementById("Expresion").value
    console.log(expre)
    document.getElementById("Expresion").value=expre
    suma=suma+1

    
}


function numero(num){
    var expre=document.getElementById("Expresion").value+num
    console.log(expre)
    document.getElementById("Expresion").value=expre
}





