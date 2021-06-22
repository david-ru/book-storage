import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.entity';
import { BookRecordsService } from 'src/app/services/book-records.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dru-book-management',
  templateUrl: './book-management.component.html',
})
export class BookManagementComponent {
 
}
