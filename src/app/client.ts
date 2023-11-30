import { FaucetUri, FaucetWallet } from "../messages/types";
import { BaseResponse, Client, Request, Wallet } from "xrpl";


export default class XrplClient {
    private static instance: XrplClient | undefined;
    public inner: Client | undefined;
    private pingInterval: NodeJS.Timeout | undefined;

    private constructor(uri: string) {
        const client = new Client(uri);
        client.connect().then(() => {
            this.inner = client;
            this.pingInterval = setInterval(() => {
                this.inner?.request({ command: 'ping' });
            }, 10000); // Ping every 10 seconds
            return this;
        });
    }

    private static getUri(): string {
        // TODO: get from global vscode storage
        return 'wss://s.altnet.rippletest.net:51234';
    }

    public static async getConnection(): Promise<XrplClient> {
        return this.instance || (this.instance = new this(this.getUri()));
    }

    public async disconnect(): Promise<void> {
        if (XrplClient.instance) {
            XrplClient.instance.inner?.disconnect();
            this.clearPingInterval();
            XrplClient.instance = undefined;
        }
    }

    public async send(message: Request): Promise<BaseResponse> {
        if (XrplClient.instance?.inner) {
            this.clearPingInterval();
            const response = await XrplClient.instance.inner.request(message);
            this.setPingInterval(10000);
            return response;
        } else {
            throw new Error("Client not connected");
        }
    }

    public static async fundWallet(uri: FaucetUri): Promise<FaucetWallet | undefined> {
        const client = new Client(uri);
        await client.connect();
        const response = await client.fundWallet();
        client.disconnect();
        return response;
    }

    private clearPingInterval(): void {
        if (XrplClient.instance) {
            clearInterval(XrplClient.instance.pingInterval);
        } else {
            throw new Error("Client not connected");
        }
    }

    private setPingInterval(interval: number): void {
        if (XrplClient.instance) {
            clearInterval(XrplClient.instance.pingInterval);
            XrplClient.instance.pingInterval = setInterval(() => {
                XrplClient.instance?.inner?.request({ command: 'ping' });
            }, interval);
        }
    }
}
