import * as vscode from 'vscode';
import XrplClient from "./client";
import { FaucetUri, FaucetWallet } from "../messages/types";

export async function generateFaucetWallet(): Promise<FaucetWallet> {
        vscode.window.showInformationMessage("Generating wallet...");
        const faucetWallet = await XrplClient.fundWallet(FaucetUri.Testnet);

    if (faucetWallet) {
        return faucetWallet;
    } else {
        throw new Error("Failed to fund wallet");
    }
}
