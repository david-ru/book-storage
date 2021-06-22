import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dru-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() id: string;
  @Input() image: string;
  @Input() firstLine: string;
  @Input() secondLine: string;
  @Input() thirdLine: string;
  @Input() editable: string;
  @Input() deletable: string;

  @Output() onClickedEdit = new EventEmitter<string>();
  @Output() onClickedDelete = new EventEmitter<string>();

  displayActions = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.onClickedEdit.emit(this.id);
  }

  onDeleteClick() {
    this.onClickedDelete.emit(this.id);
  }
}
