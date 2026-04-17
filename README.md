This project interacts with ethereum blockchain using ethers.js

user inputs any wallet address and it will send the following details

-> ETH balance
-> Formatted balance
-> Wealth category (e.g., Newbie, Investor, Whale)
-> Category description

Tech Stack

-> Node.js
-> Express.js
-> ethers.js

Endpoint

-> GET /rafiApiTest

It takes a Query Param

key = address

value = any Ethereum wallet address

example

http://localhost:8080/rafiApiTest?address=0x396343362be2A4dA1cE0C1C210945346fb82Aa49

Response

```
{
  success: true,
  data: {
   address: '0x396343362be2A4dA1cE0C1C210945346fb82Aa49',
   balanceEth: 9.895989576297646,
   balanceFormatted: '9.8960 ETH',
   category: { label: 'Investor', description: 'Serious holder' }
  }
  error:null
}
```

🛠️ Setup Instructions

git clone <repo-link>

cd <folder-name>

npm install

Create .env file:

PORT=8080
RPC_URL=your_rpc_url_here

Run the server:
npm start
