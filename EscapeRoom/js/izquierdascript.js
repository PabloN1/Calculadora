

function ok1(){
   
        document.getElementById("descripcion").innerHTML="Intenta descargarte el siguiente archivo. Debería haber una lista con distintas contraseñas. Quizás alguna de esas sirva!"
        document.getElementById("ok").style.display="none";
        document.getElementById("link").innerHTML="Haz click para descargar la lista"
        document.getElementById("inserte").disabled=false;
        document.getElementById("pasaporte").disabled=false;
    
}

function insertar(){
    var contra=document.getElementById("pasaporte").value
    console.log(contra)
    if(contra=="Cacahuete"){
        for (let step = 0; step < 20; step++) {
            if(step==15){
                window.open("bueno1.html")
            }else{
                window.open("badend.html")
            }   
        }
        
    }else{
        window.location.replace("badend.html")
    }

}

function cambio(){
    
}