import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dru-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentHeaderComponent {
  @Input() currentPage;
  @Input() totalPages;

  @Output() searchKeyReleased = new EventEmitter<string>();
  @Output() previousPageClicked = new EventEmitter<any>();
  @Output() nextPageClicked = new EventEmitter<any>();

  searchText = '';
  buttonPreviousPressed = false;
  buttonNextPressed = false;

  onKeyUp() {
    this.searchKeyReleased.emit(this.searchText);
  }

  onClickPreviousPage() {
    this.previousPageClicked.emit();
  }

  onClickNextPage() {
    this.nextPageClicked.emit();
  }

}
