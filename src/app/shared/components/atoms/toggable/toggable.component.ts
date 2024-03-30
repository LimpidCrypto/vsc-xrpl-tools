import { Component, Input } from '@angular/core';

@Component({
  selector: 'toggable-atom',
  templateUrl: './toggable.component.html',
  styleUrls: ['./toggable.component.scss']
})
export class ToggableComponent {
  @Input() isVisible: boolean = false;

  public toggleMyComponent(): void {
    this.isVisible = !this.isVisible;
  }
}
