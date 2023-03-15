let nota =prompt('Digite sua nota')

if(nota >= 8 && nota <= 10 ){
document.write('genio')
}
else if(nota >= 6 && nota <7){
    document.write('Aprovado')
}
else if(nota >= 4 && nota < 5){
document.write('Recuperação')
}
else if(nota >= 2 && nota < 3){
    document.write('reprovado')
}

else{
    document.write('expulso')
}
