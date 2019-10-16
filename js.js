function mostra(){
    let verificar = document.getElementById("mostra").style.display;
    
    if(verificar =="block"){
        document.getElementById("mostra").style.display="none";
        document.getElementById("continuar").style.display="block";
        document.getElementById("continuar2").style.display="none";
    }else{
        document.getElementById("mostra").style.display="block";
        document.getElementById("continuar").style.display="none";
        document.getElementById("continuar2").style.display="block";
    }

}