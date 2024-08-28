const texto = document.getElementById('texto')
function mMove(obj){
    obj.src = "imgs/janelaAberta.png"
    texto.textContent = 'Janela Aberta'
}
function mOut(obj){
    obj.src = "imgs/janelaFechada.png"
    texto.textContent = 'Janela Fechada'
}
function mClick(obj){
    obj.src = "imgs/janelaQuebrada.png"
    texto.textContent = 'Janela Quebrada'
}

