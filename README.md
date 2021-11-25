# NTF Platzi Punk

This project create ia a Smart Contract that generate a ramdon character avatar using https://avataaars

## Installation, Setup and deploy

To install node modules

```bash
npm install
```

Set Ethereum Node Url and Private Key in .env (see .env.emxple)

```bash
ETHEREUM_PRIVATE_KEY=
ETHEREUM_NODE_URL=
```

Compile and deploy the Smart Contract (with hardhat: https://hardhat.org/getting-started/)

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network ethereum
```

## License
[MIT](https://choosealicense.com/licenses/mit/)