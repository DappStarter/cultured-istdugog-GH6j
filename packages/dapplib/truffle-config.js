require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom problem brown turtle chaos rare remember common inner casual flush thank'; 
let testAccounts = [
"0x09150ba0f52871e2b6aa02f6414e24f54d49ed13463f4659fd6c57d5d64ec17d",
"0xba114bc41b6b401a81b799a92a0aee3f29f4fee8b7d7675e8200efd0e3660230",
"0x7e7829911dd32002cca7f9985e1f7a752444dd87711d5b7c5e425025df70118f",
"0xb2afdf08f16f0254273dd34513075df537487190a1183e11990c48d0a59849af",
"0xf3ee8f7046ff7d7ef011117ad557ba6e1bef69e0f6c954d4df8f79d5f2c35c2e",
"0x95224a943dc0bf337a1e70ef70be7f4dc16608de4ac4b3588ffbd30495e7ecde",
"0x8d07f57369c31569434da6cd339431c581834e67b4e14065125b71728068ae29",
"0xb43ae051f6461d8ed4043a0d418184cb751051e6bb3809a37b07e1a81bcf749e",
"0x63621818ae674c56a316c6c72e50288ee39d0efdd95cb947fce96ea47c9c38ca",
"0x9c01ac39e0499cbf013d5c2957154e04077062c9e7e5713e9970e44ae000d50a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


