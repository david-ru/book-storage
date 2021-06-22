import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../../model/book.entity';
import { BookRecordsService } from '../../../../services/book-records.service';

@Component({
  selector: 'dru-book-details-edit',
  templateUrl: './book-details-edit.component.html',
  styleUrls: ['./book-details-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsEditComponent implements OnInit {
  book: Book;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookRecordsService,
    private router: Router
  ) { 
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.book = this.bookService.getAllBooks()?.find( (book: Book) => book.id.toString() === params.get('id') );
    });
  }

  ngOnInit(): void {
  }

  onClickOk() {
    this.bookService.modifyBook(this.book);
    this.goToBookList();
  }
  
  onClickCancel() {
    this.goToBookList();
  }

  goToBookList() {
    this.router.navigate(['/book-management']);
  }
}
