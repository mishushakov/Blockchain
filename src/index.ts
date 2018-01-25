import { BlockChain } from './blockchain'

let blockchain = new BlockChain() // <- create the blockchain

let testblock =  blockchain.newBlock('Hello') // <- generate block with message
testblock.remove() // <- remove the block

blockchain.newBlock('World')

console.log('Blockchain', blockchain)