import * as crypto from 'crypto-js' // <- import crypto-js for cryptography

export class Block {
    timestamp: number // <- computed timestamp
    hash: string // <- computed timestamp
    removed: boolean // <- removed status
    valid: boolean // <- valid status

    constructor(public index: number, public data: any, public typeData: string, public previousHash: string) {
       this.index = index
       this.timestamp = Date.now()
       this.data = data
       this.typeData = typeData
       this.previousHash = previousHash
       this.hash = this.genHash().toString()
       this.removed = false
       this.valid = true
    }

    genHash = () => {
        return crypto.SHA256(this.index + this.timestamp + this.data + this.typeData + this.previousHash)

        // ^ get sha hash of Block
    }

    remove = () => {
        return this.removed = true
    }
}