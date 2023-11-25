import * as vscode from 'vscode';

export class TreeDataProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined> = new vscode.EventEmitter<vscode.TreeItem | undefined>();
    readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined> = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        if (element.label === 'Wallet') {
            element.command = {
                command: 'xrpl-tools.openWalletView',
                title: 'XRPL Tools: Open Wallet',
                arguments: [element]
            };
        }
        return element;
    }

    getChildren(element?: vscode.TreeItem): vscode.TreeItem[] {
        const walletTreeItem = new vscode.TreeItem('Wallet');
        walletTreeItem.iconPath = new vscode.ThemeIcon('account');
        return [walletTreeItem];
    }
}