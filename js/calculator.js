
//Hoisting como posicionar tus alcances de variables
var operator =''
var prevValue =''
var currentValue = ''

//limpia el input
function reset(){
    //asignar valor vacio al elemento
    document.getElementById('input').value = ""
    //borrando variables globales
    operator = ""
    prevValue = ""
    currentValue = ""    
}

//coloca el valor en el input
function setValue(value){
    var current = document.getElementById('input').value
    //concatenacion de dos variables
    document.getElementById('input').value = current + value
    currentValue = current + value
    console.log(currentValue)
}

//borra el valor de derecha a izquierda
function remove(){
    var current = document.getElementById('input').value
//substrae del valor el primero de la derecha    
    var newValue = current.substr(0, current.length -1) 

    document.getElementById('input').value = newValue
    currentValue = newValue
}

//define la operacion matematica en el input
function setSymbol(symbol){
    operator = symbol //asignando symbol a la variables global
    prevValue = currentValue
    currentValue ="" 
    //borrar el value del input
    document.getElementById('input').value = ""
}

//calcula y obtiene el resultado de la operacion matematica en el input
function getResult(){
    
    //asignando operacion (suma) a la variable 'result'
    //parseFloat funcion que convierte str a numerico
    var total = 0 //parseFloat(prevValue) + parseFloat(currentValue)
    if (operator === '+'){
        total = parseFloat(prevValue) + parseFloat(currentValue)
    } else if (operator === '-'){
        total = parseFloat(prevValue) - parseFloat(currentValue)
    } else if (operator === 'x'){
        total = parseFloat(prevValue) * parseFloat(currentValue)
    } else {
        total = parseFloat(prevValue) / parseFloat(currentValue)
    }

    // la condicion verifica si el valor es divisble (nro decimal o entero)
    if(total % 1 !=0){
        // al ser el valor (decimal) lo redondea a 3 decimales
        total = total.toFixed(3)
    }

    document.getElementById('input').value = total
    currentValue = total
    prevValue = ""

    console.log({operator, prevValue, currentValue, total})

}


//coloca el punto decimal en el input
function setDecimal(){
    //la condicion indica que si el valor dentro del input no tuviese ('.') creara la concatenacion.
    if(document.getElementById('input').value.includes('.')=== false){
        var newValue = currentValue + '.' //la variable newValue contiene la data de currentValue concatenada al str '.'
        document.getElementById('input').value = newValue
        currentValue = newValue //currentValue asignado ahora a newValue(valor decimal)
    }
}