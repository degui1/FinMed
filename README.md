# FINMEd - Sistema de Simulação e Gerenciamento de Financiamentos Estudantis

## 🚀 Funcionalidades Principais

Principais funcionalidades do **FINMEd**:

* **Cadastro de Estudantes**: Criação de uma conta com dados pessoais e informações de login.
* **Autenticação via JWT**: Processo de login seguro que gera um token para garantir o acesso a funcionalidades protegidas.
* **Simulações de Financiamento**: Os estudantes podem simular financiamentos com diferentes parâmetros e obter o valor das parcelas mensais com base nos dados fornecidos.
* **Gerenciamento de Dados**: Alteração de informações pessoais e das simulações de forma simples e segura.

## 📋 Variáveis de Ambiente

### Node

* **PORT**: Porta onde o servidor irá rodar (padrão `3333`).
* **NODE\_ENV**: Ambiente de execução (padrão `development`).

### Prisma ORM

* **DATABASE\_URL**: URL de conexão com o banco de dados, usando o **PostgreSQL**. Exemplo:

  ```env
  DATABASE_URL="postgresql://youruser:somepassword@localhost:5432/yourdb?schema=public"
  ```

### JSON Web Token (JWT)

* **JWT\_PRIVATE\_KEY**: Chave privada em formato PEM codificada em Base64, utilizada para assinar os tokens JWT.
* **JWT\_PUBLIC\_KEY**: Chave pública em formato PEM codificada em Base64, utilizada para verificar a assinatura dos tokens JWT.

> **Nota**: As chaves privada e pública devem ser geradas com o OpenSSL ou ferramenta similar, utilizando 2048 bits.

## Docker

Este projeto utiliza o **docker-compose** para rodar o banco de dados.

## 📘 Como usar o Swagger

### URL

```
{{baseURL}}/documentation
```

### 🔐 Autenticação com Bearer Token

Algumas rotas exigem autenticação. Para acessá-las:

1. Faça login usando a rota **POST /login**.

2. Copie o token JWT retornado.

3. No Swagger UI, clique no botão **"Authorize"**.

4. No campo que aparecer, insira assim:

   ```
   Bearer <seu_token_aqui>
   ```

   > ⚠️ **Importante**: Inclua a palavra **`Bearer`** seguida de um espaço antes do token.

5. Clique em **"Authorize"** e depois em **"Close"**.

Você agora pode testar rotas protegidas como `/me` ou `/simulations`.

## 📬 Documentação das Rotas

Abaixo estão as rotas da API, com exemplo de requisição e dados esperados. Para testar, você pode usar ferramentas como **Postman**, **Insomnia**, pelo arquivo ***client.http*** usando a extensão [rest-client](https://marketplace.visualstudio.com/items/?itemName=humao.rest-client) no vscode ou pelo Swagger usando a rota ***{{baseURL}}/documentation***.

---

### 🧑‍💻 Auth

#### **Registrar Estudante**

* **Método**: `POST /api/register`
* **Exemplo de Request**:

  ```json
  {
    "name": "John",
    "surname": "Doe",
    "email": "johndoe@example.com",
    "password": "123456"
  }
  ```

#### **Autenticar Estudante (Login)**

* **Método**: `POST /api/login`
* **Exemplo de Request**:

  ```json
  {
    "email": "johndoe@example.com",
    "password": "123456"
  }
  ```

---

### 🧑‍🎓 Student

#### **Obter Informações do Estudante**

* **Método**: `GET /api/me`
* **Headers**:

  * `Authorization: Bearer {{authToken}}`
* **Exemplo de Request**: Nenhum corpo necessário.

#### **Atualizar Informações do Estudante**

* **Método**: `PUT /api/me`
* **Headers**:

  * `Authorization: Bearer {{authToken}}`
* **Exemplo de Request**:

  ```json
  {
    "name": "John updated"
  }
  ```

#### **Listar simulações do estudante**

* **Método**: `GET /api/me/simulations`
* **Headers**:

  * `Authorization: Bearer {{authToken}}`
* **Exemplo de Request**: Nenhum corpo necessário.

---

### 💸 Simulações

#### **Criar Simulação de Financiamento**

* **Método**: `POST /api/simulations`
* **Headers**:

  * `Authorization: Bearer {{authToken}}`
* **Exemplo de Request**:

  ```json
  {
    "installments": 5,
    "totalAmountCents": 1000000
  }
  ```

#### **Deletar Simulação**

* **Método**: `DELETE /api/simulations`
* **Headers**:

  * `Authorization: Bearer {{authToken}}`
* **Exemplo de Request**:

  ```json
  {
    "financingSimulationId": "3f18545f-ff3a-4152-9fff-a01064ee83de"
  }
  ```

#### **Atualizar Simulação de Financiamento**

* **Método**: `PUT /api/simulations`
* **Headers**:

  * `Authorization: Bearer {{authToken}}`
* **Exemplo de Request**:

  ```json
  {
    "financingSimulationId": "4e6c0bc8-e94f-4af8-af59-7a23a73324d3",
    "installments": 10,
    "totalAmountCents": 2000000
  }
  ```

---

## 📋 Scripts de Desenvolvimento

```bash
## Executa o servidor em modo de desenvolvimento.
pnpm dev
```

```bash
## Executa os testes unitários.
pnpm test
```

```bash
## Executa os testes end-to-end.
pnpm test:e2e
```

```bash
## Executa os testes em modo de observação.
pnpm test:watch
```

```bash
## Executa os testes e gera um relatório de cobertura.
pnpm test:coverage
```

```bash
## Abre a interface gráfica do Vitest
pnpm test:ui
```
