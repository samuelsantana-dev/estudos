<h1 align="center">
    <a href="#" alt="site do ecoleta"> API CV - Módulo de Autenticação </a>
</h1>

<h3 align="center">
    Módulo responsável pelas funções de autenticação do projeto Circuito da Visão
</h3>

<p align="center">

  <a href="https://pipetech.com.br">
    <img alt="Feito pela Pipetech" src="https://img.shields.io/badge/feito%20por-Pipetech-%237519C1">
  </a>

</p>

## ⚙️ Ambientes

- [DEV](https://api-cv-authentication.herokuapp.com/)
- PROD

## ⚙️ Endpoints

- [x] Login
- [x] Refresh Token
- [x] User Info
- [x] Send 2FA Code
- [x] Validate 2FA Code

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Certifique-se também de que seu IP está liberado para acesso ao banco de dados.

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://gitlab.com/pipetechteam/cv/api-cv-authentication.git -b develop

# Acesse a pasta do projeto no terminal/cmd
$ cd api-cv-authentication

# Crie um arquivo .env e configure com as credenciais conforme arquivo .env.example
$ touch .env

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:8000 - acesse http://localhost:8000 

```
<p align="center">
  <a href="https://github.com/tgmarinho/README-ecoleta/blob/master/Insomnia_API_Ecoletajson.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

#### 🐳 Rodando Backend com Docker
Primeiro baixe o docker e o docker-compose na sua maquina utilizando os links abaixo:


-   **[Docker](https://www.docker.com/get-started/)**
-   **[Docker-compose](https://docs.docker.com/compose/install/)**

> Se você utiliza o windows lembre-se de instalar o wsl2.

Para rodar, primeiro confira se seu NOD_ENV está apontando para o ambiente local. Depois faça os seguintes passos no terminal:
```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd api-cv-authentication

# Baixe a imagem docker
$ docker-compose build

# Suba seu container
$ docker-compose up


```
---

#### Gerar documentação (tsoa)
```
$ tsoa spec-and-routes
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**

> Veja o arquivo  [package.json](https://gitlab.com/pipetechteam/cv/api-cv-authentication/-/blob/master/package.json)

---


## 📝 Feito

Feito com ❤️ por Pipetech Dev Team 👋🏽 [Entre em contato!](https://pipetech.com.br)
