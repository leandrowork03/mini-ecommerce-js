
/*carrinho.js*/
function carregarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('itens-carrinho');
  const totalSpan = document.getElementById('total-carrinho');

  container.innerHTML = '';
  if (carrinho.length === 0) {
    container.innerHTML = '<p>Seu carrinho está vazio.</p>';
    totalSpan.textContent = '0,00';
    return;
  }

  let total = 0;
  carrinho.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('item-carrinho');
    div.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" width="80">
      <div>
        <h3>${item.nome}</h3>
        <p>Preço: R$ ${item.preco.toFixed(2)}</p>
        <button onclick="removerDoCarrinho(${index})">Remover</button>
      </div>
    `;
    container.appendChild(div);
    total += item.preco;
  });

  totalSpan.textContent = total.toFixed(2);
}

function removerDoCarrinho(index) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

final.addEventListener('click', () => {
  const totalAtual = document.getElementById('total-carrinho').textContent;
  alert(`Compra finalizada no valor de R$ ${totalAtual}`);
});

window.addEventListener('DOMContentLoaded', carregarCarrinho);

