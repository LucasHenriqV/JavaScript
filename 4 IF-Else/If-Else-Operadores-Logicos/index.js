
/* operador "E" && verdadeiro se todas as expressões forem verdadeiras

let nota = prompt("digite sua nota")
const media = 6
let presente = prompt("digite dias presentes")
const presença = 330

if(nota >= media && presente >= presença){
document.write('APROVADO')
}
else{
document.write('REPROVADO')
}*/

/* operador "OU"|| verdadeiro se pelo menos uma das expressões for verdadeira

let nota = prompt("digite sua nota")
const media = 6
let presente = prompt("digite dias presentes")
const presença = 330

if(nota >= media || presente >= presença){
document.write('APROVADO')
}
else{
document.write('REPROVADO')
}*/

/* operador "negação" ! inverte o resultado da expressao de comparação

let nota = prompt("digite sua nota")
const media = 6
let presente = prompt("digite dias presentes")
const presença = 330

if(!(nota >= media && presente >= presença)){
document.write('APROVADO')
}
else{
document.write('REPROVADO')
}
*/

let nota = prompt('digite sua nota:')
let faltas = prompt('digite a quantidade de faltas:')

const media = 6
const faltas_maximas = 15

if(nota >= media && faltas <= faltas_maximas){
document.write('APROVADO')
}
else{
document.write('REPROVADO')
}



