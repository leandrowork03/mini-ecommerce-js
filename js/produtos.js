/*produtos.js*/
const produtos = [
  {
    id: 1,
    nome: "Bandana Naruto",
    preco: 49.90,
    produto: "acessorios",
    imagem: "./assets/img/bandanaruto.webp",
    descricao: 'Bandana da aldeia da folha fiel ao anime e estilosa "DATEBAYO - TO CERTO!".'
  },
  {
    id: 2,
    nome: "Esferas do Dragão",
    preco: 249.99,
    produto: "acessorios",
    imagem: "./assets/img/esferas.webp",
    descricao: 'Lindo enfeite para sua sala "SAIA DAI SHENGLONG! E REALIZE O MEU DESEJO!".'
  },
  {
    id: 3,
    nome: "chapéu de palha",
    preco: 49.90,
    produto: "acessorios",
    imagem: "./assets/img/chapeu.webp",
    descricao: 'Chapéu com um acabamento impecável "GOMMO GOMMO NOOOOOOOOOOOO PISTOL!".'
  },
  {
    id: 4,
    nome: "Saga de gêmeos",
    preco: 549.99,
    produto: "acessorios",
    imagem: "./assets/img/saga.webp",
    descricao: 'Action figure impecável "MORRA SEYAAAA! IIIIHHEHEHEHAHAHAHAHA!".'
  },
  {
    id: 5,
    nome: "Cartas yugioh",
    preco: 24.99,
    produto: "acessorios",
    imagem: "./assets/img/yugi.jpg",
    descricao: 'deck completo incluindo exodia, dragão branco de olhos azuis etc... "É HORA DO DUÉLO!".'
  },
  {
    id: 6,
    nome: "Camisa bleach Ichigo Kurosaki",
    preco: 79.99,
    produto: "vestuario",
    imagem: "./assets/img/bleach.jpg",
    descricao: 'Linda camisa de ichigo de kurosaki de Bleach "BANKAI".'
  },
  {
    id: 7,
    nome: "caderno Death Note",
    preco: 24.99,
    produto: "acessorios",
    imagem: "./assets/img/caderno.webp",
    descricao: 'Caderno do death note! "EU SEREI O DEUS DO NOVO MUNDO".'
  },
  {
    id: 8,
    nome: "camisa de Attack on titan",
    preco: 79.99,
    produto: "vestuario",
    imagem: "./assets/img/attack.jpg",
    descricao: 'camisa da tropa de exploração de Attack on titan  "SASAGEYO SASAGEYO".'
  },
  {
    id: 9,
    nome: "Moletom de capus full metal",
    preco: 249.99,
    produto: "vestuario",
    imagem: "./assets/img/full.jpg",
    descricao: 'Esse moletom é lindo de mais! " VAMOS FAZER UMA TROCA EQUIVALENTE".'
  },
  {
    id: 10,
    nome: "Caneca Hunter x Hunter",
    preco: 29.99,
    produto: "acessorios",
    imagem: "./assets/img/gon.webp",
    descricao: 'Linda caneca temática hunter x hunter "PEDRA PAPEL E TESOURA!".'
  },
  {
    id: 11,
    nome: "camisa boku no hero",
    preco: 69.99,
    produto: "vestuario",
    imagem: "./assets/img/7.webp",
    descricao: 'Linda camisa estilizada perfeitamente "PORQUE EU CHEGUEI!".'
  },
  {
    id: 12,
    nome: "camisa vegeta",
    preco: 89.99,
    produto: "vestuario",
    imagem: "./assets/img/vegeta.jpg",
    descricao: 'Linda camisa do príncipe dos saiyajins "SEU VERME MALDITO!".'
  },
  {
    id: 13,
    nome: "action figure heiei yuyu hakusho",
    preco: 149.99,
    produto: "acessorios",
    imagem: "./assets/img/hiei.webp",
    descricao: 'Linda action figure do hiei "CHAMAS NEGRAS MORTAIS!".'
  },
  {
    id: 14,
    nome: "Action figure Sailor moon",
    preco: 99.99,
    produto: "acessorios",
    imagem: "./assets/img/lua.jpg",
    descricao: 'Linda action da Usagi Tsukino "SOU UMA GUERREIRA QUE LUTA PELO AMOR E PELA JUSTIÇA! SOU SAILOR MOON! E VOU PUNIR VOCÊ EM NOME DA LUA!!".'
  },
  {
    id: 15,
    nome: "camisa trigun vash",
    preco: 69.99,
    produto: "acessorios",
    imagem: "./assets/img/vash.jpg",
    descricao: 'Linda camisa de trigun "VASH O ESTOURO DA BOIADA!".'
  },
];

function procura() {
  const busca = document.getElementById('busca').value.toLowerCase();
  const produtoSel = document.getElementById('produtosSel').value;

  const filtrados = produtos.filter(pro => {
    const search = pro.nome.toLowerCase().includes(busca);
    const proSel = produtoSel ? pro.produto.includes(produtoSel) : true;
    return search && proSel;
  });

  carregarProdutos(filtrados);
}
function adicionarAoCarrinho(id) {
  const produtoSelecionado = produtos.find(p => p.id === id);
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produtoSelecionado);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${produtoSelecionado.nome} adicionado ao carrinho!`);
}

function carregarProdutos(lista) {
  const container = document.getElementById('lista-produtos');
  container.innerHTML = ''; // Limpa antes de renderizar novamente

  if (lista.length === 0) {
    container.innerHTML = `<p>Nenhum item encontrado!</p>`;
    return;
  }

  lista.forEach(produto => {
    const card = document.createElement('div');
    card.classList.add('produto');
    card.innerHTML = `
  <img src="${produto.imagem}" alt="${produto.nome}">
  <h3>${produto.nome}</h3>
  <p>R$ ${produto.preco.toFixed(2)}</p>
  <p>${produto.produto}</p>
  <button onclick="verDetalhes(${produto.id})">Ver Detalhes</button>
  <button id="adicionar-carrinho" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
`;

    container.appendChild(card);
  });
}

function verDetalhes(id) {
  localStorage.setItem('produtoSelecionado', id);
  window.location.href = 'produto.html';
}

carregarProdutos(produtos);


