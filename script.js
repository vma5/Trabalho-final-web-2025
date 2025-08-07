// Simulação de produtos
const produtos = [
    { id: 1, nome: "Hamburguer", preco: 15.00, imagem: "./images/hamburguer.jpg" },
    { id: 2, nome: "Pizza de Calabresa", preco: 25.00, imagem: "./images/pizza.jpg" },
    { id: 3, nome: "Salada Caesar", preco: 20.00, imagem: "./images/salada.jpg" },
];

let carrinho = [];

// Elementos do DOM
const produtosGrid = document.querySelector('.produtos-grid');
const carrinhoModal = document.querySelector('.carrinho-modal');
const carrinhoIcone = document.querySelector('.carrinho-icone');
const fecharCarrinhoBtn = document.querySelector('.fechar-carrinho');
const finalizarPedidoBtn = document.querySelector('.finalizar-pedido');
const listaCarrinho = document.querySelector('.lista-carrinho');
const totalCarrinhoElement = document.querySelector('.total-carrinho');
const quantidadeCarrinhoElement = document.querySelector('.quantidade-carrinho');

// Função para renderizar os produtos na tela
function renderizarProdutos() {
    produtos.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.classList.add('produto-card');
        produtoCard.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button class="adicionar-carrinho" data-id="${produto.id}">Adicionar ao Carrinho</button>
        `;
        produtosGrid.appendChild(produtoCard);
    });
}

// Função para abrir o modal do carrinho
function abrirCarrinho() {
    carrinhoModal.style.display = 'flex';
    renderizarCarrinho();
}

// Função para fechar o modal do carrinho
function fecharCarrinho() {
    carrinhoModal.style.display = 'none';
}

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id == id);
    if (produto) {
        carrinho.push(produto);
        atualizarCarrinhoIcone();
        console.log("Item adicionado!", carrinho);
    }
}

// Função para renderizar os itens no carrinho
function renderizarCarrinho() {
    listaCarrinho.innerHTML = '';
    let total = 0;
    carrinho.forEach(item => {
        const itemCarrinho = document.createElement('li');
        itemCarrinho.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(itemCarrinho);
        total += item.preco;
    });
    totalCarrinhoElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para atualizar o número de itens no ícone do carrinho
function atualizarCarrinhoIcone() {
    quantidadeCarrinhoElement.textContent = carrinho.length;
}

// Event Listeners
produtosGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('adicionar-carrinho')) {
        const id = e.target.dataset.id;
        adicionarAoCarrinho(id);
    }
});

carrinhoIcone.addEventListener('click', abrirCarrinho);
fecharCarrinhoBtn.addEventListener('click', fecharCarrinho);

// Inicializa a página
renderizarProdutos();