let personas = [];
let nombre='', apellido1='', apellido2='';
let mfechaNac;
let estado, genero;
let curp ='';

function calcular(){
    obtenerDatos();
    curp = primerLetraApellido1() + primeraVocalApellido1() + primeraLetraApellido2() +
    primeraLetraNombre() + obFecha() + obSexo() + obEstado() + obConsonanteApellido1() +
    obConstanteApellido2() + obConstantePrimerNombre() + asignarCaracterFecha() + asignarDigitoRandom();

    curp = curp.toUpperCase();

    document.getElementById('txtCurp').innerHTML = curp;
}

function generos(){
    let genero1 = document.getElementById('txtHombre');
    let genero2 = document.getElementById('txtMujer');

    if(genero1.checked){
        return 'Hombre';
    }
    else if(genero2.checked){
        return 'Mujer';
    }
    else{
        return 'X';
    }
}

function obtenerDatos(){
    nombre=document.getElementById('txtNombre').value;
    apellido1=document.getElementById('txtApellido1').value;
    apellido2=document.getElementById('txtApellido2').value;
    fechaNac=document.getElementById('txtFecha').value;
    estado=document.getElementById('txtEstado').value;
    genero = generos();

    let persona = {name: nombre, lape1: apellido1, lape2: apellido2, date:fechaNac, state:estado, gender:genero};

    personas.push(persona);
}

function primerLetraApellido1(){
    let apellidoA = apellido1.split('');
    for(let i=0; i < apellidoA.length; i++){
        let inicial = apellidoA[i];
        let palabra = inicial.substring(0,1);
        return palabra.toLocaleLowerCase();
    }
}

function primeraVocalApellido1(){
    let apellidoA = apellido1.split('');
    for(let i=0; i < apellidoA.length; i++){
        let inicial = apellidoA[i];
        inicial.toLocaleLowerCase();
        if(inicial === 'a' || inicial === 'e' || inicial === 'i' || inicial === 'o' || inicial ==='u'){
            return inicial;
        }
    }
}

function primeraLetraApellido2(){
    if(apellido2.length === 0){
        return 'x';
    }
    else{
        let apellido2A = apellido2.split('');
        for(let i = 0; i < apellido2A.length; i++){
            let inicial = apellido2A[i];
            inicial.toLocaleLowerCase();
            let palabra = inicial.substring(0,1);
            return palabra.toLocaleLowerCase();
        }
    }
}
function primeraLetraNombre() {
    let nombreArray = nombre.split(' ');
    let primerNombre = nombreArray[0];
    primerNombre.toLocaleLowerCase();

    if (primerNombre === 'maría' || primerNombre === 'josé') {
        let segundoNombre = nombreArray[1];
        let inicial = segundoNombre.substring(0, 1);
        inicial.toLocaleLowerCase();
        return inicial;
    }
    else {
        let inicial = primerNombre.substring(0, 1);
        inicial.toLocaleLowerCase();
        return inicial;
    }
}

function obFecha() {
    let arrayFecha = fechaNac;
    arrayFecha = arrayFecha.split('-');

    let anio = arrayFecha[0];
    let mes = arrayFecha[1];
    let dia = arrayFecha[2];

    anio = anio.toString();
    mes = mes.toString();
    dia = dia.toString();

    anio = anio.slice(2);
    let fechaCompleta = anio+mes+dia;

    return fechaCompleta;
}

function obSexo() {
    if (genero === 'Hombre') {
        return 'h';
    }
    else if (genero === 'Mujer') {
        return 'm';
    }
    else {
        return 'x';
    }
}

function obEstado() {
    switch (estado) {
        case 'AS': {
            return 'as';
            break;
        }
        case 'BC': {
            return 'bc';
            break;
        }
        case 'BS': {
            return 'bs';
            break;
        }
        case 'CC': {
            return 'cc';
            break;
        }
        case 'CL': {
            return 'cl';
            break;
        }
        case 'CM': {
            return 'cm';
            break;
        }
        case 'CS': {
            return 'cs';
            break;
        }
        case 'CH': {
            return 'ch';
            break;
        }
        case 'DF': {
            return 'df';
            break;
        }
        case 'DG': {
            return 'dg';
            break;
        }
        case 'GT': {
            return 'gt';
            break;
        }
        case 'GR': {
            return 'gr';
            break;
        }
        case 'HG': {
            return 'hg';
            break;
        }
        case 'JC': {
            return 'jc';
            break;
        }
        case 'EM': {
            return 'em';
            break;
        }
        case 'MN': {
            return 'mn';
            break;
        }
        case 'MS': {
            return 'ms';
            break;
        }
        case 'NT': {
            return 'nt';
            break;
        }
        case 'NL': {
            return 'nl';
            break;
        }
        case 'OC': {
            return 'oc';
            break;
        }
        case 'PL': {
            return 'pl';
            break;
        }
        case 'QT': {
            return 'qt';
            break;
        }
        case 'QR': {
            return 'qr';
            break;
        }
        case 'SP': {
            return 'sp';
            break;
        }
        case 'SL': {
            return 'sl';
            break;
        }
        case 'SR': {
            return 'sr';
            break;
        }
        case 'TC': {
            return 'tc';
            break;
        }
        case 'TS': {
            return 'ts';
            break;
        }
        case 'TL': {
            return 'tl';
            break;
        }
        case 'VZ': {
            return 'vz';
            break;
        }
        case 'YN': {
            return 'yn';
            break;
        }
        case 'ZS': {
            return 'zs';
            break;
        }
        case 'NE': {
            return 'ne';
            break;
        }
    }
}

function obConsonanteApellido1() {
    let apellido1Array = apellido1.split('')
    apellido1Array = apellido1Array.slice(1);
    for (let i = 0; i < apellido1Array.length; i++) {
        let inicial = apellido1Array[i];
        if (inicial === 'a' || inicial === 'e' || inicial === 'i' || inicial === 'o' || inicial === 'u') {
            //No hacer nada
        }
        else {
            return inicial;
        }
    }
}

function obConstanteApellido2() {
    let apellido2Array = apellido2.split('');
    apellido2Array = apellido2.slice(1);
    for (let i = 0; i < apellido2Array.length; i++) {
        let inicial = apellido2Array[i];
        if (inicial === 'a' || inicial === 'e' || inicial === 'i' || inicial === 'o' || inicial === 'u') {
            //No hacer nada
        }
        else {
            return inicial;
        }
    }
}

function obConstantePrimerNombre() {
    let nombreArray = nombre.split('');
    nombreArray = nombre.slice(1);
    for (let i = 0; i < nombreArray.length; i++) {
        let inicial = nombreArray[i];
        if (inicial === 'a' || inicial === 'e' || inicial === 'i' || inicial === '' || inicial === 'u') {
            //No hacer nada
        }
        else {
            return inicial;
        }
    }
}

function asignarCaracterFecha() {
    let arrayFecha = fechaNac;
    arrayFecha = arrayFecha.split('-');

    let anio = arrayFecha[0];

    if (anio <= 1999) {
        let numeroRandom = (Math.random() * 10) | 0;
        numeroRandom.toString();
        return numeroRandom;
    }
    else {
        let letraAleatoria = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        letraAleatoria.toLocaleLowerCase();
        return letraAleatoria;
    }
}

function asignarDigitoRandom() {
    let numeroRandom = (Math.random() * 10) | 0;
    numeroRandom.toString();
    return numeroRandom;
}