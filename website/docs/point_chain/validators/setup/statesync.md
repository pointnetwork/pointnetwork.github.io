---
title: State Sync
sidebar_label: State Sync
---
# State Sync

## State Syncing a Node

Once a few nodes in a network have taken state sync snapshots, new nodes can join the network using state sync. To do this, the node should first be configured as usual, and the following pieces of information must be obtained for light client verification:

- Two available RPC servers (at least)
- Trusted height
- Block ID hash of trusted height

The trusted hash must be obtained from a trusted source (eg. a block explorer), but the RPC servers do not need to be trusted. Tendermint will use the hash to obtain trusted app hashes from the blockchain in order to verify restored application snapshots. The app hash and corresponding height are the only pieces of information that can be trusted when restoring snapshots. Everything else can be forged by adversaries.

Set the node name

```bash
moniker="NODE_NAME"
```

## Use commands below for Mainnet setup

```bash
SNAP_RPC1="http://rpc-mainnet-1.point.space:26659"
SNAP_RPC="http://rpc-mainnet-1.point.space:26659"
CHAIN_ID="point_10687-1"
PEER="8673c1f04c29c464189e8bf29e51fb0b38da2f19@rpc-mainnet-1.point.space:26656"
wget -O $HOME/genesis.json https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/mainnet-1/genesis.json
```

### Configuration

Node init

```bash
pointd init $moniker --chain-id $CHAIN_ID
```


Move genesis file to .pointd/config folder

```bash
mv $HOME/genesis.json ~/.pointd/config/
```

Reset the node

```bash
pointd tendermint unsafe-reset-all --home $HOME/.pointd
```

Change config files (set the node name, add persistent peers, set indexer = "null")

```bash
sed -i -e "s%^moniker *=.*%moniker = \"$moniker\"%; " $HOME/.pointd/config/config.toml
sed -i -e "s%^indexer *=.*%indexer = \"null\"%; " $HOME/.pointd/config/config.toml
sed -i -e "s%^persistent_peers *=.*%persistent_peers = \"$PEER\"%; " $HOME/.pointd/config/config.toml
```

Set the variables for start from snapshot

```bash
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)
```

Check

```bash
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH
```

Output example (numbers will be different):

```bash
911348 909348 7A2C851A4ECCF5C6728411F53EAACD0D6E6A0C18BD77DB2E9AD91E78465930FC
```

If output is OK do next

```bash
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \

s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC1\"| ; \

s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \

s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ; \

s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" ~/.pointd/config/config.toml
```

Now you just need to run the node.


```bash
pointd start
```

### Check logs

When the node is started it will then attempt to find a state sync snapshot in the network, and restore it:

```bash
Started node                   module=main nodeInfo="..."
Discovering snapshots for 20s
Discovered new snapshot        height=3000 format=1 hash=0F14A473
Discovered new snapshot        height=2000 format=1 hash=C6209AF7
Offering snapshot to ABCI app  height=3000 format=1 hash=0F14A473
Snapshot accepted, restoring   height=3000 format=1 hash=0F14A473
Fetching snapshot chunk        height=3000 format=1 chunk=0 total=3
Fetching snapshot chunk        height=3000 format=1 chunk=1 total=3
Fetching snapshot chunk        height=3000 format=1 chunk=2 total=3
Applied snapshot chunk         height=3000 format=1 chunk=0 total=3
Applied snapshot chunk         height=3000 format=1 chunk=1 total=3
Applied snapshot chunk         height=3000 format=1 chunk=2 total=3
Verified ABCI app              height=3000 appHash=F7D66BC9
Snapshot restored              height=3000 format=1 hash=0F14A473
Executed block                 height=3001 validTxs=16 invalidTxs=0
Committed state                height=3001 txs=16 appHash=0FDBB0D5F
Executed block                 height=3002 validTxs=25 invalidTxs=0
Committed state                height=3002 txs=25 appHash=40D12E4B3
```

The node is now state synced, having joined the network in seconds

### Use this command to switch off your State Sync mode, after node fully synced to avoid problems in future node restarts!

```bash
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1false|" $HOME/.pointd/config/config.toml
```
