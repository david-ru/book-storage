import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BookRecordsService } from './book-records.service';

describe('BookRecordsService', () => {
  let service: BookRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    });
    service = TestBed.inject(BookRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
