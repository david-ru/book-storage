import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dru-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageModalComponent {
  @Input() message: string;
  @Input() selectedItem: string;

  @Output() clickedOk = new EventEmitter<string>();
  @Output() clickedCancel = new EventEmitter();

  onClickOk() {
    this.clickedOk.emit(this.selectedItem);
  }

  onClickCancel() {
    this.clickedCancel.emit(null);
  }
}
