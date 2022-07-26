var inputTexto = document.querySelector(".text-in");

var mensaje = document.querySelector(".text-out");

function btnencriptar(){
    var textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringAencriptar){

    let matrixCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringAencriptar = stringAencriptar.toLowerCase();

    for ( let i = 0; i < matrixCodigo.length; i++){
        if (stringAencriptar.includes(matrixCodigo[i][0])){
            stringAencriptar = stringAencriptar.replaceAll(matrixCodigo[i][0],matrixCodigo[i][1]);
        }

    }
    return stringAencriptar;
}

function btndesencriptar(){
    var textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(strinAdesencriptar){
    let matrixCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strinAdesencriptar = strinAdesencriptar.toLowerCase();

    for ( let i = 0; i < matrixCodigo.length; i++){
        if (strinAdesencriptar.includes(matrixCodigo[i][1])){
            strinAdesencriptar = strinAdesencriptar.replaceAll(matrixCodigo[i][1],matrixCodigo[i][0]);
        }

    }
    return strinAdesencriptar;

}

function btncopiar(){
    var textCopy = document.querySelector(".text-out");
    console.log(textCopy.value);
    textCopy.select();
    document.execCommand('copy');
}

function visivilidad(id, visible){
    document.getElementById(id).style.display = visible ;

}
