function exibirArtigo(id, callbackSucesso, callbackErro) {

    //lógica: recuperar o id via requisição http
    if (true){
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito...')
       
    }
    else{
         callbackErro('Erro ao recuperar os dados')
    }
}
var callbackSucesso = function(titulo, descrição){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr/>')
    document.write('<p>' + descrição + '</p>')
}

var callbackErro = function(erro){
    document.write('<p><b>Erro:</b>' + erro + '</p>')
}
exibirArtigo(1, callbackSucesso, callbackErro )