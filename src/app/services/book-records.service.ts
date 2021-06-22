import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../model/book.entity';
import { PAGE_SIZE } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class BookRecordsService {
  private bookList: Book[];
  private additionInProgress$ = new Subject<boolean>();

  constructor(
    private http: HttpClient
  ) { }

  public loadAllBooks(): Observable<any> {
    return this.http.get('assets/data/book-records.json');
  }

  public getAllBooks(): Book[] {
    return this.bookList;
  }

  public setAllBooks(bookList: Book[]) {
    this.bookList = bookList;
  }

  public filterBooksPaginated(currentPage: number, searchText): any {
    const firstBook = currentPage*PAGE_SIZE - PAGE_SIZE;
    const lastBook = currentPage*PAGE_SIZE;
    const allBooks = this.bookList.filter( book => book.title.toLowerCase().includes(searchText.toLowerCase())); ;
    return {
      books: allBooks?.slice(firstBook, lastBook),
      totalPages: Math.ceil(allBooks.length / PAGE_SIZE) ?? 0
    }
  }

  public modifyBook(book: Book) {
    const index = this.bookList.findIndex(i => i.id === book.id);
    this.bookList[index] = book;
  }

  public saveNewBook(newBook: Book) {
    if (!newBook.id) {
      newBook.id = this.calculateNextId(this.bookList);
    }
    if (this.isAdditionComplete(newBook)) {
      newBook.aditionComplete = true;
    }
    const index = this.bookList.findIndex(i => i.id === newBook.id);
    if (index === -1) {
      this.bookList.push(newBook);
    } else {
      this.bookList[index] = newBook;
    }
  }

  public deleteBook(id: number) {
    this.bookList = this.bookList.filter( book => book.id !== id);
    return this.bookList;
  }

  public setIsAdditionInProgress(value: boolean) {
    this.additionInProgress$.next(value);
  }

  public getIsAdditionInProgress(): Observable<boolean> {
    return this.additionInProgress$.asObservable();
  }

  private isAdditionComplete(book: Book) {
    return book.author && book.genres && book.id && book.releaseDate && book.synopsis && book.title;
  }

  private calculateNextId(bookList: Book[]) {
    return Math.max(...bookList.map(item => item.id)) + 1;
  }
  
}
