

<div align="center">
 <img src="https://img.shields.io/badge/status-em%20desenvolvimento-green" alt="Status">
</div>

<div align="center">
 <br \>
 <br \>
 <br \>
 <img alt="logo" src="frontend/public/logo.svg" width="80"></img>
 <h3><strong>Encurtador URL</strong></h3>
 <p>API pra encurtar URL de forma customizada</p>
</div>

---

## Sobre o Projeto

**Encurtador URL** é uma aplicação criada pra encurtar links de forma dinamica e customizada. 
Você pode acessar uma demonstração do site **NÃO FUNCIONAL** <a href="https://encurtador-url-hjen-n18q2z7m6-whoisleoos-projects.vercel.app">aqui</a>


---

## Ferramentas utilizadas

<div align="center">
 
### ▼ Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### ▼ Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

### ▼ Database
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

</div>

---

## Instalação e Execução

### ➤ Instalação padrão

```bash
# Clone o repositório
git clone https://github.com/whoisleoo/encurtador_url

# Entre no diretório frontend
cd frontend

# Instale as dependências
npm install

# Entre no diretório backend
cd backend

# Instale as dependências
npm install

# Configure o banco de dados no diretorio backend
npx prisma generate
npx prisma migrate dev

# Configure o .env
DATABASE_URL="file:./src/database/dev.db"
PORT="6969"

# Inicie o frontend na pasta frontend
npm run dev

# Inicie o backend na pasta backend
npm start

# Para executar o painel do banco de dados
npx prisma studio
````

---

## Pré-visualização do aplicativo

### Exemplos:
<div align="center">
<img src="Captura de tela 2025-09-09 165537.png" alt="imagem de exemplo"></img>
</div>


