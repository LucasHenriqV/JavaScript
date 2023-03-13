let n1 = prompt('digite um número')
 
let operação = prompt('digite a operação ')

let n2 = prompt('digite um número')

function calc(n1, n2, operação) {

    n1 = Number(n1)
    n2 = Number(n2)

    var resultado = 0

    if(operação == '+') {
        resultado = n1 + n2
    }
    else if(operação == '-') {
        resultado = n1 - n2
    }
    else if(operação != '+' && '-'){
        resultado = 'Só Sei Somar e Subtrair'
    }

    return resultado
    
}

document.write('O resultado é : ' + calc(n1, n2, operação) )