# <img height="24" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="NextJs" title="Next JS"/> ROCKETSEAT - IGNEWS

<br />

## Configurações iniciais
  - Na raiz do projeto instale as dependências:

  ```
    $ yarn install
  ```

  ### Stripe
    - crie uma conta em https://stripe.com
    - crie um produto
    - copie a sua SECRET KEY que se encontra no dashboard para colar no arquivo .env

  ### Projeto
    - Renomeie o arquivo `.env.example` na raiz do projeto para `.env.local` e altere os valores

<br />

## Rode a aplicação:

```
  $ yarn dev
```

### Para uma melhor performance:

```
  $ yarn build && yarn start
```

<br />

## Stripe
  Número de cartão teste: 4242 4242 4242 4242

  rodando stripe-cli linux

  ```
    ./stripe listen --forward-to localhost:3000/api/webhooks
  ```
