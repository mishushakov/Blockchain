![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhaHzwCLwHZ2bIa3QvFKfDHfJ8om02swnRa2b_Cn8VmW_fjjPTA)

# TypeScript Blockchain

Hey, this is a simple blockchain showcase implemented in TypeScript. It supports mutations, simple proof-of-concept and also a p2p server for mining!

### Get Started

- Clone the repo
- run `yarn` or `npm install`
- execute using `yarn dev` or `npm run dev`
- compile to js using `yarn build` or `npm run build`

### Socket API Overview

```
emit('new_block', {data: ''}) <-- Create new block with given data

emit('remove_block', {hash: ''}) <-- Remove block with hash

emit('get_block', {hash: ''}) <-- Get block with hash
```