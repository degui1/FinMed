# FINMEd - Sistema de Simulação e Gerenciamento de Financiamentos Estudantis

## 🚀 Funcionalidades Principais

Principais funcionalidades do **FINMEd**:

* **Cadastro de Estudantes**: Criação de uma conta com dados pessoais e informações de login.
* **Autenticação via JWT**: Processo de login seguro que gera um token para garantir o acesso a funcionalidades protegidas.
* **Simulações de Financiamento**: Os estudantes podem simular financiamentos com diferentes parâmetros e obter o valor das parcelas mensais com base nos dados fornecidos.
* **Gerenciamento de Dados**: Alteração de informações pessoais e das simulações de forma simples e segura.

## 📋 Variáveis de Ambiente

O sistema requer algumas variáveis de ambiente para funcionamento adequado. Elas são usadas para configurar o ambiente de execução, banco de dados e autenticação. Abaixo estão as variáveis necessárias:

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

### Docker

Este projeto utiliza o **docker-compose** para rodar o banco de dados.

## 🛠 Como Rodar o Projeto

1. **Clonar o Repositório**:

   ```bash
   git clone https://github.com/seu-usuario/finmed.git
   ```

2. **Instalar Dependências**:
   Entre na pasta do projeto e execute o comando:

   ```bash
   cd finmed
   pnpm install
   ```

3. **Configurar Variáveis de Ambiente**:
   Crie um arquivo `.env` a partir do arquivo `.env.example` e configure os parâmetros necessários, como as credenciais do banco de dados e as chaves do JWT.

4. **Subir o Projeto**:
   Execute o comando para iniciar a aplicação em modo de desenvolvimento:

   ```bash
   pnpm dev
   ```

## 🧑‍⚖️ Regras de Negócio

* **Autorização e Acesso**: O estudante só pode visualizar ou alterar suas próprias simulações e dados pessoais.
* **Cálculo da Parcela Mensal**: O valor da parcela é calculado de acordo com a fórmula de **juros compostos**.

### Fórmula para Cálculo da Parcela

A fórmula utilizada para calcular o valor da parcela mensal do financiamento é:

```
PMT = PV * (i / (1 - (1 + i)^-n))
```

Onde:

* **PMT** = Parcela mensal
* **PV** = Valor total do financiamento
* **i** = Taxa de juros mensal (por exemplo, 0.02 para 2%)
* **n** = Número de parcelas

## 📬 Documentação das Rotas

Abaixo estão as rotas da API, com exemplo de requisição e dados esperados. Para testar, você pode usar ferramentas como **Postman**, **Insomnia** ou pelo arquivo ***client.http*** usando a extensão [rest-client](https://marketplace.visualstudio.com/items/?itemName=humao.rest-client) no vscode.

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

Aqui estão os scripts definidos no `package.json`:

* **`dev`**: Executa o servidor em modo de desenvolvimento, utilizando o `tsx`.

  ```bash
  pnpm dev
  ```

* **`test`**: Executa os testes utilizando o **Vitest** no modo normal.

  ```bash
  pnpm test
  ```

* **`test:watch`**: Executa os testes em modo de observação.

  ```bash
  pnpm test:watch
  ```

* **`test:coverage`**: Executa os testes e gera um relatório de cobertura, mostrando quais partes do código foram testadas.

  ```bash
  pnpm test:coverage
  ```

* **`test:ui`**: Abre a interface gráfica do **Vitest**, permitindo que você execute e visualize os resultados dos testes de forma mais interativa.

  ```bash
  pnpm test:ui
  ```
