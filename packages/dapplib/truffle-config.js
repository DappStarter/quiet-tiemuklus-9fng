require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe struggle cruise noble push hidden glove fresh ghost'; 
let testAccounts = [
"0x7877ae689216eea69ceb02d905e6abf288046a2a5d6f854fc09794d04c439578",
"0x13f882264ef57c8182007cb4185b79f7c182555ca2275ceccd105cd2d0dfce8e",
"0xf5f4a92047e288e35f4b463f13f325d1220ef74dc6956aedf923c6224f9c1f56",
"0xadb2eff9ca5ae1d52f28949f9468269185fac71da129a72a6aebc2bb6f780a69",
"0x6d7dab75ff8680c456d83aac8334a09f095f90acb725905406db3fd7ade616be",
"0x40339e60c786c66e2630d711319992814858e3220d92c2d985d7b356853f8331",
"0xad77f0cbacdf386783427f30a9dc967e99c0e2a806efd12836404855c43fc570",
"0xfa059b1343505e6eaad97dba8f5f4d72aa8a86d20eac251b6447909dea124af7",
"0x07cec41ab38f1562ad8b58c2a04691bb9c93d8d25bcc218b0a68b2aa1147cd01",
"0xfab99fcbba0ac458059f523c5eeabc3854a91bf0cfc54ed364525c5132058915"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


