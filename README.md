
# Sistema de Turnos - Templo Lisboa

Este é um sistema simples para gestão de turnos de voluntários no Templo Lisboa, com funcionalidades para login, confirmação de presença, cadastro de novos usuários e painel administrativo.

## 🔧 Tecnologias utilizadas

- React.js
- Firebase Auth
- Firestore (Firebase)
- React Router DOM

## 📦 Como rodar localmente

1. Clone ou descompacte este repositório.
2. Instale as dependências:
   ```
   npm install
   ```
3. Crie um projeto no Firebase:
   - Ative **Authentication (Email/Senha)**
   - Ative **Firestore Database**
4. Substitua a configuração Firebase no arquivo `src/services/firebase.js`.
5. Inicie a aplicação:
   ```
   npm start
   ```

## 🚀 Como publicar no Vercel

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte ao seu repositório GitHub
3. Escolha framework **React**
4. Use `npm run build` como script de build
5. Defina o diretório de saída como `build`

A cada novo `git push`, o Vercel atualizará automaticamente a aplicação online.

---

## 👤 Perfis

- **Voluntário**: Confirma presença e vê a agenda
- **Administrador**: Cria usuários, promove voluntários e visualiza painel

---

## 📂 Estrutura

- `src/pages`: Telas do sistema
- `src/services`: Firebase e autenticação
- `public`: HTML base
- `package.json`: Dependências do projeto

---

Para dúvidas ou melhorias, entre em contato com o mantenedor.

