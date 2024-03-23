import { LcFaucetWallet } from "../types/lcDocumentationTypes";
import { BaseMessage } from "./baseMessage";

export type GenerateFaucetWalletMessage = BaseMessage & {
    command: 'GenerateFaucetWallet';
    faucetWallet?: LcFaucetWallet;
};
