# 👨‍🏫Instruções

**Para rodar o exemplo de teste em jest deve-se descomentar a variável "MODE" do .env e rodar  ```yarn test```<br>

### 👨‍💻Clonar projeto

-Clone o projeto na sua máquina; <br>
-Com o projeto clonado, realize a instalação das dependências de preferência com o ```yarn```<br>

### ⚙Configurando 

-Caso deseje executar a API da mesma forma, será necessário a instalação do MongoDB<br>
-Configure as variáveis de ambiente caso queira alterar as portas da aplicação.<br>
-Se deseja utilizar a porta padrão do MongoDB e a porta 3331 do servidor node, não precisa fazer nada :)<br>


### 🗃Rodando API

-Com tudo configurado basta executar o servidor normalmente, caso queira, verifique o ```package.json``` para utilizar os scripts de execução;<br>

### 💻🖱Testando rotas
-Para executar o servidor rode ```yarn server:dev```
-Após a execução do servidor, execute uma requisição do tipo POST como teste na rota ```http://localhost:3331/api-cars``` utilizando o Insomnia ou outro de sua preferência, enviando os seguintes dados em JSON:<br>

####Criação do Carro

```JSON

{	
	"brand": "Ford",
	"model": "Palio",
	"version": "2.0",
	"year": 2021,
	"traveled_kilometer": 4000,
	"gearshift": "manual",
	"sale_price": 30000
} 

```

-Se tudo estiver ok você receberá um status200 com o retorno da criação do carro.<br>

####Listagem de Carros
-Nesta rota você deve enviar a requisição do tipo GET para a rota: ```http://localhost:3331/api-cars```, feito isso você obterá todos os carros registrados.<br>

#### Listagem por ID
-Aqui você poderá listar um carro específico através do seu ID, basta consultar o ID que você recebeu na criação do carro e colocá-lo  como um parâmetro de rota, por exemplo: ```http://localhost:3331/api-cars/<Aqui você põe o ID>``` e terá algo retornado como:<br>

```JSON

{
  "car": {
    "created_at": "2021-08-05T13:46:29.980Z",
    "_id": "610bec663ff81a4ab4d4aa93",
    "brand": "Hilux",
    "model": "Palio",
    "version": "2.0",
    "year": 2021,
    "traveled_kilometer": 40000,
    "gearshift": "manual",
    "sale_price": 20000,
    "__v": 0
  }
}

```


#### Atualização do carro
-Você deverá passar o ID como parâmetro dentro da rota PUT, ```http://localhost:3331/api-cars/<Aqui você põe o ID>``` e o corpo da requisição deverá ter os dados para a alteração da seguinte forma:<br>

```JSON

{
	"brand": "BMW",
	"model": "X2",
	"version": "2.0",
	"year": 2021,
	"traveled_kilometer": 12,
	"gearshift": "manual",
	"sale_price": 250000
}

```
-Irá retornar os dados do carro alterado.<br>


#### Deleção do carro
-Aqui basta passar o ID no parâmetro da rota de tipo DELETE para remover o carro desejado, exemplo: ```http://localhost:3331/api-cars/<Aqui você põe o ID>```
-Pronto, carro deletado :)

#### Filtro de carro
-Você poderá filtrar os carros pelos atributos, e nos campos de preço e ano, você determina o valor máximo para o carro requerido, basta passar através dos parâmetro de query na rota: ```http://localhost:3331/search```.<br>
-Abaixo um exemplo de consulta para carros com valor máximo de 30 mil reais: 

```JSON

[
  {
    "created_at": "2021-08-05T13:46:29.980Z",
    "_id": "610bec663ff81a4ab4d4aa93",
    "brand": "Hilux",
    "model": "Palio",
    "version": "2.0",
    "year": 2021,
    "traveled_kilometer": 40000,
    "gearshift": "manual",
    "sale_price": 20000,
    "__v": 0
  },
  {
    "created_at": "2021-08-05T14:46:37.654Z",
    "_id": "610bf9d2b7af0e3f3ca2281b",
    "brand": "Hilux",
    "model": "Palio",
    "version": "2.0",
    "year": 2021,
    "traveled_kilometer": 40000,
    "gearshift": "manual",
    "sale_price": 20000,
    "__v": 0
  }
]

```


### 🔗Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:<br>

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [ESLint](https://eslint.org/)

