import { Network } from '../../../../../../ext-src/types/network';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'network-select-molecule',
  templateUrl: './network-select.component.html',
  styleUrl: './network-select.component.scss'
})
export class NetworkSelectComponent {
  networks: Network[] = ["Test", "Dev", "XahauTest"];

  selectedNetwork: Network = 'Test';

  onNetworkSelected(network: string) {
    this.selectedNetwork = network as Network;
  }
}
