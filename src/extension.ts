// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { WalletPanel } from "./panels/walletPanel";
import { TreeDataProvider } from './treeDataProvider';
import { generateFaucetWallet } from './app/wallet';
import { LcFaucetWallet } from './types/lcDocumentationTypes';

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
        const faucetWallet: LcFaucetWallet = await generateFaucetWallet();
        vscode.window.showInformationMessage(`Address: ${faucetWallet.account.classicAddress}\nSecret: ${faucetWallet.account.secret}\nFunded with: ${faucetWallet.amount}`);
	});

	context.subscriptions.push(openWalletCommand);
	context.subscriptions.push(generateFaucetWalletCommand);
}

export function deactivate() { }
