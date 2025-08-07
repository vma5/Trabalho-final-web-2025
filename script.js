// --- Elementos do DOM ---
const mainMenu = document.getElementById('main-menu');
const registerSection = document.getElementById('register-section');
const loginSection = document.getElementById('login-section');
const userArea = document.getElementById('user-area');

const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');
const backToMainBtns = document.querySelectorAll('#back-to-main, #back-to-main-from-login');

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

const welcomeMessage = document.getElementById('welcome-message');
const userBalanceSpan = document.getElementById('user-balance');
const logoutBtn = document.getElementById('logout-btn');

const menuList = document.getElementById('menu-list');
const cartList = document.getElementById('cart-list');
const cartTotalSpan = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const addBalanceBtn = document.getElementById('add-balance-btn');
const cartEmptyMessage = document.getElementById('cart-empty-message');

// --- Dados (Cardápio e Usuários) ---
const cardapio = [
    { id: 1, item: 'Hambúrguer', preco: 9.00 },
    { id: 2, item: 'Snduiche Natural', preco: 6.00 },
    { id: 3, item: 'Regrigerante', preco: 4.00 },
    { id: 4, item: 'Suco Natural', preco: 3.50 }

];

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
let loggedInUser = null;
let carrinho = [];

// --- Funções de Interface ---
function showSection(section) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('visible'));
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
    section.classList.remove('hidden');
    section.classList.add('visible');
}

function updateUI() {
    if (loggedInUser) {
        welcomeMessage.textContent = `Olá, ${loggedInUser.nome}!`;
        userBalanceSpan.textContent = loggedInUser.saldo.toFixed(2);
        renderCart();
        showSection(userArea);
    } else {
        showSection(mainMenu);
    }
}

function renderMenu() {
    menuList.innerHTML = '';
    cardapio.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="images/${item.item.toLowerCase().replace(' ', '-')}.png" alt="${item.item}">
            <span>${item.item} - R$ ${item.preco.toFixed(2)}</span>
            <button onclick="addToCart(${item.id})">Adicionar</button>
        `;
        menuList.appendChild(li);
    });
}

function renderCart() {
    cartList.innerHTML = '';
    let total = 0;
    
    if (carrinho.length === 0) {
        cartEmptyMessage.style.display = 'block';
        checkoutBtn.style.display = 'none';
    } else {
        cartEmptyMessage.style.display = 'none';
        checkoutBtn.style.display = 'block';
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.quantidade}x ${item.item.item} - R$ ${(item.quantidade * item.item.preco).toFixed(2)}
            `;
            cartList.appendChild(li);
            total += item.quantidade * item.item.preco;
        });
    }

    cartTotalSpan.textContent = total.toFixed(2);
}

// --- Funções de Lógica ---
function handleRegister(e) {
    e.preventDefault();
    const nome = document.getElementById('reg-nome').value;
    const username = document.getElementById('reg-username').value;
    const senha = document.getElementById('reg-senha').value;
    const tipo = document.getElementById('reg-tipo').value;
    
    if (usuarios[username]) {
        alert('Nome de usuário já existe. Tente outro.');
        return;
    }
    
    usuarios[username] = { nome, senha, tipo, saldo: 20.00 };
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário cadastrado com sucesso! Você recebeu R$ 20,00 de saldo.');
    showSection(mainMenu);
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('log-username').value;
    const senha = document.getElementById('log-senha').value;
    
    if (usuarios[username] && usuarios[username].senha === senha) {
        loggedInUser = usuarios[username];
        alert(`Bem-vindo(a), ${loggedInUser.nome}!`);
        carrinho = []; // Limpa o carrinho ao fazer login
        updateUI();
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
}

function handleLogout() {
    loggedInUser = null;
    alert('Você saiu da sua conta.');
    updateUI();
}

function addToCart(itemId) {
    const item = cardapio.find(i => i.id === itemId);
    const itemInCart = carrinho.find(c => c.item.id === itemId);
    
    if (itemInCart) {
        itemInCart.quantidade++;
    } else {
        carrinho.push({ item: item, quantidade: 1 });
    }
    renderCart();
}

function checkout() {
    if (!loggedInUser) return;

    let total = carrinho.reduce((sum, item) => sum + (item.item.preco * item.quantidade), 0);

    if (loggedInUser.saldo >= total) {
        if (confirm(`O total do seu pedido é R$ ${total.toFixed(2)}. Deseja confirmar?`)) {
            loggedInUser.saldo -= total;
            usuarios[loggedInUser.username] = loggedInUser;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            carrinho = [];
            alert('Pedido finalizado com sucesso!');
            updateUI();
        }
    } else {
        alert('Saldo insuficiente. Adicione mais saldo para finalizar o pedido.');
    }
}

function addBalance() {
    const valor = prompt("Digite o valor que deseja adicionar:");
    const valorFloat = parseFloat(valor);

    if (valorFloat && valorFloat > 0) {
        loggedInUser.saldo += valorFloat;
        usuarios[loggedInUser.username] = loggedInUser;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert(`R$ ${valorFloat.toFixed(2)} adicionado com sucesso!`);
        updateUI();
    } else {
        alert('Valor inválido.');
    }
}

// --- Event Listeners ---
showRegisterBtn.addEventListener('click', () => showSection(registerSection));
showLoginBtn.addEventListener('click', () => showSection(loginSection));
backToMainBtns.forEach(btn => btn.addEventListener('click', () => showSection(mainMenu)));

registerForm.addEventListener('submit', handleRegister);
loginForm.addEventListener('submit', handleLogin);
logoutBtn.addEventListener('click', handleLogout);
checkoutBtn.addEventListener('click', checkout);
addBalanceBtn.addEventListener('click', addBalance);

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    updateUI();
});