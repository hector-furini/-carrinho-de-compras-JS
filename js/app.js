
//Guardar dados do HTML em uma variável
let valorTotal = document.getElementById('valor-total');
valorTotal.innerHTML = 'R$0';
let quantidadeDeItems = document.getElementById('quantidade');
let carrinhoDeProdutos = document.getElementById('lista-produtos');
carrinhoDeProdutos.innerHTML = '';

function adicionar() {
    //Recuperar nome do produto, quantidade e valor
    let quantidadeDeItems = parseInt(document.getElementById('quantidade').value);
    let produtoEscolhido = document.getElementById('produto').value;

    let continuarAdicao = validarDados(quantidadeDeItems);
    if (continuarAdicao == false){
        alert('Por favor, preencha a quantidade');
        return
    }

    let nomeProduto = produtoEscolhido.split('-')[0]; //Forma um array pelo divisor '-'e pega a posição 0
    let valorDoProduto = produtoEscolhido.split('R$')[1];

    //Calcular o subtotal por produto (qnt x valor)
    let subTotal = valorDoProduto * quantidadeDeItems;

    //Adicionar no carrinho o produto e seu subtotal
    let HTMLProduto = 
    `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeDeItems}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
    </section>`;
    carrinhoDeProdutos.innerHTML = carrinhoDeProdutos.innerHTML + HTMLProduto;

    //Atualizar o total
    valorTotal.innerHTML = valorTotal.innerHTML.replace(/\D/g,''); //Remove digitos não numericos do texto
    valorTotal.innerHTML = `R$${parseInt(valorTotal.innerHTML) + subTotal}`; //Calcula o total e concatena R$ novamente


}

function limpar() {
    quantidadeDeItems.value = '';
    carrinhoDeProdutos.innerHTML = '';
    valorTotal.innerHTML = 'R$0';

}

function validarDados(quantidade) {
    if (isNaN(quantidade)) {
        return false;
    } else {
        quantidadeDeItems.value = '';
        return true;
    }
}
