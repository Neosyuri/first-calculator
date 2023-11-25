function fin(textoFinal){
    document.getElementById ("resultadoFinal").value = textoFinal;

}


function sumar(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    fin(primerNumero + segundoNumero);
    
}

function restar(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    fin(primerNumero - segundoNumero);
    
}

function multiplicar(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    fin(primerNumero * segundoNumero);
    
}

function dividir(){
    let primerNumero = +document.getElementById("numeroUno").value;
    let segundoNumero = +document.getElementById("numeroDos").value;
    fin(primerNumero / segundoNumero);
    
}

