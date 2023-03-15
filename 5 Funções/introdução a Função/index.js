let largura = Number(prompt('Largura'))
let comprimento = Number(prompt('comprimento'))

let areaT = calculandoAreaTerreno(largura, comprimento)   
   
   function calculandoAreaTerreno ( largura, comprimento ) {

        var area = largura * comprimento

        return area
    }

    document.write( 'O terreno tem ' + areaT + ' metros quadrados')