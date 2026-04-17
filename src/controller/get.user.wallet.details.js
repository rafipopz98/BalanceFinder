const ethers = require("ethers");
const { getWealthCategory } = require("../utils/category.finder");
const { RPC_URL } = require("../config/constant");


const provider = new ethers.JsonRpcProvider(RPC_URL);

const getUserWalletDetails = async (req, res) => {
  const { address } = req.query;
  try {
    if (!address) {
      console.log("Address is required");
      return res.status(400).json({ error: "Address is required" });
    }

    if (!ethers.isAddress(address)) {
      console.log("Invalid wallet Address");
      return res.status(400).json({ error: "Invalid wallet Address" });
    }

    const balanceWei = await provider.getBalance(address);
    console.log(balanceWei, "balanceWei");
    const balanceEth = Number(ethers.formatEther(balanceWei));

    const category = getWealthCategory(balanceEth);

    const result = {
      address,
      balanceEth: balanceEth,
      balanceFormatted: `${balanceEth.toFixed(4)} ETH`,
      category: {
        label: category.label,
        description: category.description,
      },
    };

    console.log("Wallet Info:", result);

    res.status(200).json({ data: result, success: true, error: null });
  } catch (error) {
    console.error("Error while fetching ETH balance:", error);
    res.status(500).json({
      success: false,
      data: null,
      error: error.message || `Error while fetching eth Balance, \n ${error}`,
    });
  }
};
module.exports = { getUserWalletDetails };
