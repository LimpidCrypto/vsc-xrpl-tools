import * as vscode from 'vscode';
import { LcHttpClient } from '../clients/httpClient';
import { LcFaucetWallet } from '../types/lcDocumentationTypes';
import { Network } from '../types/network';

export async function generateFaucetWallet(network: Network): Promise<LcFaucetWallet> {
    vscode.window.showInformationMessage("Generating wallet...");
    const client = new LcHttpClient(network, "v1");
    const faucetWalletResponse = await client.get("/wallet/faucet");

    if (faucetWalletResponse.success) {
        return faucetWalletResponse.result as LcFaucetWallet;
    } else {
        throw new Error(faucetWalletResponse.error);
    }
}
