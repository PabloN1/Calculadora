let contador=0

function ok1(){
    if(contador==0){
        document.getElementById("descripcion").innerHTML="Intenta descargarte el siguiente archivo. Debería haber una lista con distintas contraseñas. Quizás alguna de esas sirva!"
        contador++
        document.getElementById("ok").style.display="none";
        document.getElementById("link").innerHTML="Haz click para descargar la lista"
        
    }
}

function insertar(){
    var contra=document.getElementById("pasaporte").value
    console.log(contra)
    if(contra=="cacahuete"){
        for (let step = 0; step < 20; step++) {
            if(step==15){
                window.open("bueno1.html")
            }else{
                window.open("badend.html")
            }   
        }
        windows.location.replace()
    }else{
        window.location.replace("badend.html")
    }

}

function cambio(){
    
}