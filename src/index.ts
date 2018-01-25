import { BlockChain } from './blockchain'

const blockchain = new BlockChain(8888) // <- create the blockchain and serve it online over 8888, set 0 if you doesn't want to serve it

blockchain.newBlock("Hello Welt")
console.log('Blockchain', blockchain.chain)