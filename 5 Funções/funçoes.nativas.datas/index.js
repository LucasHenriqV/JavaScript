let data = new Date()

/*
//dia que estamos
document.write(data.getDate())

document.write('<br>')

//mês que estamos
document.write(data.getMonth() + 1)

document.write('<br>')

//ano em que estamos
document.write(data.getFullYear())

document.write('<br> <br>')

document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + (data.getFullYear()) )
*/


/*
//adicionar ou remmover dias
document.write(data.toString())

data.setDate(data.getDate() + 2 )

document.write('<hr>')

document.write(data.toString())

document.write('<br><br><hr>')


//adicionar ou remover meses
document.write(data.toString())

data.setMonth(data.getMonth() + 2 )

document.write('<hr>')

document.write(data.toString())

document.write('<br><br><hr>')

//adicionar ou remover anos
document.write(data.toString())

data.setFullYear(data.getFullYear() - 2 )

document.write('<hr>')

document.write(data.toString())

document.write('<hr>')
*/

let data1 = new Date(2023, 1, 08 )
let data2 = new Date(2023, 2, 08 )

document.write(data1.toString())

document.write('<hr>')

document.write(data2.toString())

document.write('<br><br><hr>')
//converter datas para algo que possamos calcular

document.write(data1.getTime())

document.write('<hr>')

document.write(data2.getTime())

document.write('<br><br><hr>')
//encontrar a quantidade de milissegundos entre data1 e data2
let milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())

document.write(milissegundos_entre_datas)

document.write('<hr>')
//1 dia tem 24, cada hora tem 60 minutos, cada minuto tem 60 segundos e cada segundo tem 1000 milissegundos
//então quantos milissegundos existem em um dia
let milissegundos_por_dia = (1*24*60*60*1000)

document.write('1 dia tem: ' + milissegundos_por_dia + ' milissegundos')

document.write('<br><br><hr>')
document.write('A diferença entre data1 e data2 é de: ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dia) + 'dias')