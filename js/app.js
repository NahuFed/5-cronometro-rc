


//martes 11 de abril de 2023
//11:35:00
// Array de días de la semana
const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Array de meses
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


let fechaActual = new Date()

function determinarTurno(){
    if (fechaActual.getHours() > 12){
        return 'PM'
    } else {
        return 'AM'}
}


function resetCronometro(){
let _hora = document.querySelector('#hora')
let _minutos = document.querySelector('#minutos')
let _segundos = document.querySelector('#segundos')
let _milisegundos = document.querySelector('#milisegundos')
milisegundos = 0
segundos = 0
minutos = 0
horas = 0
_hora.innerHTML='00:'
_minutos.innerHTML ='00:'
_segundos.innerHTML ='00:'
_milisegundos.innerHTML= '00'
}
// resetCronometro()
function imprimirmilisegundos(){
    if (milisegundos<100){
    `${milisegundos}`//imprime el milisegundos
    milisegundos++} //incrimenta el milisegundos
    else{
        milisegundos = 0 //reinicie el milisegundos
    }
    return milisegundos
}
function imprimirsegundos(){
    if (segundos<59){
    `${segundos}`//imprime el segundos
    segundos++} //incrimenta el segundos
    else{
        segundos = 0 //reinicie el segundos
    }
    return segundos
}
function imprimirminutos(){
    if (minutos<59){
    `${minutos}`//imprime el minutos
    minutos++} //incrimenta el minutos
    else{
        minutos = 0 //reinicie el minutos
    }
    return minutos
}
function imprimirHoras(){
    if (horas<59){
    `${horas}`//imprime el horas
    horas++} //incrimenta el horas
    else{
        horas = 0 //reinicie el horas
    }
    return horas
}
    let milisegundos = 0
    let segundos = 0
    let minutos = 0
    let horas = 0

    function milisegundosCronometro(){
        fechaActual = new Date()    
        let milisegundos = document.querySelector('#milisegundos')
        milisegundos.innerHTML = `${imprimirmilisegundos() } `
    }
    function segundosCronometro(){
        fechaActual = new Date()    
        let segundos = document.querySelector('#segundos')
        segundos.innerHTML = `${imprimirsegundos() }: `
    }

    function minutosCronometro(){
        fechaActual = new Date()    
        let minutos = document.querySelector('#minutos')
        minutos.innerHTML = `${imprimirminutos()}: `
    }    

    function horaCronometro(){
        fechaActual = new Date()    
        let hora = document.querySelector('#hora')
        hora.innerHTML = `${imprimirHoras()}: `
    }    
let id1,id2,id3,id4


    function iniciarCronometro(){        
        id1 = setInterval(milisegundosCronometro,10)
        id2 = setInterval(segundosCronometro,1000)
        id3 = setInterval(minutosCronometro,60000)
        id4 = setInterval(horaCronometro,3600000)
    }
    
    iniciarCronometro()

function pausarCronometro(){
    clearInterval(id1)
    clearInterval(id2)
    clearInterval(id3)
    clearInterval(id4)
}
setTimeout(pausarCronometro,10000)
    
    

