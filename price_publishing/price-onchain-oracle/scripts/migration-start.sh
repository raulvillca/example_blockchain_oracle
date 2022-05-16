#!/bin/bash
truffle compile \
&& truffle migrate -f 1 --to 1 --network testnet --compile-none \
&& truffle migrate -f 2 --to 2 --network testnet --compile-none \
&& truffle migrate -f 4 --to 3 --network testnet --compile-none \
&& truffle migrate -f 4 --to 4 --network testnet --compile-none