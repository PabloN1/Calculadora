
function ok(){
    if(document.getElementById("solucion").value==2){
        alert("¡Correcto! Aqui hay otro trozo de contraseña... 7-8-9");
        window.location.replace("puzzle4.html")
    }else{
        alert("Incorrecto, Intentalo otra vez")
    }
}