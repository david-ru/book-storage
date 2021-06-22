import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.entity';
import { BookRecordsService } from 'src/app/services/book-records.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dru-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  headerTitle = "Book List";

  searchBookList: Book[];
  showMessageModal = false;
  selectedBookId: string;
  currentPage = 1;
  totalPages = 0;
  searchText = '';

  private componentIsDestroyed$ = new Subject<boolean>();

  constructor(
    private booksService: BookRecordsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.booksService.getAllBooks()) {
      this.filterBooksPaginated('', 1);
    } else {
      this.booksService.loadAllBooks().pipe(takeUntil(this.componentIsDestroyed$)).subscribe( (x : any) => {
        this.booksService.setAllBooks(x.data);
        this.filterBooksPaginated(this.searchText, this.currentPage);
      });
    }
  }

  onEditCard(id) {
    if (this.searchBookList.find(x => x.id === id).aditionComplete) {
      this.router.navigate(['/book-management/edit-book'], { queryParams: { "id": id } });
    } else {
      this.router.navigate(['/book-management/add-book-wizard'], { queryParams: { "id": id } });
    }
  }

  showConfirmationMessage(id) {
    this.selectedBookId = id;
    this.showMessageModal = true;
  }

  closeMessageModal() {
    this.selectedBookId = null;
    this.showMessageModal = false;
  }

  deleteCard(id) {
    this.booksService.deleteBook(id);
    this.filterBooksPaginated(this.searchText, this.currentPage);
    this.closeMessageModal();
  }

  filterBooksPaginated(searchText: string, currentPage: number) {
    this.searchText = searchText;
    
    const booksInfo = this.booksService.filterBooksPaginated(currentPage, searchText);
    this.searchBookList = booksInfo.books;
    this.totalPages = booksInfo.totalPages;
  }

  getPreviousPage() {
    if (this.currentPage > 1) {
      this.filterBooksPaginated(this.searchText, --this.currentPage);
    }    
  }

  getNextPage() {
    if (this.currentPage < this.totalPages) {
      this.filterBooksPaginated(this.searchText, ++this.currentPage);
    }
  }

  ngOnDestroy(): void {
    this.componentIsDestroyed$.next(true);
    this.componentIsDestroyed$.complete();
  }

}
