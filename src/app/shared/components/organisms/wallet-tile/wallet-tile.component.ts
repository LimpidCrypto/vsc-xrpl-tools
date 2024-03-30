import { Component } from '@angular/core';
import { LcFaucetWallet } from '../../../../../../ext-src/types/lcDocumentationTypes';
import { Network } from '../../../../../../ext-src/types/network';

@Component({
  selector: 'wallet-tile-organism',
  templateUrl: './wallet-tile.component.html',
  styleUrl: './wallet-tile.component.scss',
})
export class WalletTileComponent {
  address = '';
  secret = '';
  amount = '';
  networks: Network[] = ['Test', 'Dev', 'XahauTest', 'SidechainTest'];

  // Handle messages from the backend
  handleBackendMessage(message: any) {
    if (message.command === 'ResponseFaucetWallet') {
      const faucetWallet: LcFaucetWallet = message.faucetWallet;
      // Do something with the faucetWallet data in your frontend code
      this.address = faucetWallet.account.classicAddress;
      this.secret = faucetWallet.account.secret ?? 'No secret provided';
      this.amount = faucetWallet.amount.toString();
    }
  }

  // Attach the message handler to the window object
  ngOnInit() {
    window.addEventListener('message', (event) => this.handleBackendMessage(event.data));
  }
}
