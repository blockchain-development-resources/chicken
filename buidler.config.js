const ethers = require('ethers');

usePlugin("@nomiclabs/buidler-waffle");

function generateDummyAccounts(numAccounts) {
  const accounts = [];

  for (let i = 0; i < numAccounts; i++) {
    accounts.push({
      privateKey: ethers.Wallet.createRandom().privateKey,
      balance: ethers.utils.parseEther('100').toString(),
    });
  }

  return accounts;
}

module.exports = {
  solc: {
    version: "0.5.16",
  },
  networks: {
    buidlerevm: {
      accounts: generateDummyAccounts(100)
    },
  },
};

