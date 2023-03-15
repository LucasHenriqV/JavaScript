let n1 = prompt('Digite o valor de n1')
let n2 = prompt('Digite o valor de n2')

n1 = Number(n1)
n2 = Number(n2)

//os () servem como precedência
document.write(' A soma entre ' + n1 + ' e ' + n2 + ' é: ' + (n1 + n2 ) + '<br/>' )
document.write(' A subtração entre ' + n1 + ' e ' + n2 + ' é: ' + (n1 - n2 ) +'<br/>')
document.write(' A multiplicação entre ' + n1 + ' e ' + n2 + ' é: ' + (n1 * n2 ) + '<br/>')
document.write(' A divisão entre ' + n1 + ' e ' + n2 + ' é: ' + (n1 / n2 ) + '<br/>' )
document.write(' O módulo entre ' + n1 + ' e ' + n2 + ' é: ' + (n1 % n2 ) + '<br/>' )
//document.write(' O incremento de ' + n1 + ' é: ' + (++n1) + '<br/>' ) nessa forma ele mostra o resultado antes <pré>
document.write(' O incremento de ' + n1 + ' é: ' + (n1++) + '<br/>' )//pós
document.write(n1 + '<br/>')//como podemos ver agora
//document.write(' O decremento de ' + n1 + ' é: ' + (--n1) + '<br/>' )
document.write(' O decremento de ' + n1 + ' é: ' + (n1--) + '<br/>' )
document.write(n1 + '<br/>')
