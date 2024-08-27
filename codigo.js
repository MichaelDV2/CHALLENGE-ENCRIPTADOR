function encriptarTexto(texto) { // Encriptar el texto
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto){ // Desencriptar el texto
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

document.getElementById("mensaje").addEventListener("focus", function() {
    const textarea = this;
    if (textarea.value === "Ingrese el texto aquí...") {
        textarea.value = ""; 
    }
});

document.getElementById("mensaje").addEventListener("input", function() {
    const textarea = this;
    textarea.value = textarea.value
        .toLowerCase() 
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, ""); 
});

document.querySelector(".encriptar").addEventListener("click", function() { //  botón "Encriptar"
    const textarea = document.getElementById("mensaje");
    const mensajeOriginal = textarea.value;

    
    const mensajeEncriptado = encriptarTexto(mensajeOriginal);

    const outputDiv = document.querySelector(".salida_texto");  // encriptado en el div output_texto
    outputDiv.querySelectorAll('.copiar').forEach(button => button.remove());
    outputDiv.querySelectorAll('.mensajeFinal').forEach(p => p.remove());

    const encriptedParagraph = document.createElement('p');
    encriptedParagraph.classList.add('mensajeFinal');
    encriptedParagraph.textContent = mensajeEncriptado;
    outputDiv.appendChild(encriptedParagraph);

    document.querySelector(".muñeco").style.display = "none";
    document.querySelector(".salida_texto-titulo").style.display = "none";
    document.querySelector(".salida_texto-parrafo").style.display = "none";

    const botonCopiar = document.createElement('button');  // botón "copiar"
    botonCopiar.classList.add('copiar');
    botonCopiar.textContent = 'Copiar';
    outputDiv.appendChild(botonCopiar);

    outputDiv.style.justifyContent = 'space-between';
    botonCopiar.style.cursor = 'pointer';

        document.querySelector('.copiar').addEventListener('click', function() {// botón copiar
        const botonCopiar = document.querySelector('.copiar');
        const mensajeFinal = document.querySelector('.mensajeFinal');
        navigator.clipboard.writeText(mensajeFinal.textContent);
        botonCopiar.textContent = 'Texto copiado ✔';
        });

});


document.querySelector(".desencriptar").addEventListener("click", function() { //  el botón Desencriptar
    const textarea = document.getElementById("mensaje");
    const mensajeOriginal = textarea.value;

    
    const mensajeDesencriptado = desencriptarTexto(mensajeOriginal); // función de desencriptación al texto

    
    const outputDiv = document.querySelector(".salida_texto");   // mensaje desencriptado en el div 
    outputDiv.querySelectorAll('.copiar').forEach(button => button.remove());
    outputDiv.querySelectorAll('.mensajeFinal').forEach(p => p.remove());

    const encriptedParagraph = document.createElement('p');
    encriptedParagraph.classList.add('mensajeFinal');
    encriptedParagraph.textContent = mensajeDesencriptado;
    outputDiv.appendChild(encriptedParagraph);

    
    document.querySelector(".muñeco").style.display = "none";  // Oculta los elementos del mensaje 
    document.querySelector(".salida_texto-titulo").style.display = "none";
    document.querySelector(".salida_texto-parrafo").style.display = "none";

    const botonCopiar = document.createElement('button'); //  botón "copiar"
    botonCopiar.classList.add('copiar');
    botonCopiar.textContent = 'Copiar';
    outputDiv.appendChild(botonCopiar);

    outputDiv.style.justifyContent = 'space-between';
    botonCopiar.style.cursor = 'pointer';

        document.querySelector('.copiar').addEventListener('click', function() {
        const botonCopiar = document.querySelector('.copiar');
        const mensajeFinal = document.querySelector('.mensajeFinal');
        navigator.clipboard.writeText(mensajeFinal.textContent);
        botonCopiar.textContent = 'Texto copiado ✔';
        });

});
