import { Component, Input } from '@angular/core';
import { vscode } from 'src/app/utils/vscode';
import { RequestFaucetWallet } from '../../../../../../../src/messages/generateFaucetWalletMessage';

@Component({
  selector: 'generate-faucet-button-molecule',
  templateUrl: './generate-faucet-button.component.html',
  styleUrl: './generate-faucet-button.component.scss'
})
export class GenerateFaucetButtonComponent {
  @Input() network: string = 'Test';

  generateFaucetWallet() {
    vscode.postMessage({
      command: 'RequestFaucetWallet',
      network: this.network
    } as RequestFaucetWallet);
  }
}
