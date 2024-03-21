import { Wallet } from "xrpl";

export type Commands = "GenerateFaucetWallet";
export type Trace = { hash: string, code: string }
export type FaucetWallet = { wallet: Wallet, balance: number, amount?: number, trace?: Trace }

export enum FaucetUri {
    Testnet = 'wss://s.altnet.rippletest.net:51233/',
    Devnet = 'wss://s.devnet.rippletest.net:51233/',
    AMM = 'wss://amm.devnet.rippletest.net:51233/',
}
