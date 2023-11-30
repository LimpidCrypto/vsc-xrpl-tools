import { BaseMessage } from "./baseMessage";
import { FaucetWallet } from "./types";

export type GenerateFaucetWalletMessage = BaseMessage & {
    command: 'GenerateFaucetWallet';
    faucetWallet?: FaucetWallet;
};
