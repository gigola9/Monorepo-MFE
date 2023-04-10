import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'store-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent {

  @Input() size = 'medium';
  @Input() color = 'blue';
  @Input() disabled = false;
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
