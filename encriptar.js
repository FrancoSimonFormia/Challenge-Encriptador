let inputUser = document.getElementById("input-user");
let output = document.getElementById("output-user");


/*Encriptacion*/


function encrypt(){

    let text = inputUser.value;

    cleanOutputText();
    removeBackGroundImg();
    removePlaceholder();
    let result = encriptarTexto(text);

    if(result !== ""){
        output.value = result;
    }
    else{
        output.value = "";
    }

}


function encriptarTexto(texto) {
    
    if (!/^[a-z\s]+$/.test(texto)) {
        triggerWarning("Error: El texto cifrado debe contener solo letras minúsculas y espacios en blanco");
        return "";
    }

    const textoCifrado = texto
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    return textoCifrado;
}


/*Desencriptacion*/

function decrypt(){

    let text = inputUser.value;

    cleanOutputText();
    removeBackGroundImg();
    removePlaceholder();

    let result = desencriptarTexto(text);

    if(result !== ""){
        output.value = result;
    }
    else{
        output.value = "";
    }
}


function desencriptarTexto(textoCifrado) {
    if (!/^[a-z\s]+$/.test(textoCifrado)) {
        triggerWarning("Error: El texto cifrado debe contener solo letras minúsculas y espacios en blanco");
        return "";
    }

    const textoOriginal = textoCifrado
        .replace(/ufat/gi, "u")
        .replace(/ober/gi, "o")
        .replace(/imes/gi, "i")
        .replace(/enter/gi, "e")
        .replace(/ai/gi, "a");

    return textoOriginal;
}



/*Funciones generales*/

function cleanOutputText(){

    output.value = "";
    resultText = [];

    return;
}

function removeBackGroundImg(){

    let img = document.getElementById("background-img");
    img.setAttribute("class", "disabled");

    return;
}

function removePlaceholder(){

    let placeholder = document.getElementById("placeholder-title");
    placeholder.innerText = "";

    return;
}

function redirectUserToDecrypt(){

    window.open("decrypt.html",'popUpWindow'); 

}

function redirectUserToEncrypt(){

    window.open("index.html",'popUpWindow'); 
}

function captureAllLetters(text){

    for(let i = 0; i < text.length; i++){
        resultText.push(text[i]);
    }

    return;
}

function triggerWarning(message){
    const warning = document.getElementById("warning");
    warning.classList.add("error-triggered");
    warning.innerText = message;
    setTimeout(() => {
        warning.classList.remove("error-triggered");
        warning.innerText = "Solo letras minúsculas y sin acentos";
    }, 3000);
    return;
}
