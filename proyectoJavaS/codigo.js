alert('Hola Mundo')
let numero=0


function sumar(){
    var suma=Number(document.getElementById("suma1").value)+Number(document.getElementById("suma2").value)
    document.getElementById("resultado").value=suma
    document.getElementById("resultado").style.backgroundColor="green"
    document.getElementById("resultado").style.color="white"
}

function cambiarNombre(){
    console.log('Entro en cambiar nombre')
    document.getElementById("texto1").innerHTML='Hola pepe'
    console.log('Salgo de cambiar nombre')
}

function pareceunascensor(sumaresta){
    var valor= document.getElementById("contador").innerHTML
    valor=Number(valor) + Number(sumaresta)
    document.getElementById("contador").innerHTML=valor
}

function subir(){
    document.getElementById("texto1").innerHTML=parseFloat(document.getElementById("texto1").innerHTML)+1
}

function bajar(){
    
    document.getElementById("texto1").innerHTML=document.getElementById("texto1").innerHTML-1
}