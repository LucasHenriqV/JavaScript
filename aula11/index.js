let nota = prompt('digite sua nota:')
let faltas = prompt('digite a quantidade de faltas:')

const media = 6
const faltas_maximas = 15

let resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)