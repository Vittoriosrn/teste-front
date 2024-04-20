# Repositório Angular com Formulário e LocalStorage

## Descrição

Este projeto Angular demonstra a criação de um formulário para coleta de dados de usuário e endereço, utilizando máscaras de entrada e armazenamento no LocalStorage.

## Tecnologias Utilizadas

* Angular
* Angular Forms
* ngx-mask

## Funcionalidades

* Formulário com campos para nome, email, CPF, logradouro, N° da residencia, bairro, cidade, CEP, telefone, data de nascimento.
* Máscaras de entrada personalizadas para cada campo.
* Validação de dados básicos.
* Armazenamento dos dados preenchidos no LocalStorage.
* Exibição dos dados armazenados em outra rota.

## Como Executar

1. Clone o repositório para o seu computador.
2. Instale as dependências: `npm install`.
3. Execute a aplicação: `ng serve`.

## Uso do Formulário

1. Acesse a rota `http://localhost:4200`.
2. Preencha os campos do formulário com seus dados.
3. Clique no botão "Concluir".
4. Acesse a rota `http://localhost:4200/user` para visualizar os dados armazenados.

## Observações

* As máscaras de entrada foram configuradas para os padrões brasileiros.
* A validação de dados é básica e pode ser expandida de acordo com suas necessidades.

## Licença

Este projeto está licenciado sob a licença MIT.
