let fechaActual = new Date()

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
    if (milisegundos<99){
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
        let _milisegundos = document.querySelector('#milisegundos')

        if(milisegundos < 9){
            _milisegundos.innerHTML = `0${imprimirmilisegundos() } `
        }else{
            _milisegundos.innerHTML = `${imprimirmilisegundos() }` 
        }
        
    }
    function segundosCronometro(){
        fechaActual = new Date()    
        let _segundos = document.querySelector('#segundos')
        if(segundos < 9){
            _segundos.innerHTML = `0${imprimirsegundos() }:`
        }else{
            _segundos.innerHTML = `${imprimirsegundos() }:` 
        }
    }

    function minutosCronometro(){
        fechaActual = new Date()    
        let _minutos = document.querySelector('#minutos')
        if(minutos < 9){
            _minutos.innerHTML = `0${imprimirminutos() }:`
        }else{
            _minutos.innerHTML = `${imprimirminutos() }:` 
        }
    }    

    function horaCronometro(){
        fechaActual = new Date()    
        let _hora = document.querySelector('#hora')
        if(horas < 9){
            _horas.innerHTML = `0${imprimirHoras() }:`
        }else{
            _horas.innerHTML = `${imprimirHoras() }:` 
        }
    }    
let id1,id2,id3,id4

    let bandera = false
    function iniciarCronometro(){
        if (bandera === false){
            id1 = setInterval(milisegundosCronometro,10)
            id2 = setInterval(segundosCronometro,1000)
            id3 = setInterval(minutosCronometro,60000)
            id4 = setInterval(horaCronometro,3600000)
            bandera = true
        }        

    }
    
  

function pausarCronometro(){
    clearInterval(id1)
    clearInterval(id2)
    clearInterval(id3)
    clearInterval(id4)
    bandera = false
}   
botonIniciar = document.querySelector('.botonVerde')
botonReset = document.querySelector('.botonAmarillo')
botonPausa = document.querySelector('.botonRojo')

botonIniciar.addEventListener('click',()=>{
    let cronometro = document.querySelector('.container')
    cronometro.className = 'container textoVerde'
    iniciarCronometro()

})
botonReset.addEventListener('click',()=>{
    let cronometro = document.querySelector('.container')
    cronometro.className = 'container textoAmarillo'
    resetCronometro()})


botonPausa.addEventListener('click',()=>{
    let cronometro = document.querySelector('.container')
    cronometro.className = 'container textoRojo'
    pausarCronometro()})
    

