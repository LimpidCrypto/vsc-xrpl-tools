import { Component, Input, ViewChild } from '@angular/core';
import { ToggableComponent } from '../toggable/toggable.component';

@Component({
  selector: 'menu-atom',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() standardText: string = '';
  @Input() compact: boolean = false;
  @Input() isMenuBtnDisabled: boolean = false;
  @Input() isMenuListVisible: boolean = false;

  @ViewChild('menuList') menuList!: ToggableComponent;
}
