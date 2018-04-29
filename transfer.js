const Web3 = require("web3");
var Tx = require('ethereumjs-tx');

const ETH_WEB3_PROVIDER = "http://pub-node1.etherscan.io:8545";
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(ETH_WEB3_PROVIDER));

function transfer(recipient, amount, callback) {
    callback();
    
    // const account = web3.eth.accounts.privateKeyToAccount("");
    // web3.eth.getTransactionCount(account.address).then((nonce) => {
        
    //     console.log("performing transfer");
        
    //     // console.log("fetching...");
        
    //     const privateKey = Buffer.from("", 'hex');
        
    //     var txData = web3.utils.asciiToHex('saypay');
        
    //     const rawTx = {
    //         from: "",
    //         gas: "128028",
    //         gasPrice: web3.utils.toWei("0.00000002", "ether"),
    //         nonce: "0x0",
    //         to: "",
    //         value: web3.utils.toWei(".000001", "ether")
    //     };
        
    //     // var txValue = web3.utils.numberToHex(web3.utils.toWei('0.1', 'ether'));
        
    //     console.log(rawTx);
    //     const tx = new Tx(rawTx);
    //     tx.sign(privateKey);

    //     const serializedTx = tx.serialize();

    //     console.log(serializedTx.toString('hex'));
        
    //     console.log("sending tx...");
        
        // web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', (err, r) => {
        //     console.log("send tx: err and receipt", err, r);
        //     callback();
        // });
    });
}

module.exports = transfer;