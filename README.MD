## Informações 

Esse módulo Nodejs foi criado exclusivamente para atender os usuários do [botsparadiscord.com](https://botsparadiscord.com/)


## Instalação

```
npm install status-bpd
```

## Forma de uso no JS:

```js
const { getVotes } = require("status-bpd");

// retorna o total de votos do seu bot.
const botid = ''; // id de seu bot
const votes = await getVotes(botid);
console.log(votes); // retorna o total de votos de seu bot.
```

## Possíveis Erros
O único erro possível é você ter colocado o ID do bot errado. (no caso você é o burro da história.)

## LICENSE
Este projeto está licenciado sob a [LICENSE](LICENSE) Apache V2.