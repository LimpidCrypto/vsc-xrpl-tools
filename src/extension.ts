// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { WalletPanel } from "./panels/walletPanel";
import { TreeDataProvider } from './treeDataProvider';
import { generateFaucetWallet } from './app/wallet';

export function activate(context: vscode.ExtensionContext) {
	const treeDataProvider = new TreeDataProvider();
	vscode.window.registerTreeDataProvider('xrpl-tools.main', treeDataProvider);

	context.subscriptions.push(vscode.commands.registerCommand('xrpl-tools.refresh', () => {
		treeDataProvider.refresh();
	}));

	let openWalletCommand = vscode.commands.registerCommand('xrpl-tools.openWalletView', () => {
		new WalletPanel(context.extensionUri);
	});
	let generateFaucetWalletCommand = vscode.commands.registerCommand('xrpl-tools.generateFaucetWallet', async () => {
        const faucetWallet = await generateFaucetWallet();
        vscode.window.showInformationMessage(`Address: ${faucetWallet.wallet.classicAddress}\nSecret: ${faucetWallet.wallet.seed ?? faucetWallet.wallet.privateKey}\nFunded with: ${faucetWallet.balance}`);
	});

	context.subscriptions.push(openWalletCommand);
	context.subscriptions.push(generateFaucetWalletCommand);
}

export function deactivate() { }
