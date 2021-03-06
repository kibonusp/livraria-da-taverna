# Livraria da Taverna

- [Livraria da Taverna](#livraria-da-taverna)
  - [Sobre](#sobre)
  - [Requisitos](#requisitos)
  - [Descrição](#descrição)
  - [Comentários Sobre o Código](#comentários-sobre-o-código)
  - [Plano de Teste](#plano-de-teste)
  - [Resultados do Teste](#resultados-do-teste)
  - [Procedimentos de Build](#procedimentos-de-build)
  - [Problemas](#problemas)
  - [Comentários](#comentários)
  - [Autores](#autores)

## Sobre

Esse projeto visa por em prática os conhecimentos obtidos na disciplina _**SCC0219** - Introduction to  Web Development_.
Desenvolvemos um site para a livraria fictícia, _Livraria da Taverna_, com as tecnologias Node, React, Typescript e MongoDB.

## Requisitos

O site consiste de dois tipos de usuários:  **administradores** e **consumidores**.

Os **administradores**, constítuidos de _id_, _phone_, _adress_, _photo_, _name_, _email_, _username_, _password_ e _isAdmin_, devem:
* Registrar e administrar administradores, consumidores e produtos do sistema;
* Usuário e senha padrão são _admin_ e _admin_, respectivamente.

Os **consumidores**, constituídos de _id_, _phone_, _photo_, _address_, _name_, _email_, _username_, _password_ e _isAdmin_, devem:
* Comprar produtos.

Os **produtos (livros)** são constituídos de _id_, _name_, _photo_, _genres_, _authors_, _description_, _price_, _quantity stock_ e _quantity sold_. 

As funcionalidades visadas pelo nosso site são:

* Login com email e senha na plataforma, com opção de criar uma nova conta.
* Visualização das informações do cliente, com opção de alterar cadastro.
* Visualização da página de administrador, com opção de administrar os produto, os usuários e os administradores da loja.
* Acesso à homepage, com visualização de alguns produtos selecionados pela loja.
* Visualização de um produto, com seu nome, descrição, preço e botão para adicionar ao carrinho.
* Acesso ao carrinho de compras, com opção de mudar a quantidade de itens, conferir o preço total e finalizar a compra.
* Opção de inserir informações do cartão de crédito para efetuar o pagamento.
* Opção de alterar o endereço de entrega.
* Venda de Produtos: produtos são selecionados, a quantidade é escolhida e são incluídos no carrinho de compras. Uma venda pode ser efetuada através de um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade do produto deve ser subtraída do estoque e adicionada à quantidade vendida;
* Filtro: filtros podem ser aplicados aos produtos pelos clientes. Os filtros possíveis são por _name_, _authors_, _genres_, _price_, _quantity stock_ e _quantity sold_. Por exemplo, um cliente pode definir um filtro que mostra apenas os livros cujo gênero é Ficção Científica;

O sistema é acessível e provê boa usabilidade e responsividade.

## Descrição

![Diagrama de Navegação](images/Diagrama%20de%20Navegação.png)

O link para o protótipo está [neste link](https://www.figma.com/file/gBnYF7NX9Z9Z8ve0BSOT7w/Livraria?node-id=0%3A1) no Figma.

## Comentários Sobre o Código
Todas as páginas e componentes (React Components) tem um arquivo JavaScript e importam styled components para personalização ao invés de um css. O código do Milestone2 está todo no diretório front, dividido entre components para elementos que serão utilizados múltiplas vezes (como a navbar e o footer), admin para páginas do administrador, user para páginas acessadas pelos usuários, e styles com os styled components usados nas páginas.

## Plano de Teste
No decorrer do projeto, decidimos, de acordo com as simulações sugeridas por esta entrega (Milestone 2) testar algumas funcionalidades para garantir uma boa experiência para o usuário, sendo estas:

- Cadastro de conta;
- Login;
- Operações no carrinho, como adição e remoção de itens;
- Compra;
- Logout;
- Busca de livros;
- Filtros por genêros, preço e disponibilidade;
- Operações de Administrador, como criação, edição e deleção de produto, remoção de usuários e adição ou remoção de administradores;

Para testar as funcionalidades basta seguir o modelo do figma de funcionalidades feito no projeto do Milestone 1.

## Resultados do Teste
Os testes indicaram um bom funcionamento em todos os casos, o que indica que nossa loja está no caminho certo para ser integrada ao lado do servidor.

## Procedimentos de Build
Para a Segunda Entrega, caso queira rodar o programa, basta iniciar o projeto React dentro da pasta ``front``. Após realizar o setup do framework, utilize os comandos ``npm install`` e ``npm start`` para executar a aplicação.

## Problemas

## Comentários

## Autores

| NUSP     | Nome                       |
|----------|----------------------------|
| 11819084 |	Gabriel Freitas Ximenes de Vasconcelos      |
| 11796336	| Raissa Torres Barreira |
| 11795530	| Rodrigo Lopes Assaf  |
