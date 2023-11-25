import { Webview, window, Uri } from "vscode";
import { BasePanel } from "./basePanel";
import { GenerateFaucetWalletMessage } from "../messages/generateFaucetWalletMessage";
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
            async (message: GenerateFaucetWalletMessage) => {
                const command = message.command;

                switch (command) {
                    case "GenerateFaucetWallet":
                        const faucetWallet = await generateFaucetWallet();
                        webview.postMessage({
                            command: 'GenerateFaucetWallet',
                            faucetWallet: faucetWallet,
                        } as GenerateFaucetWalletMessage);
                        break;
                }
            },
            undefined,
            this._disposables
        );
    }
}
