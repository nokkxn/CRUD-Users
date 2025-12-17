# CRUD Users

## 📌 Visão Geral

Imagine um caderno onde você consegue **criar, listar, editar e apagar informações** sem bagunça. Esse projeto é exatamente isso no mundo digital.

O **CRUD Users** é uma aplicação full stack desenvolvida para demonstrar fundamentos essenciais de desenvolvimento web, integração entre frontend e backend, organização de projeto e boas práticas com Git.

Este repositório foi pensado para que **qualquer pessoa consiga clonar e rodar o projeto localmente** sem precisar falar com o autor.

---

## 🧠 O que este projeto demonstra

* Conceitos de **CRUD** (Create, Read, Update, Delete)
* Separação clara entre **frontend** e **backend**
* Uso correto de **variáveis de ambiente** (`.env`)
* Boas práticas de versionamento com Git
* Estrutura de projeto próxima da realidade profissional

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Node.js
* JavaScript
* Gerenciador de pacotes: npm

### Frontend

* React
* JavaScript
* HTML5 / CSS3

---

## 📂 Estrutura do Projeto

```
CRUD-Users/
├── backend/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Como rodar o projeto localmente

> 🗄️ **Sobre o banco de dados**
>
> Este projeto utiliza um **banco de dados simples para fins de estudo**.
>
> * Não é necessário instalar MySQL, PostgreSQL ou serviços externos.
> * Os dados são simulados localmente (ex: arquivo JSON ou estrutura em memória).
>
> Isso foi uma decisão consciente para facilitar testes e permitir que qualquer pessoa consiga rodar o projeto rapidamente.

### Pré-requisitos

* Node.js instalado
* npm instalado

---

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/nokkxn/CRUD-Users.git
cd CRUD-Users
```

---

### 🔹 2. Configurar o Backend

```bash
cd backend
npm install
```

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

Preencha as variáveis de ambiente conforme necessário.

Para iniciar o backend:

```bash
npm run dev
```

---

### 🔹 3. Configurar o Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔐 Variáveis de Ambiente

Este projeto **não versiona arquivos sensíveis**.

O arquivo `.env.example` serve apenas como modelo. Nunca suba seu `.env` real para o GitHub.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em **aprendizado prático** e **portfólio**, demonstrando capacidade de:

* Construir aplicações web funcionais
* Organizar código de forma profissional
* Seguir boas práticas exigidas em vagas júnior e estágio

---

## 👤 Autor

Desenvolvido por **Vinicius Lourenço**

---

## 📌 Observação

Sugestões de melhoria são bem-vindas. Este projeto está em evolução contínua.
