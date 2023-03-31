# Controle de estoque

A aplicação faz um CRUD de produtos.

#### Funcionalidades da aplicação:

- Listagem de produtos;
- Criação de novos produtos;
- Edição de produtos;
- Remoção de produtos;
  

**Objetivo**: Desafio Técnico Sponte

## Como foi feito? 
> A aplicação foi desenvolvida utilizando ReactJS e as seguintes tecnologias `vite`, `typescript`, `styled-components`, `formik`, `yup`, `axios`, `useEffect`, `useState`, `useNavigate`, `json-server`, `cypress`.
> 
> Para iniciar o projeto, criei as seguintes rotas:
> `/` = Onde é exibida a página inicial do projeto;
> `/default/products` = Onde é exibida a listagem dos produtos;
> `/default/add` = Onde é possível criar um novo produto;
> `/default/edit` = Onde é possível editar o produto;

>## Listagem de produtos
> Utilizando o `json-server` para criar a fake API, criei o arquivo `/api/index.ts` que faz a conexão com o arquivo `db.json`,
> configurei a seguinte url `http://localhost:5000` para a integração, utilizando `axios`. 
> 
> Para listar os produtos, utilizei o método `GET` dentro do hook `useEffect` 
e para exibir as informações na tela e iterei através de um `.map()`
  
>## Cadastro de produtos
> Para criar um novo produto, utilizei a biblioteca `formik` para criar o formulário e o `yup` para fazer a validação dos campos.
> Após o cadastro o usuário é enviado para a listagem de produtos através do `useNavigate`.

>## Editar produto
> Para editar o produto, configurei uma rota para receber por parâmetro o `id` do produto selecionado. Ao clicar em editar o formulário recebe o `id` e faz uma busca na API para retornar todos os dados do produto selecionado.

>## Testes da aplicação
> Para realizar os testes utilizei o `cypress` fazendo validações e testando a listagem, cadastro, edição e remoção dos prosutos de toda a aplicação.

## 🚀 Instalação e execução

1. Abra o seu terminal.

2. Selecione o local onde deseja ter o código no seu computador.

3. Faça um clone do repositório:

  `git clone https://github.com/FelipeFerreira23/desafio-sponte`;

4. Entre na pasta pelo terminal: `cd desafio-sponte`;

5. Rode `npm install` para instalar as dependências do projeto;

6. Para simular uma API REST, rode:
  
  `npm run server`

7. Abra uma nova aba e rode `npm run dev` para iniciar a aplicação.

---

Felipe Ferreira