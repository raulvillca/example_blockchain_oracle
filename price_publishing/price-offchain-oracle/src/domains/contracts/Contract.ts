import { ethers, providers, Wallet } from "ethers";

export interface IContract {
  address: string
}

export default class Contract implements IContract{
  provider: providers.WebSocketProvider;

  signer: Wallet;

  address: string

  constructor(address: string) {
    this.provider = new ethers.providers.WebSocketProvider(process.env.NETWORK_URL);
    this.signer = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, this.provider);
    this.address = address;
  }
}
