import { window } from "vscode";
import XrplClient from "./client";
import { FaucetUri, FaucetWallet } from "../messages/types";

export async function generateFaucetWallet(): Promise<FaucetWallet> {
    const faucetWallet = await XrplClient.fundWallet(FaucetUri.Testnet);

    if (faucetWallet) {
        return faucetWallet;
    } else {
        throw new Error("Failed to fund wallet");
    }
}
