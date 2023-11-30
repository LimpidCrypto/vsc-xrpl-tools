import { WebviewPanel, Uri, ViewColumn, window, Webview, Disposable } from 'vscode';
import * as fs from 'fs';
import { log } from 'console';

/**
 * This class manages the state and behavior of webview panels.
 *
 * @param viewName The name of the view, which is also the name of the folder in the views directory.
 * @param extensionUri The Uri of the extension.
 */
export class BasePanel {
    protected _panel: WebviewPanel;
    protected _disposables: Disposable[] = [];
    protected viewName: string;
    protected viewNameCapitalized: string;

    constructor(viewName: string, extensionUri: Uri) {
        this.viewName = viewName;
        this.viewNameCapitalized = `${this.viewName.charAt(0).toUpperCase() + this.viewName.slice(1)}`;

        const panel = window.createWebviewPanel(
            `open${this.viewNameCapitalized}View`,
            `XRPL Tools: ${this.viewNameCapitalized}`,
            ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [Uri.joinPath(extensionUri, "dist"), Uri.joinPath(extensionUri, `webview-ui/dist`)],
            }
        );

        this._panel = panel;
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);
        this.setWebviewMessageListener(this._panel.webview);
    }

    dispose() {
        this._panel.dispose();

        while (this._disposables.length) {
            const disposable = this._disposables.pop();
            if (disposable) {
                disposable.dispose();
            }
        }
    }

    private _getWebviewContent(webview: Webview, extensionUri: Uri) {
        const appDistPath = Uri.joinPath(extensionUri, 'webview-ui/dist');
        const baseUri = webview.asWebviewUri(appDistPath);
        const indexPath = Uri.joinPath(appDistPath, 'index.html');
        let indexHtml = fs.readFileSync(indexPath.fsPath, { encoding: 'utf8' });
        log(baseUri);
        indexHtml = indexHtml.replace('<base href="/">', `<base href="${String(baseUri)}/">`);

        return indexHtml;
    }

    protected setWebviewMessageListener(webview: Webview) { }
}
