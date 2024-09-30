<h1 align="center">
  <br>
  <a href="https://polygon.technology/polygon-miden"><img src="https://avatars.githubusercontent.com/u/114251928?s=200&v=4" width="100"></a>
  <br>
    Polygon Miden Block Explorer
  <br>
</h1>

This repository contains the code for the initial iteration of the Polygon Miden Block Exlplorer.

## 🛠️ Setup

Pull this Git repository and follow the instructions below to setup the indexer, backend, and frontend.

### Indexer

1. Setup Postgres locally (or use a postgres cloud service like [Neon](https://neon.tech/)) and run the initialization script `migration.sql` in the indexer folder.

- `cd ./indexer`
- `psql -d postgres`
- `\i migration.sql`

2. Run the indexer with `cargo run` in the command line with `RPC_URL` and `POSTGRES_URL` (postgres://...) environment variables. See example below:

- `POSTGRES_URL=postgres://user:secret@localhost:5432/postgres RPC_URL=http://18.203.155.106:57291 cargo run`

### Backend

1. Go to the backend directory

- `cd ./backend`

2. Edit the `.env` file and add your `POSTGRES_URL` and `RPC_URL`. Eg.,

- `POSTGRES_URL="postgres://user:secret@localhost:5432/postgres"`

3. Install and run the backend

- `npm install`
- `npm run start`

### Frontend

1. Go to the frontend directory

   - `cd ./frontend`

2. Edit the env file `.env.development` and point to the backend server. Eg.,

   - `NEXT_PUBLIC_GRAPHQL_URL = http://localhost:8080/graphql`

3. Install and run frontend

   - `npm install`
   - `npm run dev`

## 🎯 Goals

### UX

Visualize the Miden blockchain that is both simple for the average market participant and also descriptive for hardcore developers and on-chain data analysts.

### Performance

A fast block explorer that keeps up with the updates of the blockchain in real-time with minimal down-time.

### Miden Insights

Miden specific features that highlight novel paradigms and unlock new design space for developers.

### Transparency

Initial implementation will be open source under MIT license. This will serve as a reference for future explorers as developer adoption grows on Polygon Miden.

## ⏳ Why now?

As Polygon Miden is approaching a public mainnet, there is a need for a block explorer to allow participants to inspect the Miden blockchain. This explorer will be called Midenscan.

For developers, Midenscan will accelerate development cycles and the feedback loops by visualizing their code and deployments on chain.

For data analysts, Midenscan provides transparent and accurate data to monitor activity as Miden grows.

For market participants, Midenscan will provide transaction updates and facilitate the adoption of the network.

## 🫂 Credits

- Jon ([@0xmonkeyy](https://github.com/0xmonkeyy))
- Sean ([@0xs34n](https://github.com/0xs34n))
- Polygon Miden: Dominik Schmid ([@Dominik1999](https://github.com/Dominik1999)), Bobbin Threadbare ([@bobbinth](https://github.com/bobbinth))
