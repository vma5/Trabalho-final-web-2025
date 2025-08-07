# Trabalho-final-web-2025

## VIctor Martins Almeida

## Sistema de Pedidos - Para Instituições
Sistema de pedidos de lanchonete desenvolvido para uso em instituições (escolas, universidades) O
objetivo é oferecer uma plataforma simples e intuitiva para que alunos e professores possam
visualizar o cardápio, fazer pedidos e gerenciar seu saldo diretamente pelo navegador.

O projeto foi construído usando tecnologias front-end padrão: HTML, CSS e JavaScript, com todos os
dados salvos localmente no navegador do usuário.


## Funcionalidades
Cadastro de Usuário: Novos usuários podem se registrar como "aluno" ou "professor" e recebem um
saldo inicial.

Login e Logout: Acesso seguro à plataforma através de nome de usuário e senha.

Cardápio Interativo: Exibe os itens disponíveis, preços e permite que o usuário adicione produtos
ao carrinho.

Carrinho de Compras: Um carrinho dinâmico que calcula o valor total do pedido.

Gerenciamento de Saldo: Os usuários podem visualizar seu saldo atual e adicionar mais fundos à sua
conta.

Finalização de Pedido: Permite concluir a compra, desde que o saldo seja suficiente, e debita o
valor total.

## Tecnologias Utilizadas
O projeto foi construído usando as seguintes tecnologias front-end:

HTML5: Para a estrutura e marcação da página.

CSS3: Para a estilização e o design responsivo da interface.

JavaScript: Para a lógica do sistema, como a manipulação do carrinho, atualização dos valores e
interações com o usuário.

## Estrutura do Projeto
O projeto é composto por três arquivos principais:

index.html: Contém a estrutura da página web.

style.css: Responsável pela estilização de todos os elementos da página.

script.js: Gerencia toda a lógica do sistema de pedidos, desde a renderização dos produtos até o
cálculo do total do carrinho.

## Como Usar
Clone este repositório para o seu computador.

git clone https://github.com/vma5/Trabalho-final-web-205.git 
Navegue até a pasta do projeto.

Abra o arquivo index.html em seu navegador.

## Futuras Melhorias
Backend e Banco de Dados Real: Mudar o armazenamento de LocalStorage para um backend real (como
Node.js, Python/Django ou PHP) com um banco de dados (MySQL, PostgreSQL, MongoDB). Isso tornaria os
dados persistentes, permitindo que os pedidos e saldos fossem acessados de qualquer dispositivo.

Sistema de Notificações: Adicionar notificações em tempo real para os usuários, informando sobre o
status do pedido (ex: "Pedido recebido", "Pedido pronto para retirada").

Funcionalidades de Administrador: Criar uma área de login para o administrador da lanchonete, onde
ele poderia:

Gerenciar o cardápio (adicionar, remover ou editar itens e preços).

Visualizar todos os pedidos em andamento.

Gerenciar o saldo de todos os usuários.

Pagamento Online: Integrar uma API de pagamento (ex: PayPal, Stripe) para que os usuários possam
adicionar saldo ou pagar os pedidos diretamente com cartão de crédito.

Histórico de Pedidos: Salvar o histórico de pedidos de cada usuário para que eles possam
consultá-lo a qualquer momento.

Interface Mais Completa: Melhorar a interface do usuário com um sistema de avaliação de produtos,
um filtro de busca no cardápio e a exibição de imagens para cada item.

