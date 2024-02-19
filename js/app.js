let valorTotal = 0;
let botao = document.querySelector('.botao-limpar');

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let precoProduto;

    if (quantidade == 0){
        alert('digite uma quantidade');
    } else {
    
    if (produto == 'Fone de ouvido - R$100'){
        precoProduto = 100;
    } else if (produto == 'Celular - R$1400') {
        precoProduto = 1400;
    } else if (produto == 'Relogio - R$500') {
        precoProduto = 500;
    } else {
        precoProduto = 5000;
    }
        
    let precoTotalDoProduto = quantidade * precoProduto;
  
    let listaProdutos = document.getElementById('lista-produtos');
  
    // Cria um novo elemento para representar o produto
    let novoProduto = document.createElement('section');
    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${precoTotalDoProduto}</span>`;
  
    // Adiciona o novo produto à listaProdutos
    listaProdutos.appendChild(novoProduto);

    valorTotal = valorTotal + precoTotalDoProduto;

    let textoValorFinal = document.getElementById('valor-total');
    textoValorFinal.innerHTML = valorTotal;

document.getElementById('quantidade').value = 1;


    
    if (botao.classList.contains('botao-limpar')) {
        botao.classList.remove('botao-limpar');
        botao.classList.add('botao-adicionar');
    } 
}}

function limpar() {
    document.getElementById('valor-total').innerHTML = '';
    document.getElementById('lista-produtos').innerHTML = '';
    if (botao.classList.contains('botao-adicionar')) {
        botao.classList.remove('botao-adicionar');
        botao.classList.add('botao-limpar');
    }
    valorTotal = 0; 

}