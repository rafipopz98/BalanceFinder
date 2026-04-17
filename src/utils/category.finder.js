const { get } = require("request");

const getWealthCategory = (balance) => {
  if (balance === 0) {
    return { label: "Empty", description: "No ETH in wallet" };
  }
  if (balance < 0.1) {
    return { label: "Newbie", description: "Just getting started" };
  }
  if (balance < 1) {
    return { label: "Retail", description: "Small investor" };
  }
  if (balance < 10) {
    return { label: "Investor", description: "Serious holder" };
  }
  if (balance < 100) {
    return { label: "High Networth", description: "Large portfolio" };
  }
  return { label: "Whale", description: "Massive holdings" };
};

module.exports = { getWealthCategory };
