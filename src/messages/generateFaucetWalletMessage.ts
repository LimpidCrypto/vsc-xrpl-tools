import { LcFaucetWallet } from "../types/lcDocumentationTypes";
import { Network } from "../types/network";
import { BaseMessage } from "./baseMessage";

export type RequestFaucetWallet = BaseMessage & {
    command: 'RequestFaucetWallet';
    network: Network;
};

export type ResponseFaucetWallet = BaseMessage & {
    command: 'ResponseFaucetWallet';
    faucetWallet: LcFaucetWallet;
};
