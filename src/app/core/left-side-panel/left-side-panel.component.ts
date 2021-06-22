import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BookRecordsService } from '../../services/book-records.service';

@Component({
  selector: 'dru-left-side-panel',
  templateUrl: './left-side-panel.component.html',
  styleUrls: ['./left-side-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftSidePanelComponent {
  isAdditionInProgress$: Observable<boolean>;

  constructor(
    private router: Router,
    private bookService: BookRecordsService
  ) {
    this.isAdditionInProgress$ = this.bookService.getIsAdditionInProgress().pipe(delay(0));
  }

  onClickAdd() {
    this.router.navigate(['/book-management/add-book-wizard']);
  }

}
