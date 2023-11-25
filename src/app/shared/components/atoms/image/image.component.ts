import {Component, Input} from '@angular/core';

@Component({
  selector: 'image-atom',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() src!: string;
  @Input() alt!: string;
}
