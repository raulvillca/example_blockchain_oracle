#!/bin/bash
truffle migrate -f 1 --to 1  \
&& truffle migrate -f 2 --to 2  --compile-none