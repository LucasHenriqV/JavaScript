function modificar(corDoCampo ) {

    
    var cor = document.getElementById('campo') 
    cor.style.background = corDoCampo
    cor.style.border = '1px solid black'

}
function letras() {

    var mudar = document.getElementById('campo').value

    if(mudar.length+1 < 5){
        document.getElementById('campo').style.background = 'yellow'
        document.getElementById('campo').style.color = 'black'
    }
    else if(mudar.length+1 > 5){
        document.getElementById('campo').style.background = 'green'
        document.getElementById('campo').style.color = 'white'
    }
    
}


   