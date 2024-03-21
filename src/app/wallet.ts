import * as vscode from 'vscode';
import { LcHttpClient } from '../clients/httpClient';
import { LcRes } from '../types/lcDocumentationTypes';

export async function generateFaucetWallet(): Promise<Pick<LcRes, 'Faucet'>> {
    vscode.window.showInformationMessage("Generating wallet...");
    const client = new LcHttpClient("https://xrp.limpidcrypto.com/api/v1/Test");
    const faucetWalletResponse = await client.get("/wallet/faucet");

    if (faucetWalletResponse.success) {
        return faucetWalletResponse.result as Pick<LcRes, 'Faucet'>;
    } else {
        throw new Error(faucetWalletResponse.error);
    }
}
