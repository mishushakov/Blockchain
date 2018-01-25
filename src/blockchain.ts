import { Block } from './block'

export class BlockChain {
    difficulty: number // <- we won't use it
    chain: Array<Block>

    constructor(){
        this.difficulty = 5
        this.chain = [this.generateGenesis()]
    }

    generateGenesis = () => {
        return new Block(0, "Genesis Block", "genesis-block", null) // <- create so-called genesis-block(the first block in the chain)
    }

    newBlock = (data: any) => {
        let index = this.chain.lastIndexOf(this.chain[this.chain.length-1]) + 1
        let previousHash = this.chain[this.chain.length - 1].hash

        let genBlock = new Block(index, data, "generated-block", previousHash) // <- generate new block

        this.proof(genBlock) // <- proof-of-concept

        return genBlock
    }

    proof = (block: Block) => {
        let lastblock = this.chain[this.chain.length-1]

        if (lastblock.hash == block.previousHash && lastblock.index < block.index){
            this.chain.push(block) // <- if hashes and dates are fine, add block to chain

            return block
        }
        else {
            console.log('Corrupt Block') // <- log, if block is corrupt
            block.valid = false
            this.chain.push(block) // <- add corrupt blocks to chain, we will validate through them later

            return block
        }
    }

    removeBlockByHash = (hash: string) => {
        let index = this.chain.findIndex(b => b.hash === hash)

        if (index > -1 && index !== 0){
            this.chain[index].removed = true // <- virtually remove block by hash
            return hash
        }
        else {
            console.log('No such hash found')
            return hash
        }
    }

    getChain = () => {
        let valid_chain: Array<Block> = [] // <- temporary stoarage for valid blocks

        this.chain.forEach((block: Block, index: number) => {
            if(block.removed == false && block.valid == true) {valid_chain.push(block)}
        })

        // <-> here we are just building the valid chain, recalculate all hashes, with just valid and unremoved blocks

        valid_chain.forEach((block: Block, index: number) => {
            let lastblock = valid_chain[0]
            if(block.index != 0) {
                block.index = lastblock.index + 1
                block.hash = block.genHash().toString()
                block.previousHash = lastblock.hash
            }
        })

        return valid_chain // <- return valid chain
    }
}