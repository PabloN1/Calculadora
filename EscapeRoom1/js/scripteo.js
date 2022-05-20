let contador=0

function ok1(){
    if(contador==0){
        document.getElementById("descripcion").innerHTML="¡Ya sé!, ¿Por qué no me echas una mano para salir de aquí? Solo tienes que seguir mis instrucciones"
        contador++
    }else{
        document.getElementById("descripcion").innerHTML="De acuerdo, vamos a ello pues!! en un par de segundos iremos a otro sitio..."
        document.getElementById("ok").disabled=true;
        myTimeOut=setTimeout(cambioMenu1,2000)
        contador=0
    }
}

function cambioMenu1(){
    window.location.replace("menu1.html")
}