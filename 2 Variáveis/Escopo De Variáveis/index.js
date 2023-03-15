//3 escopos: global, função e o bloco

var serie = 'friends'

//escopo de bloco 
if(true){
document.write(serie)
var serie2 = 'game of thrones'

}

document.write(serie2)
document.write('<br />')

function x() {

    var serie3 = 'the walking dead'
    document.write(serie)
    document.write(serie2)
}
x()

document.write('<br/>')
