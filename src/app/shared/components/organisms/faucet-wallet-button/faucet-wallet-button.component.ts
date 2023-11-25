import { Component } from '@angular/core';
import { FaucetWallet } from 'ext-src/messages/types';
import { vscode } from 'src/app/utils/vscode';

@Component({
  selector: 'faucet-wallet-button-organism',
  templateUrl: './faucet-wallet-button.component.html',
  styleUrls: ['./faucet-wallet-button.component.scss']
})
export class FaucetWalletButtonComponent {
  generateFaucetWallet() {
    vscode.postMessage({
      command: 'GenerateFaucetWallet'
    });
  }

  // Handle messages from the backend
  handleBackendMessage(message: any) {
    if (message.command === 'GenerateFaucetWallet') {
      const faucetWallet: FaucetWallet = message.faucetWallet;
      // Do something with the faucetWallet data in your frontend code
      const addressInput = document.getElementById('address-input') as HTMLInputElement;
      const secretInput = document.getElementById('secret-input') as HTMLInputElement;
      const balanceInput = document.getElementById('balance-input') as HTMLInputElement;
      addressInput.value = faucetWallet.wallet.classicAddress;
      secretInput.value = faucetWallet.wallet.seed ?? faucetWallet.wallet.privateKey;
      balanceInput.value = faucetWallet.balance.toString();
    }
  }

  // Attach the message handler to the window object
  ngOnInit() {
    window.addEventListener('message', (event) => this.handleBackendMessage(event.data));
  }
}
