const express = require("express");
const { RPC_URL, PORT } = require("./config/constant");
const {
  getUserWalletDetails,
} = require("./controller/get.user.wallet.details");

const app = express();

app.get("/rafiApiTest", getUserWalletDetails);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
