const fulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");


//funcion para abrir las imagenes
function openFulImg(referencia){
    fulImgBox.style.display = "flex";
    fulImg.src = referencia; //referenciamos cada imagen asi no se repiten
}


//funcion para cerrar la imagen
function closeImg(){    //creamos la funcion, accedemos a la variable y luego de darle estilo y darle display para que desaparezca
    fulImgBox.style.display = "none";
}