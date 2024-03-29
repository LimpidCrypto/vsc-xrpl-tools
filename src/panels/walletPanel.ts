import { Webview, window, Uri } from "vscode";
import { BasePanel } from "./basePanel";
import { RequestFaucetWallet, ResponseFaucetWallet } from "../messages/generateFaucetWalletMessage";
import { generateFaucetWallet } from "../app/wallet";

/**
 * This class manages the state and behavior of Wallet webview panels.
 */
export class WalletPanel extends BasePanel {
    constructor(extensionUri: Uri) {
        super('wallet', extensionUri);
    }

    override setWebviewMessageListener(webview: Webview) {
        webview.onDidReceiveMessage(
            async (message: RequestFaucetWallet) => {
                const command = message.command;
                const network = message.network;

                switch (command) {
                    case "RequestFaucetWallet":
                        const faucetWallet = await generateFaucetWallet(network);
                        webview.postMessage({
                            command: 'ResponseFaucetWallet',
                            faucetWallet: faucetWallet,
                        } as ResponseFaucetWallet);
                        break;
                }
            },
            undefined,
            this._disposables
        );
    }
}
