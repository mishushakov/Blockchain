import { Block } from './block'
import { BlockChain } from './blockchain'

let genesisblock = new Block(0, "Genesis Block", "genesis-block", null) // <- create so-called genesis-block(the first block in the chain)
let blockchain = new BlockChain([genesisblock]) // <- create the blockchain with genesis block

let testblock =  blockchain.newBlock('Hello') // <- generate block with message
testblock.remove() // <- remove the block

blockchain.newBlock('World')

console.log('Blockchain', blockchain)
console.log('Valid Blockchain', blockchain.getChain())
