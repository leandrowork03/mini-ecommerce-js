
/*datalhesproduto.js*/
const produtoId = localStorage.getItem('produtoSelecionado');
const produto = produtos.find(p => p.id == produtoId);

if (produto) {
  document.getElementById('produto-imagem').src = produto.imagem;
  document.getElementById('produto-nome').textContent = produto.nome;
  document.getElementById('produto-preco').textContent = `R$ ${produto.preco.toFixed(2)}`;
  document.getElementById('produto-descricao').textContent = produto.descricao;

  document.getElementById('adicionar-carrinho').addEventListener('click', () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
  });
}

