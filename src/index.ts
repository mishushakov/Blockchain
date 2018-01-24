import * as crypto from 'crypto-js' // <- import crypto-js for cryptography

class Block {
    timestamp: number // <- computed timestamp
    hash: string // <- computed timestamp

    constructor(public index: number, public data: any, public typeData: string, public previousHash: string) {
       this.index = index
       this.timestamp = Date.now()
       this.data = data
       this.typeData = typeData
       this.previousHash = previousHash
       this.hash = this.genHash().toString()
    }

    genHash = () => {
        return crypto.SHA256(this.index + this.timestamp + this.data + this.typeData + this.previousHash)

        // ^ get sha hash of Block
    }
}

class BlockChain {
    valid: boolean // <- set this to unvalid on corrupt block
    difficulty: number // <- we won't use it

    constructor(public chain: Array<Block>){
        this.difficulty = 5
        this.chain = chain
        this.valid = true
    }

    newBlock = (data: any) => {
        let index = this.chain.lastIndexOf(this.chain[this.chain.length-1]) + 1
        let previousHash = this.chain[this.chain.length-1].hash

        let genBlock = new Block(index, data, "generated-block", previousHash) // <- generate new block

        this.proof(genBlock) // <- proof-of-concept
    }

    proof = (block: Block) => {
        let lastblock = this.chain[this.chain.length-1]

        if (lastblock.hash == block.previousHash && lastblock.index < block.index && lastblock.timestamp < block.timestamp){
            this.chain.push(block) // <- if hashes and dates are fine, add block to chain
        }
        else {
            console.log('Corrupt Block') // <- log, if block is corrupt
        }
    }
}

let genesisblock = new Block(0, "Genesis Block", "genesis-block", null) // <- create so-called genesis-block(the first block in the chain)
let blockchain = new BlockChain([genesisblock]) // <- create the blockchain with genesis block
blockchain.newBlock({message: 'Hello World'}) // <- generate a block with message Object as data

console.log(blockchain) // <- log initialized chain